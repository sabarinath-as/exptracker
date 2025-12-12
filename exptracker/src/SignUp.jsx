import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div style={styles.page}>
      <Card style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join us and get started</p>

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Full Name</Form.Label>
            <Form.Control
              name="name"
              placeholder="Enter your name"
              style={styles.input}
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              style={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Create a password"
              style={styles.input}
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" style={styles.button} className="w-100">
            Sign Up
          </Button>
        </Form>

        <p style={styles.bottomText}>
          Already have an account?{" "}
          <a href="/" style={styles.link}>
            Log In
          </a>
        </p>
      </Card>
    </div>
  );
}

const styles = {
page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fafafa",
  },
  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "20px",
    border: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  title: {
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#777",
    marginBottom: "20px",
    fontSize: "14px",
  },
  label: { fontWeight: 600 },
  input: {
    borderRadius: "12px",
    padding: "12px",
  },
  button: {
    background: "#4A90E2",
    border: "none",
    padding: "10px",
    borderRadius: "12px",
  },
  bottomText: {
    marginTop: "18px",
    fontSize: "14px",
  },
  link: {
    color: "#4A90E2",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
