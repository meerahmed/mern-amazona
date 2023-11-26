import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../util';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const reducer = (action, state) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, err: '', order: {} };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, err: '', order: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, err: action.error, order: {} };
    default:
      return state;
  }
};
export default function OrderDetailsScreen() {
  const [{ loading, err, order }, dispatch] = useReducer(reducer, {
    loading: true,
    err: '',
    order: {},
  });
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const search = useParams();
  const { id: orderId } = search;

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({
          type: 'FETCH_SUCCESS',
          loading: false,
          payload: data.order,
        });
      } catch (error) {
        toast.error(getError(error));
      }
    };
    if (!userInfo) {
      navigate('/login');
    }

    if (!order._id || (order._id && order._id) !== orderId) {
      fetchOrder();
    }
  }, [navigate, userInfo, order, orderId]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : err ? (
    <MessageBox variant="danger">err</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Order Details</title>
      </Helmet>
      {/* <div className="container small-container"> */}
      <h1 className="my-3">Order {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name: </strong> {order.shippingAddress.fullName} <br />
                <strong>Adderss:</strong> {order.shippingAddress.address}
                {order.shippingAddress.city}
                {order.shippingAddress.postalCode}
                {order.shippingAddress.country}
              </Card.Text>
              {order.isDeliverd ? (
                <MessageBox variant="success">
                  Delivered at: {order.delivered_at}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Delivered Yet</MessageBox>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <strong>Payment Method: </strong> {order.paymentMehod} <br />
              </Card.Text>
              {order.isPaid ? (
                <MessageBox variant="success">
                  Paid At: {order.paidAt}
                </MessageBox>
              ) : (
                <MessageBox className="mt-2" variant="danger">
                  Not Paid Yet
                </MessageBox>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <ListGroup>
                {order.orderItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={4}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnel"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md="4">{item.quantity}</Col>
                      <Col md="2">$ {item.price}</Col>
                      <Col md="2">$ {item.price * item.quantity}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summery</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items Price</Col>
                    <Col>$ {order.itemPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping Price</Col>
                    <Col>$ {order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax Price</Col>
                    <Col>$ {order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Price</Col>
                    <Col>$ {order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    // </div>
  );
}
