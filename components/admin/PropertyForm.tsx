"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const propertySchema = z.object({
  propertyName: z.string().min(2, { message: "Property name is required." }),
  propertyType: z.string().min(2, { message: "Property type is required." }),
  price: z.string().min(1, { message: "Price is required." }),
  area: z.string().min(1, { message: "Area is required." }),
  plotArea: z.string().optional(),
  bedrooms: z.string().optional(),
  transaction: z.string().optional(),
  furnishing: z.string().optional(),
  propertyAge: z.string().optional(),
  flatNo: z.string().optional(),
  buildingName: z.string().optional(),
  street: z.string().optional(),
  landmark: z.string().optional(),
  pinCode: z.string().optional(),
  address: z.string().optional(),
  city: z.string().min(1, { message: "City is required." }),
  location: z.string().min(1, { message: "Location is required." }),
  description: z.string().optional(),
  amenities: z.string().optional(),
  status: z.string().min(1, { message: "Status is required." }),
});

type PropertyFormValues = z.infer<typeof propertySchema>;

export default function PropertyForm() {
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      propertyName: "",
      propertyType: "",
      price: "",
      area: "",
      plotArea: "",
      bedrooms: "",
      transaction: "",
      furnishing: "",
      propertyAge: "",
      flatNo: "",
      buildingName: "",
      street: "",
      landmark: "",
      pinCode: "",
      address: "",
      city: "",
      location: "",
      description: "",
      amenities: "",
      status: "",
    },
  });

 const submitHandler = async (data: PropertyFormValues) => {
   try {
     // Send a POST request to the API route
     const response = await axios.post("/api/addproperty", data);

     // Handle the response (success message)
     alert(response.data.message);
     form.reset();
   } catch (error) {
     // Handle errors (e.g., validation or server errors)
     console.log("Error submitting property:",error);
     
   }
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white p-8 shadow-md rounded-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-8"
          >
            {/* Individual Input Fields */}
            <FormField
              control={form.control}
              name="propertyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter property name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter property type" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter price" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter area in sq. ft." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="plotArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plot Area</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter plot area in sq. ft."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter number of bedrooms" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transaction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter transaction type" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="furnishing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Furnishing</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter furnishing status" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertyAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Age</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter property age" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flatNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flat Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter flat number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="buildingName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter building name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter street" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="landmark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Landmark</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter landmark" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pin Code</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter pin code" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter city" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter location" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter status" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ammenities & Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
