import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  comment: string;
  author?: string;
  created_at?: string;
}

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-3 mb-3">
          <p className="text-gray-700">{review.comment}</p>

          {review.author && (
            <p className="text-sm text-gray-500 mt-1">
              — {review.author}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
