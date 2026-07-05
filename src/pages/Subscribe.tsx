import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    window.open(
      `https://bancodelaiglesia.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
  };
  return (
    <main>
      <div className="container">
        <div className="subscribe-page">
          <h1>Nueva reflexión cada lunes.</h1>
          <p>
            Pensamiento cristiano honesto
            sobre la vida ordinaria.
          </p>

          <div className="subscribe-form">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              className="subscribe-input"
            />
            <button onClick={handleSubscribe} className="subscribe-btn">
              Suscribirse →
            </button>
          </div>

          <hr className="subscribe-divider" />

          <div className="subscribe-channels">
            <h2>También en</h2>
            <div className="channel-list">
              <a href="https://x.com/fromchurchpew" target="_blank" rel="noopener noreferrer" className="channel-link">
                <span className="channel-link-arrow">→</span> X / Twitter
              </a>
              <a href="https://bancodelaiglesia.substack.com/feed" target="_blank" rel="noopener noreferrer" className="channel-link">
                <span className="channel-link-arrow">→</span> Feed RSS
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
