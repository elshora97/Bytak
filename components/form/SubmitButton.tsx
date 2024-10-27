"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

function SubmitButton({ className = "", text = "submit" }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size="lg"
      className={`capitalize ${className}`}>
      {pending ? (
        <>
          <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
          Please Wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitButton;
