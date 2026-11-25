"use client";

import Icon from "./Icon";
import { useState } from "react";
import { readData, writeData } from "../lib/demo";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "General question", message: "" });
  const [notice, setNotice] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) { setNotice("Please enter your name and message."); return; }
    try {
      const data = readData();
      writeData({ ...data, inquiries: [{ ...form, name: form.name.trim(), message: form.message.trim(), id: `INQ-${Date.now().toString(36).toUpperCase()}`, status: "New", createdAt: new Date().toISOString() }, ...data.inquiries] });
      setForm({ name: "", phone: "", email: "", subject: "General question", message: "" });
      setNotice("Saved on this browser only. Your message has not been sent to the venue.");
    } catch { setNotice("Your message could not be saved. Check your browser storage settings."); }
  }
  return (
    <>
      <section className="section wrap contact-grid">
        <div>
          <div className="eyebrow"><span className="square" /> SAY HELLO</div>
          <h1>Let&apos;s talk<br /><em>about the game.</em></h1>
          <p className="contact-intro">Questions about the pitch, planning a tournament or bringing your team? We&apos;re here for all of it.</p>
          <div className="contact-options">
            <div><span>01 / VISIT</span><strong>Satgaon, Guwahati</strong><p>5R2J+72X, Baghorbori Rd, Satgaon, Kalitakuchi N.C., Guwahati, Assam 781037</p></div>
            <div>
              <span>02 / CALL OR MESSAGE</span>
              <strong>+91 88128 62976</strong>
              <p>Call or message us on WhatsApp for slot enquiries and bookings.</p>
              <div className="contact-btn-row">
                <a href="https://wa.me/918812862976" target="_blank" rel="noopener noreferrer" className="button button-dark contact-btn">WhatsApp <span><Icon name="arrow" /></span></a>
                <a href="tel:+918812862976" className="button button-outline contact-btn">Call now <span><Icon name="arrow" /></span></a>
              </div>
            </div>
            <div><span>03 / SOCIAL</span><strong>Follow us on Instagram</strong><p>@tssarena · Match-day highlights and updates.</p><div className="contact-btn-row"><a href="https://www.instagram.com/tssarena/?hl=en" target="_blank" rel="noopener noreferrer" className="button button-outline contact-btn">Instagram <span><Icon name="arrow" /></span></a></div></div>
          </div>
        </div>
        <div className="booking-card contact-form">
          <div className="eyebrow">DROP US A NOTE</div>
          <h2>We&apos;re all ears.</h2>
          <p>This form saves a message on this browser only. It does not send an enquiry yet; please don&apos;t enter sensitive information.</p>
          <form onSubmit={submit} className="form-grid">
            <label>YOUR NAME<input required maxLength={80} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
            <label>PHONE <span>(OPTIONAL)</span><input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></label>
            <label className="full">EMAIL <span>(OPTIONAL)</span><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
            <label className="full">WHAT&apos;S IT ABOUT?<select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}><option>General question</option><option>Booking enquiry</option><option>Tournament or event</option><option>Partnership</option><option>Other</option></select></label>
            <label className="full">MESSAGE<textarea required maxLength={500} rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>
            <button className="button button-dark full">Save message <span><Icon name="arrow" /></span></button>
          </form>
          {notice && <p className="notice" role="status">{notice}</p>}
        </div>
      </section>
      <section className="wrap contact-map-section">
        <div className="contact-map-head">
          <div>
            <div className="eyebrow"><span className="square" /> FIND THE PITCH</div>
            <h2>Location <em>map.</em></h2>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Baghorbori%20Rd%2C%20Satgaon%2C%20Kalitakuchi%2C%20Guwahati%2C%20Assam%20781037" target="_blank" rel="noopener noreferrer" className="button button-outline">Open in Google Maps <span><Icon name="arrow" /></span></a>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="TSS Arena location map"
            src="https://maps.google.com/maps?q=Baghorbori%20Rd%2C%20Satgaon%2C%20Kalitakuchi%2C%20Guwahati%2C%20Assam%20781037&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="fine-print">5R2J+72X, Baghorbori Rd, Satgaon, Kalitakuchi N.C., Guwahati, Assam 781037</p>
      </section>
    </>
  );
}
