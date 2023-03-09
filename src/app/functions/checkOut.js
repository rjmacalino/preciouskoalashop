import { loadStripe } from "@stripe/stripe-js";

export async function checkOut({lineItems}) {
    let stripePromise = null;

    const getStripe = () => {
        if(!stripePromise) {
            stripePromise = loadStripe('pk_test_51MiZiiE7nZ1XXBrxiDlWs8GSZEg8fFUxDWlfKPbRH8JCoUGCM31XD6xuJNJo4uzyI0dJZtEMdoICrZWCLl4WyN0U00EtJIBDiu')
        }
        return stripePromise;
    }

    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        shippingAddressCollection: {allowedCountries: ['AU']},
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })

}

// process.env.NEXT_PUBLIC_API_KEY