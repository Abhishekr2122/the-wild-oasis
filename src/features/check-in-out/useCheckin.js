import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: function (bookingId) {
      return updateBooking(bookingId, { status: "checked-in", isPaid: true });
    },

    onSuccess: function (data) {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: function () {
      toast.error("There was an Error while checking in");
    },
  });

  return { checkIn, isCheckingIn };
}
