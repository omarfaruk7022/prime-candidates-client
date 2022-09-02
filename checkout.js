import {loadStripe} from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './components/firebase.init';


export async function Checkout ({lineItems}){
   
    
    let stripePromise =null

    const getStatic =  () => {
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePromise
    }
    const stripe = await getStatic()
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
    })
}