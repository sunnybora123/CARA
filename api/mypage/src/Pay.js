import React from 'react'
import {styled} from "styled-components";
import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from "axios";

const KEY="pk_test_51MNAreSBcw0fLKmfqvsKVeh16mOcA6GiHo8RBifnnHVrzi9UiOaBS82RLV4sUfjfRVqJ5zFYka1FrGw0m7hpWrX700nU9FvHAh";


const Button=styled.button`
padding: 10px 20px;
font-size: 16px;
background-color: #4caf50;
color: #fff;
margin-top: 50vh;
margin-left: 50vw;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
`
const Pay = () => {

    const [stripeToken,setStripeToken]=useState(null)

    const onToken=(token)=>{
        setStripeToken(token);

    };
    useEffect(()=>{
        const makeRequest=async()=>{
            try{
                const res= await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId: stripeToken.id,amount: 2000,

                });
                console.log(res.data)

            }catch(err){
                console.log(err);

            }
        }
        stripeToken && makeRequest();

    },[stripeToken])
  return (
    <div>
        <StripeCheckout name="Lama Shop" 
        image="https://avatars.githubusercontent.com/u/1486366?v=4" 
        billingAddress
        shippingAddress
        description=" Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        
        ><Button>Pay now</Button></StripeCheckout>
    </div>
  )
}

export default Pay