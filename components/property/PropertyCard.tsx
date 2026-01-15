// pages/property/PropertyCard.tsx
import { PropertyProps } from "../../constants";

interface PropertyCardProps {
  property: PropertyProps;
}

// Add `export default` here
export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{property.name}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {property.category?.join(", ")}
      </p>
      <p className="text-sm font-medium">
        📍 {property.address.city}, {property.address.country}
      </p>
      <p className="text-sm font-bold mt-2">₦{property.price.toLocaleString()}</p>
      <p className="text-xs text-gray-400 mt-1">
        Rating: {property.rating}
      </p>
    </div>
  );
}
