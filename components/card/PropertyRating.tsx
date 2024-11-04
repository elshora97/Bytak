/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchPropertyRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";
async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const { rating, count } = await fetchPropertyRating(propertyId);
  if (count === 0) return null;

  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-sm"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
