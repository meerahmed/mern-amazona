import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModels.js';
import { isAuth } from '../utils.js';
const orderRouter = express.Router();
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItem.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();

    res.status(200).send({ message: 'New Order Created', order });
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orderData = await Order.findById(req.params.id);
    if (orderData) {
      res
        .status(200)
        .send({ message: 'Order found Successfully', order: orderData });
    } else {
      res.status(401).send({ message: 'Order not found!' });
    }
  })
);
export default orderRouter;
