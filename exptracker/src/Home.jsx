import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
export default function Home() {
  const [productName, setProductName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const getStatus = (date) => {
    const today = new Date().toISOString().split("T")[0];
    if (date < today) return "Expired";

    if (date === today) return "Expiring Soon";
    return "Fresh";
  };
  const handleSave = () => {
    if (!productName || !expiryDate) return alert("Fill all fields!");

    const newProduct = { name: productName, date: expiryDate };

    const today = new Date().toISOString().split("T")[0];
    if (newProduct.date < today) {
      alert("Product is expired");
    }

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = newProduct;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }

    setProductName("");
    setExpiryDate("");
  };
  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };
  const editProduct = (index) => {
    setProductName(products[index].name);
    setExpiryDate(products[index].date);
    setEditIndex(index);
  };

  return (
    <Container
      fluid
      className="py-4"
      style={{ background: "#f2f2f2", minHeight: "100vh" }}
    >
      {}
      <div className="text-center mb-4">
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: "bold" }}>
          Product Expiry Tracker
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Track and manage product expiry dates with a clean, simple interface.
        </p>
      </div>

      {}
      <Card
        className="p-4 mb-4 mx-auto"
        style={{
          maxWidth: "720px",
          borderRadius: "20px",
          border: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        }}
      >
        <h4 style={{ fontFamily: "Georgia, serif" }}> Add New Product</h4>

        <Row className="mt-3">
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{ borderRadius: "12px" }}
            />
          </Col>

          <Col md={4}>
            <Form.Control
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={{ borderRadius: "12px" }}
            />
          </Col>

          <Col md={3}>
            <Button
              className="w-100"
              style={{
                background: "#4A90E2",
                border: "none",
                borderRadius: "12px",
                padding: "10px 0",
              }}
              onClick={handleSave}
            >
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </Col>
        </Row>
      </Card>

      {}
      <Card
        className="p-4 mx-auto"
        style={{
          maxWidth: "720px",
          borderRadius: "20px",
          border: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        }}
      >
        <h4 style={{ fontFamily: "Georgia, serif" }}> Your Products</h4>

        {products.length === 0 && (
          <p className="mt-3" style={{ color: "#777" }}>
            No products added yet.
          </p>
        )}

        {products.map((item, index) => (
          <Row
            key={index}
            className="p-3 my-2"
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <Col md={4}>
              <strong>{item.name}</strong>
            </Col>

            <Col md={3}>📅 {item.date}</Col>

            <Col md={3}>
              {(() => {
                const status = getStatus(item.date);
                if (status === "Expired")
                  return <span style={{ color: "#ff4d4d" }}>🔴 Expired</span>;
                if (status === "Expiring Soon")
                  return (
                    <span style={{ color: "#ff9900" }}>🟡 Expiring Soon</span>
                  );
                return <span style={{ color: "#4CAF50" }}>🟢 Fresh</span>;
              })()}
            </Col>

            <Col md={2} className="text-end">
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                style={{ borderRadius: "10px" }}
                onClick={() => editProduct(index)}
              >
                ✏️
              </Button>

              <Button
                variant="outline-danger"
                size="sm"
                style={{ borderRadius: "10px" }}
                onClick={() => deleteProduct(index)}
              >
                🗑️
              </Button>
            </Col>
          </Row>
        ))}
      </Card>
    </Container>
  );
}
