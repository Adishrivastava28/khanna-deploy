import { NextResponse } from 'next/server';
import prismadb from "@/lib/prismadb"; // Adjust the path to where your Prisma client is located

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON request body
    const body = await req.json();
    const {
      propertyName,
      propertyType,
      price,
      area,
      plotArea,
      bedrooms,
      transaction,
      furnishing,
      propertyAge,
      flatNo,
      buildingName,
      street,
      landmark,
      pinCode,
      address,
      city,
      location,
      description,
      amenities,
      status
    } = body;

    // Validate required fields
    if (
      !propertyName ||
      !propertyType ||
      !price ||
      !area ||
      !city ||
      !location ||
      !status
    ) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Store the property in the Prisma database
    const property = await prismadb.property.create({
      data: {
        propertyName,
        propertyType,
        price,
        area,
        plotArea,
        bedrooms,
        transaction,
        furnishing,
        propertyAge,
        flatNo,
        buildingName,
        street,
        landmark,
        pinCode,
        address,
        city,
        location,
        description,
       amenities:amenities ? amenities.join(", ") : "",
        status,
      },
    });

    console.log('Property stored successfully:', property);

    // Respond with a success message
    return new NextResponse(JSON.stringify({ message: 'Property added successfully' }), { status: 200 });
    
  } catch (error) {
    console.log('Error storing property:',error);
    // Respond with an error message if the database insertion fails
    return new NextResponse("Failed to store property", { status: 500 });
  }
}
