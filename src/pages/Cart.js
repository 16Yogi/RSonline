import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart, decrementQty, incrementQty, removeItem } from '../reduxconfig/CartSlice'
export default function Cart() {
    const dispatch = useDispatch()
    var { products } = useSelector(state => state.master.value)
    var carts = useSelector(state => state.carts.value)
    var cartLength = useSelector(state => state.carts.value.length)
	const [Totalprice, setTotalprice] = useState(1249);
	let Subtotal=0;

	// rozerpay interigation
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
	//// ozerpay interigation end
    if (carts == 0) {
        return (
            <div>
                <h1>Your cart is empty....</h1>
                <div className="emptycard">
                <img src="./images/emptyshop.jpg" width={300} height={250}/>
                <h5>click here to go back <br/><br/><Link to="/" className="btn btn-success">home</Link></h5>
                </div>
                <br/><br/><br/><br/>
            </div>
        )
    } else {
        return <>
            <div class="page-wrapper">
			<div class="page-content">
				
				<section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div class="container">
						<div class="page-breadcrumb d-flex align-items-center">
							<h3 class="breadcrumb-title pe-3">Shop Cart</h3>
							<div class="ms-auto">
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb mb-0 p-0">
										<li class="breadcrumb-item"><Link ><i class="bx bx-home-alt"></i> Home</Link>
										</li>
										<li class="breadcrumb-item"><Link >Shop</Link>
										</li>
										<li class="breadcrumb-item active" aria-current="page">Shop Cart</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
				
				<section class="py-4">
					<div class="container">
						<div class="shop-cart">
							<div class="row">
								<div class="col-12 col-xl-8">
                                <table class="table table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>S. No.</th>
                                    <th>Product Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((wh, index) => {
                                    const pd = products.find(ob => ob.id == wh.pid)
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td><img src={pd.thumbnail} height={100} width={150} /></td>
                                        <td>{pd.title}</td>
                                        <td>{pd.price}</td>
                                        <td><button onClick={() => dispatch(incrementQty(pd.id))}>+</button> {wh.qty} <button onClick={() => dispatch(decrementQty(pd.id))}>-</button></td>
                                        <td>{wh.qty * pd.price} </td>
                                        <td>
                                            <button onClick={() => dispatch(removeItem(pd.id))} class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <br/>
                        <div class="d-lg-flex align-items-center gap-2">
											<a  class="btn btn-dark btn-ecomm"><i class='bx bx-shopping-bag'></i> Continue Shoping</a>
											<a  class="btn btn-light btn-ecomm ms-auto" onClick={()=>dispatch(clearCart())}><i class='bx bx-x-circle'></i> Clear Cart</a>
											<a  class="btn btn-white btn-ecomm"><i class='bx bx-refresh'></i> Update Cart</a>
										</div>
								</div>
								<div class="col-12 col-xl-4">
									<div class="checkout-form p-3 bg-light">
										
										<div class="card rounded-0 border bg-transparent mb-0 shadow-none">
											<div class="card-body">
												<p class="mb-2">Subtotal: <span class="float-end">{
												carts.map((wh, index) => {
                                    const pd = products.find(ob => ob.id == wh.pid)
									Subtotal= parseInt(Subtotal+wh.qty * pd.price)
									// return a
									})}{Subtotal}</span>
												</p>
												<p class="mb-2">Shipping: <span class="float-end"> 20</span>
												</p>
												<p class="mb-2">Taxes: <span class="float-end"> 14.00</span>
												</p>
												<p class="mb-0">Discount: <span class="float-end">00</span>
												</p>
												<div class="my-3 border-top"></div>
												<h5 class="mb-0">Order Total: <span class="float-end">{Subtotal+28}</span></h5>
												<div class="my-4"></div>
												<div class="d-grid"> <span  class="btn btn-dark btn-ecomm" onClick={() => displayRazorpay(Subtotal)}>Proceed to Checkout</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</section>
				
			</div>
		</div>
        </>
    }
}
// Operation : Remove Item , Add To Cart