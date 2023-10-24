import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: function ({ email, password }) {
      return loginApi({ email, password });
    },
    onSuccess: function (data) {
      toast.success("Successfully logged in");
      navigate("/dashboard");
    },
    onError: function () {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
