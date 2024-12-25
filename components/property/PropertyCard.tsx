import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PropertyCardProps {
  propertyName: string;
  propertyType: string;
  price: string;
  area: string;
  plotArea?: string;
  bedrooms?: string;
  transaction?: string;
  furnishing?: string;
  propertyAge?: string;
  flatNo?: string;
  buildingName?: string;
  street?: string;
  landmark?: string;
  pinCode?: string;
  address?: string;
  city: string;
  location: string;
  description?: string;
  amenities?: string[];
  status: string;
  imageSrc: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
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
  status,
  imageSrc,
}) => {
  return (
    <Card className="w-[400px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Property Image */}
      <img
        src={imageSrc}
        alt={propertyName}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />

      <CardHeader>
        <CardTitle className="text-xl text-center font-semibold font-serif text-gray-800">
          {propertyName}
        </CardTitle>
        <CardDescription className="text-sm text-center text-gray-500">
          {status}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold font-serif text-black ml-1">
            Price: {price}
          </div>
          <div className="text-sm mr-1 font-serif font-semibold">
            Area: {area} Sq.ft
          </div>
        </div>
        <div className="text-sm text-black mb-2">
          <p className="font-serif font-semibold ml-1">Address: {location}</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center bg-gray-100 p-3">
        {/* Dialog Trigger */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
               
                <VisuallyHidden >{propertyName}</VisuallyHidden>
              </DialogTitle>
              <DialogDescription>
                Full details of the property are listed below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="text-sm text-black">
                <h3 className="font-semibold">Property Information</h3>
                <p>
                  <strong>Status:</strong> {status}
                </p>
                <p>
                  <strong>Type:</strong> {propertyType}
                </p>
                <p>
                  <strong>Price:</strong> {price}
                </p>
                <p>
                  <strong>Area:</strong> {area} Sq.ft
                </p>
                {plotArea && (
                  <p>
                    <strong>Plot Area:</strong> {plotArea} Sq.ft
                  </p>
                )}
                {bedrooms && (
                  <p>
                    <strong>Bedrooms:</strong> {bedrooms}
                  </p>
                )}
                {transaction && (
                  <p>
                    <strong>Transaction:</strong> {transaction}
                  </p>
                )}
                {furnishing && (
                  <p>
                    <strong>Furnishing:</strong> {furnishing}
                  </p>
                )}
                {propertyAge && (
                  <p>
                    <strong>Property Age:</strong> {propertyAge}
                  </p>
                )}
              </div>

              <div className="text-sm text-black">
                <h3 className="font-semibold">Location Information</h3>
                {flatNo && (
                  <p>
                    <strong>Flat No./Unit No.:</strong> {flatNo}
                  </p>
                )}
                {buildingName && (
                  <p>
                    <strong>Building Name:</strong> {buildingName}
                  </p>
                )}
                {street && (
                  <p>
                    <strong>Street:</strong> {street}
                  </p>
                )}
                {landmark && (
                  <p>
                    <strong>Landmark:</strong> {landmark}
                  </p>
                )}
                {pinCode && (
                  <p>
                    <strong>Pin Code:</strong> {pinCode}
                  </p>
                )}
                {address && (
                  <p>
                    <strong>Address:</strong> {address}
                  </p>
                )}
                <p>
                  <strong>City:</strong> {city}
                </p>
                <p>
                  <strong>Location:</strong> {location}
                </p>
              </div>

              {description && (
                <div className="text-sm text-black">
                  <h3 className="font-semibold">Property Description</h3>
                  <p>{description}</p>
                </div>
              )}

              {amenities && amenities.length > 0 && (
                <div className="text-sm text-black">
                  <h3 className="font-semibold">Amenities</h3>
                  <ul className="list-disc pl-5">
                    {amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
