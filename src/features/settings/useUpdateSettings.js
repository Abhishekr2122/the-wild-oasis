import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading, data, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: function () {
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: function () {
      toast.error("Settings could not be updated");
    },
  });

  return { isLoading, mutate };
}
