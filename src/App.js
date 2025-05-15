import React, { useState } from 'react';
import { jsPDF } from "jspdf";

const itemsData = {
  Pen: [
    { name: 'Gel Pen', price: 10, review: 'Smooth writing experience', discount: 5 },
    { name: 'Ball Pen', price: 5, review: 'Affordable, good for everyday use', discount: 2 },
    { name: 'Ink Pen', price: 15, review: 'Classic ink pen', discount: 10 },
    { name: 'Fountain Pen', price: 25, review: 'Elegant design, premium quality', discount: 15 },
  ],
  Pencil: [
    { name: 'HB Pencil', price: 3, review: 'Standard pencil, perfect for writing', discount: 1 },
    { name: '2B Pencil', price: 4, review: 'Good for drawing', discount: 2 },
    { name: 'Mechanical Pencil', price: 20, review: 'Precise and reliable', discount: 5 },
  ],
  Notebook: [
    { name: 'A4 Notebook', price: 25, review: 'Large size for writing', discount: 3 },
    { name: 'A5 Notebook', price: 20, review: 'Compact size for easy carrying', discount: 2 },
    { name: 'Pocket Notebook', price: 15, review: 'Convenient for quick notes', discount: 1 },
    { name: 'Spiral Notebook', price: 30, review: 'Durable and stylish', discount: 5 },
  ],
  Marker: [
    { name: 'Whiteboard Marker', price: 12, review: 'Perfect for whiteboard use', discount: 2 },
    { name: 'Permanent Marker', price: 15, review: 'Bold and permanent', discount: 3 },
    { name: 'Highlighter', price: 18, review: 'Bright and clear highlights', discount: 4 },
  ],
};

function App() {
  const [report, setReport] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState({});

  const handleAddItem = (item) => {
    const exists = report.find((r) => r.name === item.name);
    if (exists) {
      setReport(report.map((r) =>
        r.name === item.name ? { ...r, quantity: r.quantity + 1 } : r
      ));
    } else {
      setReport([...report, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (name) => {
    setReport(report.filter((r) => r.name !== name));
  };

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + ['Item,Price,Quantity']
        .concat(report.map(r => `${r.name},${r.price},${r.quantity}`))
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inventory_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSingleItem = (item) => {
    const doc = new jsPDF();
    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const dayString = date.toLocaleDateString('en-US', { weekday: 'long' });

    // Adding content to the PDF with structured text
    doc.setFontSize(16);
    doc.text(`Item Report for: ${item.name}`, 10, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${dateString}`, 10, 30);
    doc.text(`Day: ${dayString}`, 10, 40);
    doc.text(`Price: ₹${item.price}`, 10, 50);
    doc.text(`Review: ${item.review}`, 10, 60);
    doc.text(`Discount: ${item.discount}%`, 10, 70);

    // Saving the PDF with a clean format
    doc.save(`${item.name.replace(" ", "_")}_report.pdf`);
  };

  const toggleCategory = (cat) => {
    setExpanded({ ...expanded, [cat]: !expanded[cat] });
  };

  const totalCost = report.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={darkMode ? "dark container" : "container"}>
      <header>
        <h1>Inventory Management System</h1>
        <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="main">
        <div className="sidebar">
          <h2>Categories</h2>
          {Object.keys(itemsData).map((category) => (
            <div key={category}>
              <button onClick={() => toggleCategory(category)}>
                {expanded[category] ? '▼' : '►'} {category}
              </button>
              {expanded[category] && (
                <div className="sub-items">
                  {itemsData[category].map((item) => (
                    <div key={item.name} className="sub-item">
                      <span onClick={() => handleDownloadSingleItem(item)}>{item.name}</span>
                      <button onClick={() => handleAddItem(item)}>Add</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="report">
          <h2>Inventory Report</h2>
          {report.length === 0 ? (
            <p>No items added.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {report.map((r) => (
                    <tr key={r.name}>
                      <td>{r.name}</td>
                      <td>₹{r.price}</td>
                      <td>{r.quantity}</td>
                      <td><button onClick={() => handleRemoveItem(r.name)}>X</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total Cost: ₹{totalCost}</h3>
              <button className="download" onClick={handleDownloadCSV}>Download Report</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
