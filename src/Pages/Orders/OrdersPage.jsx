import React, { useState } from 'react';
import OrderTable from '../../components/Table/OrderTable';
import mockOrders from '../../data/mockOrders';
import './orders.css';

const OrdersPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredOrders = mockOrders.filter((order) => {
    const matchesStatus = filter === 'All' || order.status === filter;
    const matchesSearch =
      order.customer.toLowerCase().includes(searchText.toLowerCase()) ||
      order.id.toString().includes(searchText);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="orders-page">
      <h1 className="page-title">Orders Management</h1>

      <div className="top-bar">
        <div className="filter-group">
          {['All', 'Pending', 'Shipped', 'Delivered'].map((status) => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by Customer or Order ID..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button
              className="clear-btn"
              onClick={() => setSearchText('')}
            >
              X
            </button>
          )}
        </div>
      </div>

      <OrderTable orders={filteredOrders} />
    </div>
  );
};

export default OrdersPage;
