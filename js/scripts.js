// ── SERVICES DATA ──
const services = [
  { num: '01', title: 'Strategic marketing planning', icon: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>', desc: 'A comprehensive strategy tailored to your business model, competitive landscape, and growth targets. We build marketing roadmaps that create clarity, reduce waste, and align your team around a unified direction.' },
  { num: '02', title: 'Campaign development and execution', icon: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>', desc: 'From concept to launch, we manage the full lifecycle of your campaigns. Creative ideation, content production, media planning, and performance monitoring — all handled under one roof with precision and speed.' },
  { num: '03', title: 'Paid advertising management', icon: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>', desc: 'ROI-focused paid media across Google, Meta, TikTok, and LinkedIn. We optimize targeting, creatives, and bidding strategies to ensure every dollar of your ad spend works harder and delivers measurable returns.' },
  { num: '04', title: 'Campaign copywriting and content creation', icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>', desc: 'Words that move people to act. Our copywriters craft compelling narratives for ads, landing pages, emails, and social content — all aligned with your brand voice and optimized for conversion.' },
  { num: '05', title: 'Visual design and brand alignment', icon: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>', desc: 'Striking aesthetics aligned with your brand\'s core values. We create cohesive visual systems that elevate your brand perception, ensuring every touchpoint looks premium and professional.' },
  { num: '06', title: 'Website and landing page development', icon: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>', desc: 'High-converting web experiences engineered for performance, clarity, and user engagement. From informational sites to sales-focused landing pages, we design and build with conversion as the core objective.' },
  { num: '07', title: 'Performance tracking and optimization', icon: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><circle cx="19" cy="9" r="2"/>', desc: 'Real-time analytics dashboards, weekly reporting, and continuous A/B testing. We measure what matters, surface actionable insights, and constantly refine your campaigns to improve performance over time.' },
  { num: '08', title: 'B2B marketing support', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', desc: 'Specialized strategies for B2B brands including Account-Based Marketing, lead nurturing sequences, LinkedIn campaigns, and enterprise-level brand building that shortens sales cycles and increases deal quality.' },
];

let activeIdx = 0;

function buildServices() {
  const nav = document.getElementById('servicesNav');
  services.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'service-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<span class="service-btn-num">${s.num}</span><span class="service-btn-label">${s.title}</span>`;
    btn.onclick = () => setService(i);
    nav.appendChild(btn);
  });
  const ind = document.getElementById('navIndicator');
  nav.appendChild(ind);
  renderPanel(0);
  setTimeout(() => updateIndicator(0), 100);
}

function updateIndicator(idx) {
  const btns = document.querySelectorAll('.service-btn');
  const ind = document.getElementById('navIndicator');
  const nav = document.getElementById('servicesNav');
  if (!btns[idx]) return;
  const btnRect = btns[idx].getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  ind.style.top = (btnRect.top - navRect.top) + 'px';
  ind.style.height = (btnRect.height - 16) + 'px';
}

function renderPanel(idx) {
  const s = services[idx];
  const panel = document.getElementById('servicesPanel');
  panel.innerHTML = `
    <div class="service-detail">
      <div class="service-detail-bg"></div>
      <div class="service-detail-inner service-panel-enter">
        <div class="service-detail-top">
          <div class="service-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
          </div>
          <span class="service-detail-num-bg">${s.num}</span>
        </div>
        <div class="service-detail-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
        <div class="service-detail-link">
          <span>Discuss this service</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>`;
}

function setService(idx) {
  activeIdx = idx;
  document.querySelectorAll('.service-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  renderPanel(idx);
  updateIndicator(idx);
}

buildServices();

// ── SCROLL REVEAL ──
const srEls = document.querySelectorAll('.sr');
const srObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); srObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
srEls.forEach(el => srObs.observe(el));

// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── EMAILJS ──
emailjs.init('5joDIg039QKRPbSK');

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitLabel = document.getElementById('submitLabel');
const toast = document.getElementById('formToast');

function showToast(success, msg) {
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.style.padding = '14px 18px';
  toast.style.borderRadius = '10px';
  toast.style.marginBottom = '20px';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = '500';
  toast.style.background = success ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)';
  toast.style.border = success ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)';
  toast.style.color = success ? '#4ade80' : '#f87171';
  toast.innerHTML = (success
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>'
  ) + `<span>${msg}</span>`;
  setTimeout(() => { toast.style.display = 'none'; }, 6000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitLabel.textContent = 'Sending...';

  const params = {
    from_name:  document.getElementById('f_name').value,
    from_email: document.getElementById('f_email').value,
    message:    document.getElementById('f_message').value,
    reply_to:   document.getElementById('f_email').value,
  };

  try {
    await emailjs.send('service_89loxo2', 'template_fzch057', params);
    await emailjs.send('service_89loxo2', 'template_2h6fh9k', params);

    // ── Show thank you message ──
    document.getElementById('contactForm').innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                  text-align:center;padding:48px 24px;gap:20px;">
        <div style="width:64px;height:64px;border-radius:50%;
                    background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);
                    display:flex;align-items:center;justify-content:center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
               fill="none" stroke="#4ade80" stroke-width="2">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h3 style="font-size:22px;font-weight:700;color:#fff;">Message Sent!</h3>
        <p style="color:#9ca3af;font-size:15px;line-height:1.7;max-width:300px;">
          Thanks for reaching out! We'll get back to you within
          <strong style="color:#f97316;">24 hours</strong>.
        </p>
        <button onclick="location.reload()" style="margin-top:8px;padding:10px 24px;
                border-radius:8px;background:transparent;
                border:1px solid rgba(255,255,255,0.1);color:#9ca3af;
                font-size:13px;cursor:pointer;transition:all 0.2s;"
          onmouseover="this.style.borderColor='#f97316';this.style.color='#f97316'"
          onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';this.style.color='#9ca3af'">
          Send another message
        </button>
      </div>`;

  } catch (err) {
    console.error(err);
    showToast(false, 'Something went wrong. Please try again.');
    submitBtn.disabled = false;
    submitLabel.textContent = 'Send Request';
  }
});
