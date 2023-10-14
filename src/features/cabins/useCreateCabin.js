import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // Adding cabin using useMutation hook
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,

    onSuccess: function () {
      toast.success("Cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: function (err) {
      toast.error(err.message);
    },
  });

  return { isCreating, createCabin };
}
