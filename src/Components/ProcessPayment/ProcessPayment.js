import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import SimpleCardForm from "./SimpleCardForm";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Igi3AHVkKz9QsSwJHOxaMYIlzshmdGi3hWL6g2uYIoVK74quOhlU9fWtzqQ5ahafBykih553WehjbaWTITAWqKl00uscMx8wD"
);

const processPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default processPayment;
