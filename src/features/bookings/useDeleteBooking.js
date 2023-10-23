import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: function (bookingId) {
      deleteBookingApi(bookingId);
    },

    onSuccess: function () {
      toast.success("booking successfully deleted");
      queryClient.invalidateQueries({ active: true });
    },

    onError: function () {
      toast.error("booking could not be deleted ");
    },
  });

  return { deleteBooking, isDeletingBooking };
}
