import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // deleting the cabin

  const {
    data,
    mutate: deleteCabin,
    isLoading: isDeleting,
  } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: function () {
      toast.success("Successfully deleted");
      queryClient.invalidateQueries(["cabins"]);
    },

    onError: function (err) {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}
