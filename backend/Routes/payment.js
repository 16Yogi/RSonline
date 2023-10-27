const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const dotenv = require("dotenv");
const PaymentOrder = require('../model/paymentOrder')
dotenv.config()


router.post('/orders', async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});
		const options = {
			amount: req.body.amount * 100,
			currency: 'INR',
			receipt: crypto.randomBytes(10).toString('hex'),
		};

		instance.orders.create(options, async (error, order) => {
			if (error) {
				return res.status(500).json({ message: 'Something Went Wrong!' });
			}else{
				const paymentOrder = new PaymentOrder({
					order_id: order.id,
					amount: order.amount/100,
					currency: order.currency,
					receipt: order.receipt,
				});
	
				const savedOrder = await paymentOrder.save();
				res.status(200).json({ data: order, paymentOrder:paymentOrder });
			}

			// Save the payment order to MongoDB
			
		});
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error!' });
	}
});


router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
			
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
});

module.exports = router;
