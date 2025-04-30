import React, { useState } from 'react';
import './styles.css';

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Mouse', category: 'Electronics' },
  { id: 3, name: 'Keyboard', category: 'Electronics' },
  { id: 4, name: 'Monitor', category: 'Electronics' },
  { id: 5, name: 'Printer', category: 'Electronics' },
  { id: 6, name: 'Desk', category: 'Furniture' },
  { id: 7, name: 'Office Chair', category: 'Furniture' },
  { id: 8, name: 'Bookshelf', category: 'Furniture' },
  { id: 9, name: 'Filing Cabinet', category: 'Furniture' },
  { id: 10, name: 'Pen Pack', category: 'Stationery' },
  { id: 11, name: 'Notebook', category: 'Stationery' },
  { id: 12, name: 'Sticky Notes', category: 'Stationery' },
  { id: 13, name: 'Whiteboard', category: 'Office Supplies' },
  { id: 14, name: 'Projector', category: 'Electronics' },
  { id: 15, name: 'Extension Cord', category: 'Electronics' },
  { id: 16, name: 'Router', category: 'Electronics' },
  { id: 17, name: 'Scissors', category: 'Stationery' },
  { id: 18, name: 'Paper Ream', category: 'Stationery' },
  { id: 19, name: 'Stapler', category: 'Stationery' },
  { id: 20, name: 'USB Drive', category: 'Electronics' },
];

function App() {
  const [inventory, setInventory] = useState([]);
  const [showItemPanel, setShowItemPanel] = useState(false);

  const handleAddItem = (item) => {
    setInventory([...inventory, { ...item, addedAt: new Date().toLocaleString() }]);
    setShowItemPanel(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">📦</div>
          <div>
            <h1 className="title">Inventory Management System</h1>
            <p className="subtitle">Efficient. Reliable. Organized.</p>
          </div>
        </div>
      </header>

      <main className="main">
        <button className="add-button" onClick={() => setShowItemPanel(!showItemPanel)}>
          {showItemPanel ? 'Close Item List' : 'Add Item'}
        </button>

        {/* Corrected the className syntax */}
        <div className={`side-panel ${showItemPanel ? 'open' : ''}`}>
          <h3>Select Item to Add</h3>
          {items.map((item) => (
            <div key={item.id} className="item-card" onClick={() => handleAddItem(item)}>
              <strong>{item.name}</strong>
              <span>{item.category}</span>
            </div>
          ))}
        </div>

        <section className="inventory-section">
          <h2>Current Inventory</h2>
          {inventory.length === 0 ? (
            <p className="empty">No items added yet. Click "Add Item" to begin.</p>
          ) : (
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Added At</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.addedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
