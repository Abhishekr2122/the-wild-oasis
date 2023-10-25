import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashBoardLayout() {
  const { bookings, isLoading: loading1 } = useRecentBookings();
  const { recentStays, isLoading: loading2 } = useRecentStays();

  if (loading1 || loading2) {
    return <Spinner />;
  }

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays activity</div>
      <div>Chart stay durations</div>
      <div>Chart Sales</div>
    </StyledDashboardLayout>
  );
}
