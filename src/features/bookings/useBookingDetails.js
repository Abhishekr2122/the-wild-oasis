import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export default function useBookingDetails() {
  const { bookingId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookingDetails", bookingId],
    queryFn: function () {
      return getBooking(bookingId);
    },
  });

  return { data, isLoading };
}
