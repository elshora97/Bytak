"use client";
import { useState } from "react";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/form/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { SubmitButton } from "../form/Button";

function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button onClick={() => setIsVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input
              type="hidden"
              name="propertyId"
              value={propertyId}
            />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              defaultValue="Amazing Place !!!"
            />
            <SubmitButton
              text="submit"
              className="mt-4"
            />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
