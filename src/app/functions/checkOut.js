import { loadStripe } from "@stripe/stripe-js";

export async function checkOut({lineItems}) {
    let stripePromise = null;

    const getStripe = () => {
        if(!stripePromise) {
            stripePromise = loadStripe('pk_live_51MiZiiE7nZ1XXBrxbRqokxjX8kxmbp7dniAzqEiFPxRuoUyyHFR9Mi1JxnlCgO2swQAE9v6Phi8HarC4mCyI31zA00xXhfY2eR')
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