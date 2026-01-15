import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  created_at: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

   const fetchProperty = async () => {
  try {
    const response = await axios.get(`/api/properties/${id}`);
    setProperty(response.data);
  } catch {
    setError("Failed to load property details"); // no 'err' variable
  } finally {
    setLoading(false);
  }
};


    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="text-center mt-10">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
