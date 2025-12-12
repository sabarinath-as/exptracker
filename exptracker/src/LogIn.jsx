import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const s = {
    page: {
      height: "100vh",
      background: "#f2f2f2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Inter, sans-serif",
    },
    card: {
      width: "380px",
      padding: "30px",
      borderRadius: "20px",
      background: "#fff",
      border: "1px solid #e6e6e6",
      boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
    },
    title: { fontSize: "26px", fontWeight: "700", color: "#333" },
    subtitle: { color: "#777", marginBottom: "20px", fontSize: "14px" },
    label: { fontWeight: 600, color: "#444" },
    input: { padding: "12px", borderRadius: "10px" },
    button: {
      background: "#00C2C7",
      border: "none",
      padding: "10px",
      borderRadius: "12px",
      fontWeight: "600",
      marginTop: "10px",
    },
    bottomText: { textAlign: "center", marginTop: "15px" },
    link: { color: "#00C2C7", fontWeight: "700", textDecoration: "none" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div style={s.page}>
      <Card style={s.card}>
        <h2 style={s.title}>Welcome Back</h2>
        <p style={s.subtitle}>Log in to continue</p>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label style={s.label}>Email</Form.Label>
            <Form.Control
              type="email"
              style={s.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={s.label}>Password</Form.Label>
            <Form.Control
              type="password"
              style={s.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" style={s.button}>
            Log In
          </Button>
        </Form>

        <p style={s.bottomText}>
          Don't have an account?{" "}
          <a href="/signup" style={s.link}>
            Sign Up
          </a>
        </p>
      </Card>
    </div>
  );
}
