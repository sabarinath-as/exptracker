import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); // simple navigation
  };

  return (
    <div style={styles.page}>
      <Card style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to continue</p>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" style={styles.button} className="w-100">
            Log In
          </Button>
        </Form>

        <p style={styles.bottomText}>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign Up
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
