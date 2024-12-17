import React, { useState } from "react";
import * as S from "./styles";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_mpcoa06";
    const TEMPLATE_ID = "template_yd1cofe";
    const PUBLIC_KEY = "OQQCIihaSx3GyZ1Wk";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          // Show a prompt
          window.alert("Message sent successfully!");

          // Reset form
          setFormData({ name: "", email: "", phone: "", message: "" });

          // Scroll to top of the page
          window.scrollTo(0, 0);

          // Reload the page
          // window.location.reload();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          window.alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <S.ContactSection id="contact">
      <S.Container>
        <S.SectionTitle>Get in Touch</S.SectionTitle>
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="phone">Phone</S.Label>
            <S.Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10,15}"
              title="Please enter a valid phone number (10-15 digits)."
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </S.SubmitButton>
        </S.Form>
      </S.Container>
    </S.ContactSection>
  );
};
