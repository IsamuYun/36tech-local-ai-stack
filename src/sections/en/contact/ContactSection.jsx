import React, { useState } from 'react';
import { Send, Map, LampDesk } from 'lucide-react';

const contactCards = [
  {
    Icon: Send,
    title: 'Information',
    rows: [
      { label: 'Phone:', value: '(626) 366-7032' },
      { label: 'Email:', value: 'yun@36tech.info' },
    ],
  },
  {
    Icon: Map,
    title: 'Visit Us',
    rows: [
      {
        label: 'Location',
        value:
          "Irvine, CA 92606",
      },
    ],
  },
  {
    Icon: LampDesk,
    title: 'Office Hours',
    rows: [
      { label: 'Monday - Friday', value: '9:00 AM - 5:00 PM PST' },
      { label: 'Saturday', value: '10:00 AM - 2:00 PM PST' },
    ],
  },
];

function ContactCards() {
  return (
    <div className="contact-cards">
      {contactCards.map((card) => {
        const Icon = card.Icon;

        return (
          <article className="contact-card" key={card.title}>
            <div className="contact-card-icon">
              <Icon aria-hidden="true" />
            </div>
            <h4>{card.title}</h4>
            {card.rows.map((row) => (
              <React.Fragment key={row.label}>
                <span>{row.label}</span>
                <p>{row.value}</p>
              </React.Fragment>
            ))}
          </article>
        );
      })}
    </div>
  );
}

const CONTACT_ENDPOINT = 'https://send-mail.yunchunnan.workers.dev/';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [message, setMessage] = useState({ state: '', text: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const messageText = form.message.trim();

    if (!name || !email || !messageText) {
      setMessage({ state: 'error', text: 'Please fill in your name, email, and message.' });
      return;
    }

    setIsSending(true);
    setMessage({ state: '', text: 'Sending…' });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: messageText, company: form.company }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok === false) {
        throw new Error(data.error || `Request failed with status ${response.status}`);
      }

      setMessage({ state: 'success', text: `Thanks, ${name}. Your message has been sent.` });
      setForm({ name: '', email: '', message: '', company: '' });
    } catch (error) {
      setMessage({
        state: 'error',
        text: error.message || 'Something went wrong while sending. Please try again later.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input
          className="contact-input"
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input
          className="contact-input"
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          className="contact-input contact-textarea"
          id="contact-message"
          name="message"
          placeholder="How can we help?"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* Honeypot: hidden from real users; bots that fill it are silently dropped by the worker. */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <button className="contact-send" type="submit" disabled={isSending}>
        <Send className="contact-send-icon" aria-hidden="true" />
        {isSending ? 'Sending…' : 'Send'}
      </button>

      <p className="contact-form-message" data-state={message.state} aria-live="polite">
        {message.text}
      </p>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section className="contact" id="contact-top" aria-label="Contact">
      <div className="contact-head">
        <h2>GET IN TOUCH</h2>
        <div className="contact-rule" aria-hidden="true" />
        <p className="contact-subtitle">
          We'd love to hear from you! 
        </p>
      </div>

      <ContactCards />

      <div className="contact-form-wrap">
        <h3>Send Message</h3>
        <ContactForm />
      </div>
    </section>
  );
}
