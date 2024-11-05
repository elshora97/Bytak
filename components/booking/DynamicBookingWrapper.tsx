"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
import { Booking } from "@/utils/types";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

const ClientDynamicBookingWrapper = dynamic(
  () => import("@/components/booking/BookingWrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[200px] w-full" />,
  }
);

function DynamicBookingWrapper({
  propertyId,
  price,
  bookings,
}: BookingWrapperProps) {
  return (
    <ClientDynamicBookingWrapper
      propertyId={propertyId}
      price={price}
      bookings={bookings}
    />
  );
}

export default DynamicBookingWrapper;
