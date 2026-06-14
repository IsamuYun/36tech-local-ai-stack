import React, { useState } from 'react';
import { Send, LampDesk } from 'lucide-react';
import rednoteCode from '../../../assets/image/contact/rednote-code.jpg';
import wechatCode from '../../../assets/image/contact/wechat-code.jpg';

const contactCards = [
  {
    Icon: Send,
    title: '联系信息',
    rows: [
      { label: '电话：', value: '(626) 366-7032' },
      { label: '邮箱：', value: 'yun@36tech.info' },
    ],
  },
  {
    Icon: LampDesk,
    title: '办公时间',
    rows: [
      { label: '周一至周五', value: '太平洋时间 9:00 - 17:00' },
      { label: '周六', value: '太平洋时间 10:00 - 14:00' },
    ],
  },
  {
    key: 'rednote-code',
    image: rednoteCode,
    alt: '36 Tech 小红书二维码',
  },
  {
    key: 'wechat-code',
    image: wechatCode,
    alt: '36 Tech 微信二维码',
  },
];

function ContactCards() {
  return (
    <div className="contact-cards contact-cards-with-codes">
      {contactCards.map((card) => {
        if (card.image) {
          return (
            <article className="contact-card contact-card-image-only" key={card.key}>
              <img className="contact-code-image" src={card.image} alt={card.alt} />
            </article>
          );
        }

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
      setMessage({ state: 'error', text: '请填写姓名、邮箱和留言。' });
      return;
    }

    setIsSending(true);
    setMessage({ state: '', text: '发送中…' });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: messageText, company: form.company }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok === false) {
        throw new Error(data.error || `请求失败，状态码：${response.status}`);
      }

      setMessage({ state: 'success', text: `${name}，感谢留言。我们已收到你的信息。` });
      setForm({ name: '', email: '', message: '', company: '' });
    } catch (error) {
      setMessage({
        state: 'error',
        text: error.message || '发送时出现问题，请稍后再试。',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">姓名</label>
        <input
          className="contact-input"
          id="contact-name"
          name="name"
          type="text"
          placeholder="请输入姓名"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">邮箱</label>
        <input
          className="contact-input"
          id="contact-email"
          name="email"
          type="email"
          placeholder="请输入邮箱地址"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">留言</label>
        <textarea
          className="contact-input contact-textarea"
          id="contact-message"
          name="message"
          placeholder="请告诉我们需要什么帮助"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* 蜜罐字段：真实用户不可见；机器人填写后会由 worker 静默丢弃。 */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">公司</label>
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
        {isSending ? '发送中…' : '发送'}
      </button>

      <p className="contact-form-message" data-state={message.state} aria-live="polite">
        {message.text}
      </p>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section className="contact" id="contact-top" aria-label="联系我们">
      <div className="contact-head">
        <h2>欢迎联系</h2>
        <div className="contact-rule" aria-hidden="true" />
      </div>

      <ContactCards />

      <div className="contact-form-wrap">
        <h3>发送消息</h3>
        <ContactForm />
      </div>
    </section>
  );
}
