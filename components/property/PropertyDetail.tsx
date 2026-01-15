interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  created_at: string;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {property.title}
      </h1>

      <p className="text-gray-600 mb-2">
        📍 {property.location}
      </p>

      <p className="text-xl font-semibold mb-4">
        ₦{Number(property.price).toLocaleString()}
      </p>

      <p className="text-gray-700 mb-6">
        {property.description}
      </p>

      <p className="text-sm text-gray-400">
        Posted on {new Date(property.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
