"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";
const Description = ({ description }: { description: string }) => {
  const [isFullDesc, setIsFullDesc] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const displayedDescription =
    isLongDescription && !isFullDesc
      ? description.substring(0, 300) + "..."
      : description;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button
          variant="link"
          className="pl-0"
          onClick={() => setIsFullDesc(!isFullDesc)}>
          {isFullDesc ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
};

export default Description;
