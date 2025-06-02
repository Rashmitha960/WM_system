import React from 'react';
import './OrderTable.css';
import { format } from 'date-fns';

const getPaymentIcon = (paymentMethod) => {
  switch (paymentMethod.toLowerCase()) {
    case 'credit card':
      return '💳'; // Credit Card emoji
    case 'paypal':
      return '🅿️'; // PayPal emoji
    case 'bank transfer':
      return '🏦'; // Bank icon
    case 'cash on delivery':
      return '💵'; // Cash icon
    default:
      return '💰'; // Default money icon
  }
};

const OrderTable = ({ orders }) => {
  return (
    <div className="order-table-wrapper">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '1rem' }}>
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <span className={`payment ${order.paymentMethod.toLowerCase().replace(/\s+/g, '-')}`}>
                    {getPaymentIcon(order.paymentMethod)} {order.paymentMethod}
                  </span>
                </td>
                <td>{format(new Date(order.date), 'MMM dd, yyyy')}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default OrderTable;