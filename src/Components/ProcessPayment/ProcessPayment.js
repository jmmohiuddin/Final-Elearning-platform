import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie2FMGYjQYCH6jsGuW2xwaFqZaRseO5X0NPzeXvMgIEJUMjI6ZVOWDKFpCKp2QwTUPaNejJXJ99fnyGDgPC1yHa00SQWjEBp5');

const processPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default processPayment;