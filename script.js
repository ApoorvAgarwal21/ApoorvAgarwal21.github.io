/* =========================================================
   ✏️  EDIT EVERYTHING IN THIS CONFIG BLOCK
   Change the name, stories, captions, reasons, gifts and letter.
   ========================================================= */
const CONFIG = {
  name: "My cutu little kangaroo Chiku",          // her name or nickname
  signoff: "Yours AJ",   // how you sign the letter

  // Chapter 1: tap each bud to bloom and reveal a story
  garden: {
    lily: {
      title: "Chapter 1 · How it began",
      text: "It wasn’t love at first sight or an instant yes. It was a hesitant beginning that slowly became us."
    },
    sunflower: {
      title: "Chapter 2 · My favourite day",
      text: "The day I met you for the first time, and suddenly all those butterflies became real. Seeing you in person was a feeling I can't fully put into words, and if I could relive any day, I'd choose that one without a second thought. But honestly, as beautiful as that day was, I can't wait to see you again. Because one meeting was enough to make me want a thousand more. 🥹❤️"
    },
    rose: {
      title: "Chapter 3 · What you are to me",
      text: "You’ve become someone really special to me, someone who makes me smile without even trying and gives me butterflies just by being herself. ❤️ I don’t know how to explain what you mean to me, but I know that I want you in my life, to make more memories with you, and to keep choosing you every single day. 🫶🏻"
    }
  },

  // Chapter 2: one reason per click
  reasons: [
    "The way your eyes crinkle when you really laugh.",
    "You make ordinary days feel like little adventures.",
    "How you remember the tiniest things about people.",
    "Your jokes. And how proud you are of them. 😉😉",
    "You're my calm when everything is loud.",
    "The way you say my name.",
    "You're kind even when nobody's watching.",
    "Every song reminds me of you now.",
    "You make me want to be better.",
    "Because home is wherever you are."
  ],

  // Chapter 3: gifts (colours: box, lid, ribbon)
  gifts: [
    { tag: "the pink one",   title: "A Date Night", text: "Coupon: one fancy dinner, your pick, No expiry.", c: "#f7c8d2", c2: "#f0a3b5", r: "#c8344f" },
    { tag: "the sunny one",  title: "A Day Off",    text: "Coupon: a whole day where you do nothing and I do everything.", c: "#ffe08a", c2: "#f5c542", r: "#ffffff" },
    { tag: "the white one",  title: "Forever Hugs", text: "Coupon: unlimited hugs, redeemable anytime, anywhere.", c: "#ffffff", c2: "#efe7ea", r: "#6b9a5b" }
  ],

  candles: 5,

  // Finale: the letter (line breaks are kept)
  letter: `My Chiku,

Happy birthday to the person who turned my life into a garden.

I'm genuinely so glad that you came into my life, and I hope this new year of your life brings you all the happiness, love, and beautiful things you deserve. I hope you always keep that smile on your face because you have no idea how much it means to me.

Happy birthday once again, pretty girl. ❤️🧿 You deserve all the love in the world, and I hope life gives you every reason to be happy. ❤️`
};

/* =========================================================
   You don't need to edit anything below this line
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const restart = (el, cls) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };

/* ---------- hand-drawn flowers (SVG) ---------- */
function sunflowerSVG() {
  let s = '';
  for (let i = 0; i < 18; i++) s += `<ellipse cx="0" cy="-30" rx="7" ry="18" fill="#f5b82e" transform="rotate(${i * 20})"/>`;
  for (let i = 0; i < 18; i++) s += `<ellipse cx="0" cy="-25" rx="6" ry="14" fill="#ffd966" transform="rotate(${i * 20 + 10})"/>`;
  s += `<circle r="17" fill="#6b4423"/>`;
  for (let i = 0; i < 32; i++) {
    const a = i * 137.5 * Math.PI / 180, r = 2.5 * Math.sqrt(i);
    s += `<circle cx="${(r * Math.cos(a)).toFixed(1)}" cy="${(r * Math.sin(a)).toFixed(1)}" r="1.3" fill="#3b2414"/>`;
  }
  return `<svg viewBox="-50 -50 100 100">${s}</svg>`;
}

function lilySVG() {
  const petal = 'M0 0 C 13 -12, 12 -33, 0 -46 C -12 -33, -13 -12, 0 0 Z';
  let s = '';
  [0, 120, 240].forEach(r => s += `<path d="${petal}" fill="#fbf7f2" stroke="#e3d3d8" stroke-width="1.2" transform="rotate(${r})"/>`);
  [60, 180, 300].forEach(r => s += `<path d="${petal}" fill="#ffffff" stroke="#e3d3d8" stroke-width="1.2" transform="rotate(${r}) scale(.92)"/>`);
  for (let i = 0; i < 6; i++) s += `<path d="M0 -6 L0 -28" stroke="#f6c1cc" stroke-width="2" stroke-linecap="round" transform="rotate(${i * 60})"/>`;
  for (let i = 0; i < 6; i++) s += `<g transform="rotate(${i * 60 + 30})"><line x1="0" y1="0" x2="0" y2="-22" stroke="#b9cf8a" stroke-width="1.4"/><ellipse cx="0" cy="-23" rx="2.2" ry="4" fill="#e3872d"/></g>`;
  s += `<circle r="4" fill="#d5e8a6"/>`;
  return `<svg viewBox="-50 -50 100 100">${s}</svg>`;
}

function roseSVG() {
  let s = '';
  for (let i = 0; i < 6; i++) s += `<ellipse cx="0" cy="-22" rx="20" ry="24" fill="#b8213f" transform="rotate(${i * 60})"/>`;
  for (let i = 0; i < 5; i++) s += `<ellipse cx="0" cy="-12" rx="16" ry="17" fill="#d0324f" transform="rotate(${i * 72 + 20})"/>`;
  s += `<circle r="14" fill="#e04a66"/>`;
  s += `<path d="M-8 0 a8 8 0 1 1 16 0 a6 6 0 1 1 -12 0 a4 4 0 1 1 8 0 a2 2 0 1 1 -4 0" fill="none" stroke="#9e1a35" stroke-width="2" stroke-linecap="round"/>`;
  return `<svg viewBox="-50 -50 100 100">${s}</svg>`;
}

function budSVG(color, stroke = 'none') {
  return `<svg viewBox="-50 -50 100 100">
    <path d="M0 -38 C 18 -20, 16 10, 0 22 C -16 10, -18 -20, 0 -38Z" fill="${color}" stroke="${stroke}" stroke-width="1.5"/>
    <path d="M0 22 C -20 14,-26 -4,-14 -14 C -10 2,-4 14,0 22Z M0 22 C 20 14,26 -4,14 -14 C 10 2,4 14,0 22Z" fill="#6b9a5b"/>
  </svg>`;
}

const FLOWERS = { lily: lilySVG, sunflower: sunflowerSVG, rose: roseSVG };
const BUDS = { lily: budSVG('#ffffff', '#e3d3d8'), sunflower: budSVG('#ffd966'), rose: budSVG('#d0324f') };
const EMOJI = { lily: ['🤍', '✨', '🌸'], sunflower: ['🌻', '✨', '💛'], rose: ['🌹', '💖', '✨'] };

/* ---------- effects ---------- */
const PETAL_COLORS = ['#d0324f', '#f4b6c2', '#ffffff', '#f5b82e', '#ffd966', '#e46a83'];
function spawnPetal() {
  const d = document.createElement('div');
  d.className = 'petal';
  const size = 12 + Math.random() * 12;
  d.innerHTML = `<svg viewBox="0 0 20 20" width="${size}"><path d="M10 0 C18 6 16 16 10 20 C4 16 2 6 10 0Z" fill="${pick(PETAL_COLORS)}" stroke="#e8d6db" stroke-width=".6"/></svg>`;
  d.style.left = Math.random() * 100 + 'vw';
  d.style.opacity = .5 + Math.random() * .5;
  d.style.setProperty('--drift', (Math.random() * 220 - 110) + 'px');
  d.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
  const dur = 7 + Math.random() * 7;
  d.style.animationDuration = dur + 's';
  $('#petals').appendChild(d);
  setTimeout(() => d.remove(), dur * 1000);
}
setInterval(spawnPetal, 650);

function burst(x, y, items = ['💖', '🌸', '✨'], n = 14) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.textContent = pick(items);
    const a = Math.random() * Math.PI * 2, dist = 60 + Math.random() * 100;
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.setProperty('--dx', Math.cos(a) * dist + 'px');
    s.style.setProperty('--dy', Math.sin(a) * dist + 'px');
    $('#fx').appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

function confetti(n = 140) {
  const colors = ['#c8344f', '#f4b6c2', '#f5b82e', '#ffd966', '#ffffff', '#6b9a5b'];
  for (let i = 0; i < n; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = pick(colors);
    c.style.setProperty('--dx', (Math.random() * 300 - 150) + 'px');
    c.style.setProperty('--rot', (Math.random() * 1440 - 720) + 'deg');
    const dur = 2.5 + Math.random() * 2.5;
    c.style.animationDuration = dur + 's';
    c.style.animationDelay = Math.random() * .6 + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), (dur + 1) * 1000);
  }
}

// a little heart wherever she taps
document.addEventListener('click', e => {
  const h = document.createElement('span');
  h.className = 'pop-heart';
  h.textContent = pick(['💖', '🌸', '🌻', '🌹', '🤍', '✨']);
  h.style.left = e.clientX + 'px';
  h.style.top = e.clientY + 'px';
  $('#fx').appendChild(h);
  setTimeout(() => h.remove(), 1200);
});

/* ---------- section unlocking ---------- */
function unlock(id) {
  const s = document.getElementById(id);
  s.classList.remove('hidden');
  restart(s, 'reveal');
  setTimeout(() => s.scrollIntoView({ behavior: 'smooth' }), 60);
}
$$('[data-next]').forEach(btn => btn.addEventListener('click', () => {
  unlock(btn.dataset.next);
  btn.classList.add('hidden');
}));
const showBtn = id => $('#' + id).classList.remove('hidden');

/* ---------- fill names & static flowers ---------- */
$$('.her-name').forEach(el => el.textContent = CONFIG.name);
$$('[data-flower]').forEach(el => el.innerHTML = FLOWERS[el.dataset.flower]());

/* ---------- music ---------- */
const audio = $('#bgm'), musicBtn = $('#musicBtn');
audio.addEventListener('loadedmetadata', () => musicBtn.classList.remove('hidden'));
const setMusicIcon = () => musicBtn.textContent = audio.paused ? '🔇' : '🎵';
musicBtn.addEventListener('click', e => {
  e.stopPropagation();
  audio.paused ? audio.play().catch(() => {}) : audio.pause();
});
audio.addEventListener('play', setMusicIcon);
audio.addEventListener('pause', setMusicIcon);

/* ---------- intro envelope ---------- */
const envelope = $('#envelope');
envelope.addEventListener('click', e => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  $('#introHint').classList.add('hidden');
  burst(e.clientX, e.clientY, ['💌', '🌹', '💖', '✨'], 20);
  audio.play().catch(() => {});
  setTimeout(() => showBtn('startBtn'), 1300);
});
$('#startBtn').addEventListener('click', () => {
  $('#startBtn').classList.add('hidden');
  unlock('hero');
});

/* ---------- chapter 1: garden ---------- */
const bloomed = new Set();
const story = $('#story');
$$('.plant').forEach(plant => {
  const kind = plant.dataset.kind;
  plant.querySelector('.head').innerHTML =
    `<div class="bud">${BUDS[kind]}</div><div class="bloom">${FLOWERS[kind]()}</div>`;
  plant.addEventListener('click', e => {
    plant.classList.add('open');
    bloomed.add(kind);
    const st = CONFIG.garden[kind];
    story.innerHTML = '';
    const h = document.createElement('h3'); h.textContent = st.title;
    const p = document.createElement('p'); p.textContent = st.text;
    story.append(h, p);
    restart(story, 'flash');
    burst(e.clientX, e.clientY, EMOJI[kind], 16);
    if (bloomed.size === 3) showBtn('next-garden');
  });
});

/* ---------- chapter 2: jar of reasons ---------- */
const jarBody = $('#jarBody');
CONFIG.reasons.forEach(() => {
  const h = document.createElement('span');
  h.className = 'jar-heart';
  h.textContent = pick(['💗', '💖', '💛', '🤍', '❤️']);
  jarBody.appendChild(h);
});
let reasonIdx = 0;
$('#reasonBtn').addEventListener('click', e => {
  const total = CONFIG.reasons.length;
  const note = $('#note');
  note.textContent = CONFIG.reasons[reasonIdx % total];
  note.classList.remove('hidden');
  restart(note, 'show');
  $('#reasonCount').textContent = `reason ${reasonIdx % total + 1} of ${total}… and counting`;
  const hearts = $$('.jar-heart:not(.fly)', jarBody);
  if (hearts.length) {
    const h = hearts[hearts.length - 1];
    h.classList.add('fly');
    setTimeout(() => h.remove(), 700);
  }
  burst(e.clientX, e.clientY, ['💌', '💕'], 8);
  reasonIdx++;
  if (reasonIdx === 3) showBtn('next-reasons');
  if (reasonIdx === total) $('#reasonBtn').textContent = 'Read them all again 💞';
});

/* ---------- chapter 3: gifts ---------- */
let giftsOpened = 0;
CONFIG.gifts.forEach(g => {
  const el = document.createElement('div');
  el.className = 'gift';
  el.style.setProperty('--c', g.c);
  el.style.setProperty('--c2', g.c2);
  el.style.setProperty('--r', g.r);
  el.innerHTML = `<div class="present"><div class="lid"><span class="bow">🎀</span></div><div class="box"></div></div>
    <span class="tag"></span><div class="prize"><h4></h4><p></p></div>`;
  $('.tag', el).textContent = g.tag;
  $('.prize h4', el).textContent = g.title;
  $('.prize p', el).textContent = g.text;
  el.addEventListener('click', e => {
    if (el.classList.contains('opened')) return;
    el.classList.add('opened');
    burst(e.clientX, e.clientY, ['🎁', '✨', '💖', '🌻'], 20);
    if (++giftsOpened === CONFIG.gifts.length) { confetti(80); showBtn('next-gifts'); }
  });
  $('#giftRow').appendChild(el);
});

/* ---------- chapter 4: cake ---------- */
let candlesOut = 0;
for (let i = 0; i < CONFIG.candles; i++) {
  const c = document.createElement('div');
  c.className = 'candle';
  c.innerHTML = '<div class="flame"></div>';
  c.addEventListener('click', () => {
    if (c.classList.contains('out')) return;
    c.classList.add('out');
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    c.appendChild(smoke);
    setTimeout(() => smoke.remove(), 1300);
    if (++candlesOut === CONFIG.candles) {
      $('#cakeHint').textContent = 'Yaaay! 🎉';
      $('#wishText').classList.remove('hidden');
      confetti(180);
      setTimeout(() => showBtn('next-cake'), 1200);
    }
  });
  $('#candles').appendChild(c);
}

/* ---------- finale: letter ---------- */
function typewrite(el, text, speed = 32) {
  el.textContent = '';
  let i = 0;
  return new Promise(done => {
    const t = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) { clearInterval(t); done(); }
    }, speed);
  });
}
$('#letterBtn').addEventListener('click', async () => {
  $('#letterBtn').classList.add('hidden');
  $('#loveLetter').classList.remove('hidden');
  await typewrite($('#letterText'), CONFIG.letter);
  await typewrite($('#signoff'), CONFIG.signoff, 80);
  confetti(200);
  showBtn('replayBtn');
});
$('#replayBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0 });
  location.reload();
});
