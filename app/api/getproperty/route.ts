import { NextResponse } from 'next/server';
import { PrismaClient, Property } from '@prisma/client';

const prisma = new PrismaClient();

interface PropertyResponse {
  properties: Property[];
  hasMore: boolean;
}

export async function GET(req: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1'); // Default to page 1
    const limit = 15; // Limit per page
    const skip = (page - 1) * limit;

    // Fetch properties from the database
    const properties = await prisma.property.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        createdAt: 'desc', // Sort by most recent first
      },
    });

    // Check if there are more properties available
    const totalCount = await prisma.property.count();
    const hasMore = totalCount > page * limit;

    // Return properties with a flag indicating if more exist
    const response: PropertyResponse = {
      properties,
      hasMore,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}
