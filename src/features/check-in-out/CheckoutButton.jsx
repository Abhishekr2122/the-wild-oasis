import Button from "../../ui/Button";
import useCheckout from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={function () {
        checkOut(bookingId);
      }}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
