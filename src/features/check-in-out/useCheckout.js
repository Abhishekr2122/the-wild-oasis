import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkOut, isLoading: isCheckingout } = useMutation({
    mutationFn: function (bookingId) {
      return updateBooking(bookingId, { status: "checked-out" });
    },
    onSuccess: function (data) {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: function () {
      toast.error("There was an error while checking out");
    },
  });

  return { checkOut, isCheckingout };
}
