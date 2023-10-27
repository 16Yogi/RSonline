import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../reduxconfig/CartSlice";
export default function ProductDetails() {

  const [add, setadd] = useState(0);
  const dispatch = useDispatch()
  var sp = useSelector(state => state.SingleProduct.value)





  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_VdGdvprTKB8u1w",
      currency: "INR",
      amount: amount * 100,
      name: "Code with akky",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "code with akky",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };



  return (
    <div>
      <br/> <br/> 
      <div className='row'>
        
         
       {
        sp.map((item)=>
          <>
          
          <div className='col-6'>
          <div className='text-center'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: item.thumbnail
              },
              largeImage: {
                src: item.thumbnail,
                width: 1200,
                height: 1800
              }
            }} />
          </div>
          <br/><br/>
          <div className='row d-flex justify-content-center'>
            <div className='col-3'> <img src={item.images[0]} className='img-fluid' /></div>
            <div className='col-3'> <img src={item.images[1]} className='img-fluid' /></div>
            <div className='col-3'> <img src={item.images[2]} className='img-fluid' /></div>
            {/* <noscript onLoad={setImg1(item.thumbnail)}/> */}
          </div>

        </div>
        <div className='col-6 py-5'>
          <h3>{item.title}</h3>
          <h5>{item.description}</h5>
          <h2>Rs {item.price}/-</h2>
          <h5>Description:</h5><p>{item.description}</p>
          <div className='space-between' >
            {add==0?<button className='btn btn-warning' onClick={()=>{dispatch(addItem(item.id)); setadd(1)}}>Add to Card</button>:<button className='btn btn-warning' onClick={()=>{dispatch(removeItem(item.id)); setadd(0)}}>remove to Card</button>}&nbsp;&nbsp;&nbsp;
            <button className='btn btn-dark ' onClick={() => displayRazorpay(item.price)}>buy now</button>
          </div>
        </div>
          </>
          
        )
       }
         
      </div>
    </div >
  )
}
