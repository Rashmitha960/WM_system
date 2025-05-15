import React, { useState } from 'react';

const warehouseData = [
  { type: 'Standard', section: 'Receiving', location: 'L1-0001-01', volunteers: '3', availability: 'Available' },
  { type: 'Temp Storage', section: 'Packing', location: 'L1-0002-04', volunteers: '5', availability: 'Unavailable' },
  { type: 'Free Storage', section: 'Long Term Storage', location: 'L1-0003-02', volunteers: '2', availability: 'Available' },
  { type: 'Hazardous', section: 'Chemicals', location: 'L1-0004-01', volunteers: '4', availability: 'Unavailable' },
];

const sections = ['General', 'Inventory Management', 'Warehouse Management', 'Order Management', 'Billing'];

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('Warehouse Management');

  // General Settings
  const [generalDetails, setGeneralDetails] = useState({
    companyName: '',
    address: '',
    contactEmail: '',
    phoneNumber: '',
  });

  // Inventory Management
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '' });

  // Order Management
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderId: '',
    customerName: '',
    product: '',
    quantity: '',
    status: 'Pending',
  });

  // Handle General Settings change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    alert(`General details saved:\n
Company Name: ${generalDetails.companyName}
Address: ${generalDetails.address}
Email: ${generalDetails.contactEmail}
Phone: ${generalDetails.phoneNumber}`);
  };

  // Inventory Management handlers
  const handleAddItem = (e) => {
    e.preventDefault();

    if (!newItem.name.trim() || !newItem.category.trim() || newItem.quantity === '') {
      alert('Please fill all inventory fields.');
      return;
    }

    const quantityNum = Number(newItem.quantity);
    if (isNaN(quantityNum) || quantityNum < 0) {
      alert('Quantity must be a non-negative number.');
      return;
    }

    let status = 'In Stock';
    if (quantityNum === 0) status = 'Out of Stock';
    else if (quantityNum < 20) status = 'Low Stock';

    const item = {
      id: Date.now(),
      name: newItem.name.trim(),
      category: newItem.category.trim(),
      quantity: quantityNum,
      status,
    };

    setInventory((prev) => [...prev, item]);
    setNewItem({ name: '', category: '', quantity: '' });
  };

  const handleDeleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  // Order Management handlers
  const handleAddOrder = (e) => {
    e.preventDefault();

    if (
      !newOrder.orderId.trim() ||
      !newOrder.customerName.trim() ||
      !newOrder.product.trim() ||
      newOrder.quantity === ''
    ) {
      alert('Please fill all order fields.');
      return;
    }

    const quantityNum = Number(newOrder.quantity);
    if (isNaN(quantityNum) || quantityNum <= 0) {
      alert('Quantity must be a positive number.');
      return;
    }

    const order = {
      id: Date.now(),
      orderId: newOrder.orderId.trim(),
      customerName: newOrder.customerName.trim(),
      product: newOrder.product.trim(),
      quantity: quantityNum,
      status: newOrder.status,
    };

    setOrders((prev) => [...prev, order]);
    setNewOrder({ orderId: '', customerName: '', product: '', quantity: '', status: 'Pending' });
  };

  const handleDeleteOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  // UI Render by section
  const renderContent = () => {
    switch (activeSection) {
      case 'General':
        return (
          <div>
            <h2>General Settings</h2>
            <form onSubmit={handleGeneralSubmit} className="general-form">
              <label>
                Company Name:<br />
                <input
                  type="text"
                  name="companyName"
                  value={generalDetails.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                  required
                />
              </label>
              <br />
              <label>
                Address:<br />
                <textarea
                  name="address"
                  value={generalDetails.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                  required
                />
              </label>
              <br />
              <label>
                Contact Email:<br />
                <input
                  type="email"
                  name="contactEmail"
                  value={generalDetails.contactEmail}
                  onChange={handleInputChange}
                  placeholder="Enter contact email"
                  required
                />
              </label>
              <br />
              <label>
                Phone Number:<br />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={generalDetails.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </label>
              <br />
              <button type="submit">Save General Details</button>
            </form>
          </div>
        );

      case 'Inventory Management':
        return (
          <div>
            <h2>Inventory Management</h2>

            <form onSubmit={handleAddItem} style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem((prev) => ({ ...prev, name: e.target.value }))}
                required
                style={{ marginRight: 8 }}
              />
              <input
                type="text"
                placeholder="Category"
                value={newItem.category}
                onChange={(e) => setNewItem((prev) => ({ ...prev, category: e.target.value }))}
                required
                style={{ marginRight: 8 }}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={(e) => setNewItem((prev) => ({ ...prev, quantity: e.target.value }))}
                min="0"
                required
                style={{ marginRight: 8, width: 80 }}
              />
              <button type="submit">Add Item</button>
            </form>

            {inventory.length === 0 ? (
              <p>No inventory items yet.</p>
            ) : (
              <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map(({ id, name, category, quantity, status }) => (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td style={{ textAlign: 'center' }}>{quantity}</td>
                      <td style={{ textAlign: 'center' }}>{status}</td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleDeleteItem(id)}
                          style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'Warehouse Management':
        return (
          <div>
            <h2>Warehouse Management</h2>
            <table>
              <thead>
                <tr>
                  <th>Standard Type</th>
                  <th>Section</th>
                  <th>Board Location</th>
                  <th>Volunteers</th>
                  <th>Default Stock Availability</th>
                </tr>
              </thead>
              <tbody>
                {warehouseData.map((entry, index) => (
                  <tr key={index}>
                    <td><span className={`badge ${entry.type.toLowerCase().replace(' ', '-')}`}>{entry.type}</span></td>
                    <td>{entry.section}</td>
                    <td>{entry.location}</td>
                    <td>{entry.volunteers}</td>
                    <td>{entry.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'Order Management':
        return (
          <div>
            <h2>Order Management</h2>
            <form onSubmit={handleAddOrder} style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="Order ID"
                value={newOrder.orderId}
                onChange={(e) => setNewOrder((prev) => ({ ...prev, orderId: e.target.value }))}
                required
                style={{ marginRight: 8 }}
              />
              <input
                type="text"
                placeholder="Customer Name"
                value={newOrder.customerName}
                onChange={(e) => setNewOrder((prev) => ({ ...prev, customerName: e.target.value }))}
                required
                style={{ marginRight: 8 }}
              />
              <input
                type="text"
                placeholder="Product"
                value={newOrder.product}
                onChange={(e) => setNewOrder((prev) => ({ ...prev, product: e.target.value }))}
                required
                style={{ marginRight: 8 }}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={newOrder.quantity}
                onChange={(e) => setNewOrder((prev) => ({ ...prev, quantity: e.target.value }))}
                min="1"
                required
                style={{ marginRight: 8, width: 80 }}
              />
              <select
                value={newOrder.status}
                onChange={(e) => setNewOrder((prev) => ({ ...prev, status: e.target.value }))}
                style={{ marginRight: 8 }}
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <button type="submit">Add Order</button>
            </form>

            {orders.length === 0 ? (
              <p>No orders added yet.</p>
            ) : (
              <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ id, orderId, customerName, product, quantity, status }) => (
                    <tr key={id}>
                      <td>{orderId}</td>
                      <td>{customerName}</td>
                      <td>{product}</td>
                      <td style={{ textAlign: 'center' }}>{quantity}</td>
                      <td style={{ textAlign: 'center' }}>{status}</td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => handleDeleteOrder(id)}
                          style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'Billing':
        return (
          <div>
            <h2>Billing Section</h2>
            <p>Billing related content here...</p>
          </div>
        );

      default:
        return <p>Select a section to see details.</p>;
    }
  };

  return (
    <div className="settings-page" style={{ fontFamily: 'Arial, sans-serif', maxWidth: 1000, margin: 'auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Warehouse Management System - Settings</h1>

      {/* Section Tabs */}
      <div className="sections" style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', gap: 15 }}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              padding: '10px 18px',
              cursor: 'pointer',
              border: 'none',
              borderBottom: activeSection === section ? '3px solid #007bff' : '3px solid transparent',
              backgroundColor: activeSection === section ? '#e6f0ff' : '#f7f7f7',
              fontWeight: activeSection === section ? '600' : '400',
              borderRadius: '4px 4px 0 0',
              transition: 'background-color 0.3s',
            }}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className="content"
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: 20,
          minHeight: 300,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
