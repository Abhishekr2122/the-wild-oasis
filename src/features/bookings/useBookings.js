import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  console.log(filterValue);

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: function () {
      return getBookings({ filter });
    },
  });

  return { isLoading, data };
}
