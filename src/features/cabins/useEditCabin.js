import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: function ({ newCabinData, id }) {
      createEditCabin(newCabinData, id);
    },

    onSuccess: function () {
      toast.success("Cabin successfully edited");
      QueryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: function (err) {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}
