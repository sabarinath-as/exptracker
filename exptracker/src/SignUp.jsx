import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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
    title: { fontSize: "26px", fontWeight: 700, color: "#333" },
    subtitle: { color: "#777", marginBottom: "20px", fontSize: "14px" },
    label: { fontWeight: 600, color: "#444" },
    input: { padding: "12px", borderRadius: "10px" },
    button: {
      background: "#00C2C7",
      border: "none",
      padding: "10px",
      borderRadius: "12px",
      fontWeight: "600",
    },
    bottomText: { textAlign: "center", marginTop: "15px" },
    link: { color: "#00C2C7", textDecoration: "none", fontWeight: "700" },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div style={s.page}>
      <Card style={s.card}>
        <h2 style={s.title}>Create Account</h2>
        <p style={s.subtitle}>Join us to get started</p>

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label style={s.label}>Full Name</Form.Label>
            <Form.Control
              name="name"
              style={s.input}
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={s.label}>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              style={s.input}
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={s.label}>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              style={s.input}
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" style={s.button}>
            Sign Up
          </Button>
        </Form>

        <p style={s.bottomText}>
          Already have an account?{" "}
          <a href="/" style={s.link}>
            Log In
          </a>
        </p>
      </Card>
    </div>
  );
}
