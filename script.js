document.addEventListener('DOMContentLoaded', () => {
  /////// CONFIG ///////
  const CHAT_API_URL = "api/chat.js"; // e.g. https://yourdomain.com/api/chat

  /////// CLOCK (Asia/Karachi) ///////
  function updatePakistanTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true
    });
    const day = now.toLocaleDateString('en-US', {
      timeZone: 'Asia/Karachi',
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    document.getElementById('time').textContent = time;
    document.getElementById('day').textContent = day;
  }
  updatePakistanTime();
  setInterval(updatePakistanTime, 1000);

  /////// THEME TOGGLE ///////
  const themeToggleBtn = document.getElementById('themeToggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('site-theme') || 'theme-dark';
  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(savedTheme);

  function updateToggleUI() {
    themeToggleBtn.textContent = body.classList.contains('theme-light') ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('aria-pressed', body.classList.contains('theme-light'));
  }
  if (themeToggleBtn) {
    updateToggleUI();
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('theme-light');
      body.classList.toggle('theme-dark');
      localStorage.setItem('site-theme', body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark');
      updateToggleUI();
    });
  }

  /////// CV DOWNLOAD BUTTON ///////
  const downloadCVBtn = document.getElementById('downloadCVBtn');
  const cvAnchor = document.getElementById('cvAnchor');
  if (downloadCVBtn && cvAnchor) {
    downloadCVBtn.addEventListener('click', () => {
      cvAnchor.click();
    });
  }



  /////// BUBBLE GENERATOR ///////
  const bubbleContainer = document.querySelector('.bubble-container');
  const bubbleImages = [
    'img/restaurant.png',
    'img/rangoli.png',
    'img/calculator.png',
    'img/expense.png',
    'img/rashan.png'
  ];

  function rand(min, max) { return Math.random() * (max - min) + min; }
  function createBubble() {
    if (!bubbleContainer) return;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = Math.floor(rand(60, 180));
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${rand(2, 92)}%`;

    const img = document.createElement('img');
    img.alt = 'project preview';
    img.src = bubbleImages[Math.floor(rand(0, bubbleImages.length))];

    const rise = rand(9, 20);
    const driftDur = rand(4, 9);
    const driftPx = Math.floor(rand(-30, 30));

    bubble.style.setProperty('--rise', `${rise}s`);
    bubble.style.setProperty('--driftDur', `${driftDur}s`);
    bubble.style.setProperty('--drift', `${driftPx}px`);

    bubble.appendChild(img);
    bubbleContainer.appendChild(bubble);

    setTimeout(() => bubble.remove(), (rise + 0.5) * 1000);
  }

  let bubbleInterval = null;
  function startBubbles() {
    if (!bubbleInterval) {
      for (let i = 0; i < 3; i++) createBubble();
      bubbleInterval = setInterval(createBubble, 1600);
    }
  }
  function stopBubbles() {
    if (bubbleInterval) {
      clearInterval(bubbleInterval);
      bubbleInterval = null;
    }
  }

  const projectSection = document.getElementById('project');
  if (projectSection && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? startBubbles() : stopBubbles());
    }, { threshold: 0.2 });
    obs.observe(projectSection);
  } else {
    startBubbles();
  }

  /////// CHAT WIDGET ///////
  const chatFab = document.getElementById('chatFab');
  const chatWidget = document.getElementById('chatWidget');
  const chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatMessages = document.getElementById('chatMessages');
  const chatText = document.getElementById('chatText');

  function appendMsg(text, who = 'bot') {
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
    el.textContent = text;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function setChatVisible(visible) {
    if (chatWidget) {
      chatWidget.classList.toggle('hidden', !visible);
    }
  }

  if (chatFab) chatFab.addEventListener('click', () => setChatVisible(true));
  if (chatClose) chatClose.addEventListener('click', () => setChatVisible(false));

  if (chatForm) {
    chatForm.addEventListener('submit', async e => {
      e.preventDefault();
      const text = chatText.value.trim();
      if (!text) return;
      appendMsg(text, 'user');
      chatText.value = '';
      appendMsg('...', 'bot');

      try {
        const res = await fetch(CHAT_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });
        if (!res.ok) throw new Error('Chat API error');
        const data = await res.json();

        const lastBot = Array.from(chatMessages.querySelectorAll('.msg.bot')).pop();
        if (lastBot) lastBot.remove();

        appendMsg(data?.reply || '⚠️ No reply. Check your AI API.', 'bot');
      } catch (err) {
        console.error(err);
        const lastBot = Array.from(chatMessages.querySelectorAll('.msg.bot')).pop();
        if (lastBot) lastBot.remove();
        appendMsg('❌ Error contacting chat server.', 'bot');
      }
    });
  }

  /////// REDUCED MOTION ///////
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stopBubbles();
    document.documentElement.classList.add('reduce-motion');
  }

  /////// CLEANUP ///////
  window.addEventListener('beforeunload', stopBubbles);
});


(() => {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("status");
  const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbzbNFOVDm7lpc8lwk2IY94ZOfEPy4JQs6bgJJZR8LF3X9YaFZi1tTkA0xv6CHd7qx7jqw/exec"; // <- your /exec URL

  if (!form || !statusMsg) return; // nothing to wire up

  // Helper: POST FormData to GAS with timeout and opaque redirect handling
  async function postToGAS(fd) {
    const ctrl = new AbortController();
    const timeoutMs = 15000; // 15s timeout
    const t = setTimeout(() => ctrl.abort(), timeoutMs);

    try {
      const res = await fetch(GAS_ENDPOINT, {
        method: "POST",
        body: fd,
        signal: ctrl.signal,
        redirect: "follow" // default, but explicit
      });
      clearTimeout(t);

      // GAS often responds with an "opaqueredirect" (cannot read body). Treat as success.
      if (res.type === "opaqueredirect") {
        return { ok: true, text: "", status: 0, note: "opaqueredirect" };
      }

      const text = await res.text().catch(() => "");
      const ok = res.ok || /success/i.test(text); // accept plain "Success" body
      return { ok, text, status: res.status };
    } catch (err) {
      clearTimeout(t);
      // Make timeout error readable
      if (err.name === "AbortError") {
        throw new Error("Request timed out. Please check your connection.");
      }
      throw err;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic front-end validation (also relies on required attributes)
    const fd = new FormData(form);
    if (!fd.get("name") || !fd.get("email") || !fd.get("message")) {
      statusMsg.className = "status error";
      statusMsg.textContent = "⚠️ Please fill all fields.";
      return;
    }

    // UI: pending
    statusMsg.className = "status pending";
    statusMsg.textContent = "Sending…";

    try {
      const { ok, text, status } = await postToGAS(fd);

      if (ok) {
        statusMsg.className = "status success";
        statusMsg.textContent = "✅ Message sent. Thank you!";
        form.reset();
      } else {
        statusMsg.className = "status error";
        statusMsg.textContent = `❌ Send failed${status ? ` (${status})` : ""}. Try again.`;
        console.error("GAS response not OK:", { status, text });
      }
    } catch (err) {
      statusMsg.className = "status error";
      statusMsg.textContent = `❌ ${err.message || "Failed to send. Try again."}`;
      console.error("Contact form error:", err);
    }
  });

})();

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = searchForm.querySelector("input[name='query']");

  // Sections available in your portfolio
  const sections = {
    home: "Home",
    about: "About",
    project: "Projects",
    tools: "Tools",
    contact: "Contact"
  };

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    if (!query) return;

    let found = false;
    for (let id in sections) {
      if (sections[id].toLowerCase().includes(query)) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        found = true;
        break;
      }
    }

    if (!found) {
      alert("No matching section found.");
    }

    searchInput.value = ""; // optional: clear input after search
  });
});

