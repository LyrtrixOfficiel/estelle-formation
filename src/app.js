/* ============================================
   ESTELLE FORMATION IA — MODERN ENGINE v1.0
   Full JS-rendered website engine
   ============================================ */

;(function () {
  'use strict';

  // ─── CONTENT DATA ──────────────────────────
  const CONTENT = {
    nav: {
      logo: 'Estelle Formation IA',
      logoImg: 'télécharger.webp',
      links: [
        { label: 'Introduction', href: '#intro' },
        { label: 'Formations', href: '#formations' },
        { label: 'Tarifs', href: '#tarifs' },
        { label: 'Zone', href: '#zone' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' }
      ],
      phone: '07 45 81 70 33'
    },

    hero: {
      badge: 'Formations disponibles',
      title: 'Formation IA pour débutants',
      sub: "Apprenez l'IA simplement, avec des explications claires et sans jargon. Conçu pour les débutants, y compris les seniors, avec un premier module d'initiation et un second module pour approfondir l'IA.",
      cta1: { label: 'Réserver une formation', href: 'https://calendar.app.google/5XBZTLwJ6cYUSkbd6' },
      cta2: { label: 'Découvrir', href: '#intro' }
    },

    intro: {
      text: "L'IA, <span class='highlight'>simple et utile</span> au quotidien",
      sub: "Pas besoin d'être un expert en informatique. Nos formations vous montrent comment utiliser l'intelligence artificielle dans votre vie de tous les jours : écrire un message, organiser vos idées, créer une image ou simplement comprendre ce qu'est l'IA."
    },

    modules: [
      {
        number: '01',
        title: "Découvrir l'intelligence artificielle",
        duration: '1h',
        items: [
          { title: "Qu'est-ce que l'IA ?", desc: "Une explication claire, avec des exemples concrets." },
          { title: "À quoi ça sert ?", desc: "Écrire, créer, traduire, organiser, trouver des idées…" },
          { title: "Ses limites et ses biais", desc: "Comprendre les erreurs possibles et garder un esprit critique." },
          { title: "Démonstration pratique (ChatGPT)", desc: "Vous verrez en direct comment utiliser un outil d'IA." },
          { title: "Questions & échanges", desc: "Un moment libre pour poser vos questions, tester et pratiquer." }
        ],
        objective: "À la fin du module, vous saurez ce qu'est l'intelligence artificielle, comment l'utiliser simplement, et dans quelles situations elle peut vraiment vous aider."
      },
      {
        number: '02',
        title: "Aller plus loin avec ChatGPT",
        duration: '1h',
        durationNote: 'Combinable avec le Module 1 pour 2h',
        items: [
          { title: "Bien formuler ses prompts", desc: "Apprendre à poser les bonnes questions pour obtenir de meilleures réponses." },
          { title: "Résumer, reformuler et trouver des idées", desc: "Utiliser l'IA pour écrire, créer et s'organiser." },
          { title: "Gérer ChatGPT et rester prudent", desc: "Comprendre les limites de l'outil et adopter de bons réflexes." },
          { title: "Découverte de la création d'images IA", desc: "Introduction à la génération d'images par intelligence artificielle." },
          { title: "Échanges et questions libres", desc: "Un moment pour pratiquer ensemble et approfondir selon vos besoins." }
        ],
        objective: "À la fin du module, vous saurez communiquer efficacement avec l'IA, créer des textes ou des images utiles, et utiliser ces outils en toute confiance et avec prudence."
      }
    ],

    pricing: [
      {
        title: 'Module 1 ou 2',
        duration: '1h',
        from: '35',
        rows: [
          { label: 'Visio (1 pers.)', value: '35€' },
          { label: 'En salle (Colmar/Sélestat)', value: '39€/pers.' },
          { label: 'À domicile (2-4 pers.)', value: '44€/pers.' },
          { label: 'À domicile (1 pers.)', value: '49€' }
        ]
      },
      {
        title: 'Pack Modules 1 & 2',
        duration: '2h',
        from: '60',
        featured: true,
        rows: [
          { label: 'Visio (1 pers.)', value: '60€' },
          { label: 'En salle (Colmar/Sélestat)', value: '69€/pers.' },
          { label: 'À domicile (2-4 pers.)', value: '79€/pers.' },
          { label: 'À domicile (1 pers.)', value: '89€' }
        ]
      }
    ],

    zone: {
      text: [
        "Je propose mes formations IA à domicile dans un secteur autour de <strong>Colmar, Ribeauvillé, Kaysersberg, Sélestat</strong> et les villages voisins (environ 15 km).",
        "Des séances <strong>en salle</strong> sont également possibles à Sélestat ou Colmar.",
        "Au-delà de cette zone, des frais de déplacement supplémentaires peuvent s'appliquer, ou bien la formation peut se faire <strong>en visioconférence</strong>."
      ],
      mapImg: 'Design sans titre (6).png',
      mapAlt: 'Zone de formation IA autour de Colmar'
    },

    faq: [
      { q: "Faut-il un ordinateur puissant ?", a: "Non, un smartphone, une tablette ou un ordinateur classique suffisent. L'essentiel est d'avoir une connexion internet." },
      { q: "Combien de temps dure une séance ?", a: "Chaque module dure 1h en individuel, et environ 1h15 en groupe pour laisser plus de place aux échanges." },
      { q: "Peut-on offrir la formation ?", a: "Oui ! Un bon cadeau est disponible. Contactez-moi pour en savoir plus." },
      { q: "Vous déplacez-vous ?", a: "Oui, dans le secteur de Colmar, Ribeauvillé, Kaysersberg, Sélestat et environs. Au-delà, un supplément de déplacement ou une séance en visioconférence est proposé." },
      { q: "Quels sont les moyens de paiement ?", a: "Virement bancaire, carte bancaire via un lien sécurisé, ou espèces (à domicile uniquement)." },
      { q: "Puis-je annuler ou reporter ma séance ?", a: "Cela dépend du format : les séances en salle ne sont pas remboursables (une visio de remplacement est possible), les séances à domicile et en visio sont reportables avec un préavis de 48h." },
      { q: "Faut-il des connaissances en informatique ?", a: "Aucune ! La formation est spécialement conçue pour les vrais débutants, y compris les seniors." },
      { q: "Puis-je suivre la formation avec un proche ?", a: "Bien sûr, c'est même recommandé. C'est plus convivial et cela permet de partager les frais." },
      { q: "Et si j'oublie ce que j'ai appris ?", a: "Un mémo récapitulatif vous est remis à la fin de chaque séance pour garder une trace de tout ce que vous avez vu." }
    ],

    contact: {
      phone: '07 45 81 70 33',
      email: 'estelle.iaformation@gmail.com',
      calendar: 'https://calendar.app.google/5XBZTLwJ6cYUSkbd6',
      formTitle: 'Demander un rappel'
    },

    footer: {
      message: "Notre différence : un accompagnement personnalisé à domicile, avec une pédagogie adaptée aux seniors et débutants. L'IA devient simple, utile et accessible à tous.",
      links: [
        { label: 'CGV', href: 'cgv.html' },
        { label: 'Mentions légales', href: 'mentions-legales.html' }
      ]
    }
  };

  // Robot configuration (original)
  const ROBOT_OPTIONS = {
    FRICTION: 0.98,
    DRAG_FRICTION: 0.965,
    WALL_ELASTICITY: 0.6,
    COLLISION_ELASTICITY: 0.7,
    STICKY_DRAG_FORCE: 0.25,
    MOUSE_REPEL_RADIUS: 220,
    MOUSE_REPEL_FORCE: 1.6,
    ROBOT_COUNT: 3
  };

  const LOW_MOTION = (navigator.connection && navigator.connection.saveData) ||
    (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);


  // ─── RENDERER ──────────────────────────────
  function el(tag, attrs, ...children) {
    const e = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'className') e.className = v;
        else if (k === 'innerHTML') e.innerHTML = v;
        else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
        else e.setAttribute(k, v);
      });
    }
    children.flat().forEach(c => {
      if (c == null) return;
      if (typeof c === 'string') e.appendChild(document.createTextNode(c));
      else e.appendChild(c);
    });
    return e;
  }

  function renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(renderNav());
    app.appendChild(renderMobileNav());
    app.appendChild(renderScrollIndicator());
    app.appendChild(renderHero());
    app.appendChild(renderIntro());
    app.appendChild(renderModules());
    app.appendChild(renderPricing());
    app.appendChild(renderZone());
    app.appendChild(renderFAQ());
    app.appendChild(renderContact());
    app.appendChild(renderFooter());
  }

  function renderNav() {
    const nav = el('nav', { className: 'nav', id: 'nav' },
      el('div', { className: 'nav-inner' },
        el('a', { className: 'nav-logo', href: '#' },
          el('img', { src: CONTENT.nav.logoImg, alt: 'Logo', width: '36', height: '36' }),
          el('span', { className: 'logo-gradient', innerHTML: 'Estelle Formation IA' })
        ),
        el('div', { className: 'nav-links' },
          ...CONTENT.nav.links.map(l =>
            el('a', { className: 'nav-link', href: l.href }, l.label)
          )
        ),
        el('div', { className: 'nav-cta' },
          el('a', { className: 'nav-phone', href: 'tel:+33745817033' }, CONTENT.nav.phone),
          el('button', {
            className: 'nav-hamburger',
            id: 'hamburger',
            'aria-label': 'Menu',
            onClick: toggleMobileNav
          },
            el('span'), el('span'), el('span')
          )
        )
      )
    );
    return nav;
  }

  function renderMobileNav() {
    const mob = el('div', { className: 'nav-mobile', id: 'mobile-nav' },
      ...CONTENT.nav.links.map(l =>
        el('a', { href: l.href, onClick: closeMobileNav }, l.label)
      ),
      el('a', {
        className: 'btn btn--primary',
        href: 'tel:+33745817033',
        onClick: closeMobileNav
      }, CONTENT.nav.phone)
    );
    return mob;
  }

  function renderScrollIndicator() {
    return el('div', { className: 'scroll-indicator', id: 'scroll-indicator' });
  }

  function renderHero() {
    // Split title into words for animation
    const words = CONTENT.hero.title.split(' ');
    const titleWords = words.map((w, i) => {
      const isGradient = (i === words.length - 1); // last word gets gradient
      return el('span', { className: 'word' },
        el('span', {
          className: 'word-inner' + (isGradient ? ' gradient-text' : ''),
        }, w + (i < words.length - 1 ? '\u00A0' : ''))
      );
    });

    return el('section', { className: 'hero', id: 'hero' },
      el('div', { className: 'hero-content' },
        el('div', { className: 'hero-badge reveal' },
          el('span', { className: 'dot' }),
          CONTENT.hero.badge
        ),
        el('h1', {}, ...titleWords),
        el('p', { className: 'hero-sub reveal' }, CONTENT.hero.sub),
        el('div', { className: 'hero-actions reveal' },
          el('a', { className: 'btn btn--primary btn--lg magnetic', href: CONTENT.hero.cta1.href, target: '_blank', rel: 'noopener' }, CONTENT.hero.cta1.label),
          el('a', { className: 'btn btn--secondary btn--lg magnetic', href: CONTENT.hero.cta2.href }, CONTENT.hero.cta2.label)
        )
      )
    );
  }

  function renderIntro() {
    return el('section', { className: 'section intro', id: 'intro' },
      el('div', { className: 'container' },
        el('p', { className: 'intro-text reveal', innerHTML: CONTENT.intro.text }),
        el('div', { className: 'intro-line reveal-line' }),
        el('p', { className: 'intro-sub reveal' }, CONTENT.intro.sub)
      )
    );
  }

  function renderModules() {
    return el('section', { className: 'section', id: 'formations' },
      el('div', { className: 'container' },
        el('div', { className: 'section-header' },
          el('span', { className: 'section-label reveal' }, 'Formations'),
          el('h2', { className: 'reveal' }, 'Nos modules de formation'),
          el('p', { className: 'section-desc reveal' }, "Des formations pratiques et accessibles pour découvrir l'intelligence artificielle à votre rythme.")
        ),
        el('div', { className: 'modules-grid' },
          ...CONTENT.modules.map(m => renderModuleCard(m))
        )
      )
    );
  }

  function renderModuleCard(m) {
    return el('div', { className: 'module-card reveal' },
      el('div', { className: 'module-number' }, m.number),
      el('div', { className: 'module-badge' }, m.duration),
      m.durationNote ? el('p', { className: 'pricing-duration', style: 'margin-bottom:12px;font-size:13px;' }, m.durationNote) : null,
      el('h3', { className: 'module-title' }, m.title),
      el('div', { className: 'module-items' },
        ...m.items.map(item =>
          el('div', { className: 'module-item' },
            el('div', { className: 'module-item-dot' }),
            el('span', { innerHTML: `<strong>${item.title}</strong> — ${item.desc}` })
          )
        )
      ),
      el('div', { className: 'module-objective' },
        el('p', { innerHTML: `<strong>Objectif :</strong> ${m.objective}` })
      )
    );
  }

  function renderPricing() {
    return el('section', { className: 'section', id: 'tarifs' },
      el('div', { className: 'container' },
        el('div', { className: 'section-header' },
          el('span', { className: 'section-label reveal' }, 'Tarifs'),
          el('h2', { className: 'reveal' }, 'Tarifs des formations IA'),
          el('p', { className: 'section-desc reveal' }, 'Des prix adaptés à chaque format, avec un accompagnement personnalisé.')
        ),
        el('div', { className: 'pricing-grid' },
          ...CONTENT.pricing.map(p => renderPricingCard(p))
        )
      )
    );
  }

  function renderPricingCard(p) {
    return el('div', { className: 'pricing-card reveal' + (p.featured ? ' featured' : '') },
      el('div', { className: 'pricing-header' },
        el('h3', {}, p.title),
        el('p', { className: 'pricing-duration' }, p.duration)
      ),
      el('p', { className: 'pricing-from' }, 'À partir de'),
      el('div', { className: 'pricing-amount' },
        p.from, el('span', { className: 'currency' }, '€')
      ),
      el('p', { className: 'pricing-suffix' }, '/personne'),
      el('div', { className: 'pricing-rows' },
        ...p.rows.map(r =>
          el('div', { className: 'pricing-row' },
            el('span', { className: 'pricing-row-label' }, r.label),
            el('span', { className: 'pricing-row-value' }, r.value)
          )
        )
      ),
      el('div', { className: 'pricing-cta' },
        el('a', {
          className: 'btn btn--primary magnetic',
          href: CONTENT.contact.calendar,
          target: '_blank',
          rel: 'noopener'
        }, 'Réserver')
      )
    );
  }

  function renderZone() {
    return el('section', { className: 'section', id: 'zone' },
      el('div', { className: 'container' },
        el('div', { className: 'section-header' },
          el('span', { className: 'section-label reveal' }, 'Zone'),
          el('h2', { className: 'reveal' }, "Zone d'intervention")
        ),
        el('div', { className: 'zone-grid' },
          el('div', { className: 'zone-text reveal' },
            ...CONTENT.zone.text.map(t => el('p', { innerHTML: t }))
          ),
          el('div', { className: 'zone-map reveal' },
            el('img', { src: CONTENT.zone.mapImg, alt: CONTENT.zone.mapAlt, loading: 'lazy' })
          )
        )
      )
    );
  }

  function renderFAQ() {
    return el('section', { className: 'section', id: 'faq' },
      el('div', { className: 'container' },
        el('div', { className: 'section-header' },
          el('span', { className: 'section-label reveal' }, 'FAQ'),
          el('h2', { className: 'reveal' }, 'Questions fréquentes')
        ),
        el('div', { className: 'faq-list' },
          ...CONTENT.faq.map((f, i) => renderFAQItem(f, i))
        )
      )
    );
  }

  function renderFAQItem(f) {
    const item = el('div', { className: 'faq-item reveal' });
    const answer = el('div', { className: 'faq-answer' },
      el('div', { className: 'faq-answer-inner' }, f.a)
    );
    const btn = el('button', {
      className: 'faq-question',
      onClick: () => toggleFAQ(item, answer)
    },
      el('span', {}, f.q),
      el('span', { className: 'faq-icon' }, '+')
    );
    item.appendChild(btn);
    item.appendChild(answer);
    return item;
  }

  function toggleFAQ(item, answer) {
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(fi => {
      fi.classList.remove('open');
      fi.querySelector('.faq-answer').style.maxHeight = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  }

  function renderContact() {
    return el('section', { className: 'section', id: 'contact' },
      el('div', { className: 'container' },
        el('div', { className: 'section-header' },
          el('span', { className: 'section-label reveal' }, 'Contact'),
          el('h2', { className: 'reveal' }, 'Prenons contact')
        ),
        el('div', { className: 'contact-grid' },
          el('div', { className: 'contact-info reveal' },
            el('div', { className: 'contact-item' },
              el('div', { className: 'contact-icon' }, '\u260E'),
              el('div', {},
                el('div', { className: 'contact-item-label' }, 'Téléphone'),
                el('div', { className: 'contact-item-value' },
                  el('a', { href: 'tel:+33745817033' }, CONTENT.contact.phone)
                )
              )
            ),
            el('div', { className: 'contact-item' },
              el('div', { className: 'contact-icon' }, '\u2709'),
              el('div', {},
                el('div', { className: 'contact-item-label' }, 'Email'),
                el('div', { className: 'contact-item-value' },
                  el('a', { href: 'mailto:' + CONTENT.contact.email }, CONTENT.contact.email)
                )
              )
            ),
            el('div', { className: 'contact-item' },
              el('div', { className: 'contact-icon' }, '\uD83D\uDCC5'),
              el('div', {},
                el('div', { className: 'contact-item-label' }, 'Réservation'),
                el('div', { className: 'contact-item-value' },
                  el('a', { href: CONTENT.contact.calendar, target: '_blank', rel: 'noopener' }, 'Réserver un créneau')
                )
              )
            )
          ),
          renderContactForm()
        )
      )
    );
  }

  function renderContactForm() {
    const msgDiv = el('div', { className: 'form-message', id: 'form-msg' });
    const form = el('form', {
      className: 'contact-form-wrap reveal',
      id: 'contact-form',
      onSubmit: handleFormSubmit
    },
      el('h3', { className: 'contact-form-title' }, CONTENT.contact.formTitle),
      el('input', { type: 'hidden', name: 'access_key', value: '91cd09a9-f131-4dd3-946c-af5896a4fc79' }),
      el('input', { type: 'checkbox', name: 'botcheck', style: 'display:none', tabindex: '-1', autocomplete: 'off' }),
      el('div', { className: 'form-group' },
        el('label', { className: 'form-label', for: 'name' }, 'Nom'),
        el('input', { className: 'form-input', type: 'text', id: 'name', name: 'name', placeholder: 'Votre nom', required: '' })
      ),
      el('div', { className: 'form-group' },
        el('label', { className: 'form-label', for: 'phone' }, 'Téléphone'),
        el('input', { className: 'form-input', type: 'tel', id: 'phone', name: 'phone', placeholder: 'Votre numéro', required: '' })
      ),
      el('div', { className: 'form-checkbox' },
        el('input', { type: 'checkbox', id: 'rgpd', name: 'rgpd', required: '' }),
        el('label', { for: 'rgpd', innerHTML: "J'accepte que mes données soient utilisées pour me recontacter. Voir notre <a href='mentions-legales.html' style='color:var(--accent)'>politique de confidentialité</a>." })
      ),
      el('button', { type: 'submit', className: 'btn btn--primary magnetic', style: 'width:100%;justify-content:center;' }, 'Demander un rappel'),
      msgDiv
    );
    return form;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const msg = document.getElementById('form-msg');
    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const json = await res.json();
      if (json.success) {
        msg.className = 'form-message success';
        msg.textContent = 'Merci ! Nous vous recontacterons rapidement.';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      msg.className = 'form-message error';
      msg.textContent = "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.";
    }
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return el('footer', { className: 'footer' },
      el('div', { className: 'container' },
        el('div', { className: 'footer-inner' },
          el('p', { className: 'footer-message' }, CONTENT.footer.message),
          el('div', { className: 'footer-links' },
            ...CONTENT.footer.links.map(l =>
              el('a', { href: l.href }, l.label)
            )
          ),
          el('p', { className: 'footer-copy' },
            `\u00A9 ${year} Estelle Formation IA \u2014 Colmar, Beblenheim & S\u00E9lestat et environs.`
          )
        )
      )
    );
  }


  // ─── THREE.JS SCENE ────────────────────────
  let scene3d, camera, renderer3d, particles, mouseX = 0, mouseY = 0;

  function initScene() {
    const canvas = document.getElementById('scene');
    if (!canvas || typeof THREE === 'undefined') return;

    scene3d = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    renderer3d = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer3d.setSize(window.innerWidth, window.innerHeight);
    renderer3d.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const count = 1200;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const accent1 = new THREE.Color(0x22d3ee);
    const accent2 = new THREE.Color(0xf97316);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 80;

      const t = Math.random();
      const c = accent1.clone().lerp(accent2, t);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particles = new THREE.Points(geo, mat);
    scene3d.add(particles);

    // Lines between nearby particles
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];
    const pos = geo.attributes.position.array;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 8) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene3d.add(lines);

    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer3d.setSize(window.innerWidth, window.innerHeight);
    });
  }

  function animateScene(time) {
    if (!particles || !renderer3d) return;

    const t = time * 0.0001;
    particles.rotation.y = t * 0.3 + mouseX * 0.05;
    particles.rotation.x = t * 0.15 + mouseY * 0.05;

    // Subtle position drift
    const pos = particles.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] += Math.sin(t * 2 + pos[i] * 0.1) * 0.005;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    renderer3d.render(scene3d, camera);
  }


  // ─── ROBOTS (ORIGINAL VISUALS) ───────────
  const DPR = Math.min(window.devicePixelRatio || 1, LOW_MOTION ? 1.25 : 1.5);
  const RAND = (a, b) => a + Math.random() * (b - a);

  // Rounded rect helper
  function rr(ctx, x, y, w, h, r) {
    const rad = Math.min(r, Math.min(w, h) / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.arcTo(x + w, y, x + w, y + h, rad);
    ctx.arcTo(x + w, y + h, x, y + h, rad);
    ctx.arcTo(x, y + h, x, y, rad);
    ctx.arcTo(x, y, x + w, y, rad);
    ctx.closePath();
  }

  let robotCanvas, robotCtx, robotUICanvas, robotUICtx;
  const robots = [];
  let maskRects = [], maskTimer = null;
  let __botfx_grabbed = -1;

  function updateMask() {
    maskRects = Array.from(document.querySelectorAll('.module-card, .pricing-card, .faq-item, .contact-form-wrap, .zone-map, .nav'))
      .map(el => el.getBoundingClientRect());
  }
  function scheduleMask() {
    if (maskTimer) return;
    maskTimer = setTimeout(() => { updateMask(); maskTimer = null; }, 100);
  }

  // Particle system
  const botParticles = [];
  const MAX_P = LOW_MOTION ? 240 : 520;

  function emitBurst(x, y, color, intensity) {
    const multiplier = LOW_MOTION ? 1.2 : 1.5;
    const n = Math.floor((LOW_MOTION ? 16 : 22 + Math.random() * 22) * (intensity || 1));
    for (let i = 0; i < n; i++) {
      if (botParticles.length > MAX_P) botParticles.splice(0, botParticles.length - MAX_P);
      const ang = Math.random() * Math.PI * 2;
      const sp = RAND(LOW_MOTION ? 60 : 80, LOW_MOTION ? 200 : 260) * DPR * (0.4 + (intensity || 1) * 0.6) / 1000;
      const baseR = RAND(3, 6) * DPR * multiplier;
      botParticles.push({
        x, y,
        vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
        r: baseR, life: RAND(360, LOW_MOTION ? 620 : 750), t: 0,
        col: color === 'teal' ? [42, 157, 143] : [244, 162, 97]
      });
    }
  }

  function stepParticles(dt) {
    for (let i = botParticles.length - 1; i >= 0; i--) {
      const p = botParticles[i];
      p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 0.983; p.vy *= 0.983;
      if (p.t > p.life) botParticles.splice(i, 1);
    }
  }

  function drawParticles(ctx) {
    if (!botParticles.length) return;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const p of botParticles) {
      const k = 1 - Math.min(1, p.t / p.life);
      const a = (LOW_MOTION ? 0.26 : 0.32) * k;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.2);
      g.addColorStop(0, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${a})`);
      g.addColorStop(1, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function initRobots() {
    robotCanvas = document.getElementById('robots');
    if (!robotCanvas) return;
    robotCtx = robotCanvas.getContext('2d');

    let W = 0, H = 0;
    function resize() {
      W = robotCanvas.width = innerWidth * DPR;
      H = robotCanvas.height = innerHeight * DPR;
      robotCanvas.style.width = innerWidth + 'px';
      robotCanvas.style.height = innerHeight + 'px';
    }
    resize();
    addEventListener('resize', resize);

    // Initialize robots
    const COUNT = ROBOT_OPTIONS.ROBOT_COUNT;
    for (let i = 0; i < COUNT; i++) {
      const r = RAND(36, 54) * DPR;
      robots.push({
        x: RAND(r, W - r), y: RAND(r, H - r), vx: 0, vy: 0, r,
        tint: (i % 2 ? 'teal' : 'orange'),
        blinking: false, blinkUntil: 0, nextBlinkAt: 2 + Math.random() * 3, winkSide: 'both',
        waving: false, waveUntil: 0, nextWaveAt: 6 + Math.random() * 6,
        hurt: false, hurtUntil: 0,
        tilt: 0
      });
    }

    // Masking
    updateMask();
    addEventListener('resize', scheduleMask);
    addEventListener('scroll', scheduleMask, { passive: true });

    // Pointer-based drag
    const mouse = { x: -1e3, y: -1e3, vx: 0, vy: 0, px: -1e3, py: -1e3, active: false, id: null };

    robotCanvas.addEventListener('pointerdown', e => {
      mouse.active = true; mouse.id = e.pointerId;
      const rect = robotCanvas.getBoundingClientRect();
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x = (e.clientX - rect.left) * DPR; mouse.y = (e.clientY - rect.top) * DPR;
      mouse.vx = 0; mouse.vy = 0;
      __botfx_grabbed = -1;
      for (let i = robots.length - 1; i >= 0; i--) {
        const b = robots[i];
        const dx = b.x - mouse.x, dy = b.y - mouse.y;
        if (dx * dx + dy * dy <= (b.r * 1.2) * (b.r * 1.2)) {
          __botfx_grabbed = i;
          robotCanvas.classList.add('grabbing');
          robotCanvas.style.touchAction = 'none';
          break;
        }
      }
      if (__botfx_grabbed === -1) robotCanvas.style.cursor = 'grab';
      if (__botfx_grabbed !== -1) e.preventDefault();
    }, { passive: false });

    robotCanvas.addEventListener('pointermove', e => {
      if (mouse.active && (mouse.id === null || e.pointerId === mouse.id)) {
        const rect = robotCanvas.getBoundingClientRect();
        mouse.px = mouse.x; mouse.py = mouse.y;
        mouse.x = (e.clientX - rect.left) * DPR; mouse.y = (e.clientY - rect.top) * DPR;
        mouse.vx = mouse.x - mouse.px; mouse.vy = mouse.y - mouse.py;
        if (__botfx_grabbed !== -1) e.preventDefault();
      }
    }, { passive: false });

    function endPress() {
      mouse.active = false; mouse.id = null; __botfx_grabbed = -1;
      robotCanvas.classList.remove('grabbing');
      robotCanvas.style.cursor = 'grab';
      robotCanvas.style.touchAction = 'auto';
    }
    window.addEventListener('pointerup', endPress, { passive: true });
    window.addEventListener('pointercancel', endPress, { passive: true });

    // Physics step
    window.__robotStep = function () {
      const now = performance.now() / 1000;
      const Rbase = ROBOT_OPTIONS.MOUSE_REPEL_RADIUS * DPR;

      for (const a of robots) {
        if (!a.blinking && now >= a.nextBlinkAt) {
          a.blinking = true; a.blinkUntil = now + 0.12;
          a.winkSide = (Math.random() < 0.25 ? 'both' : (Math.random() < 0.5 ? 'left' : 'right'));
          a.nextBlinkAt = now + (2 + Math.random() * 3);
        }
        if (a.blinking && now >= a.blinkUntil) a.blinking = false;
        if (!a.waving && now >= a.nextWaveAt && !mouse.active) {
          a.waving = true; a.waveUntil = now + 0.7;
          a.nextWaveAt = now + (6 + Math.random() * 6);
        }
        if (a.waving && now >= a.waveUntil) a.waving = false;
        if (a.hurt && now >= a.hurtUntil) a.hurt = false;
      }

      for (let i = 0; i < robots.length; i++) {
        const a = robots[i];
        if (mouse.active) {
          if (i === __botfx_grabbed) {
            const dx = mouse.x - a.x, dy = mouse.y - a.y;
            a.vx += dx * ROBOT_OPTIONS.STICKY_DRAG_FORCE;
            a.vy += dy * ROBOT_OPTIONS.STICKY_DRAG_FORCE;
          } else if (__botfx_grabbed === -1) {
            const dx = a.x - mouse.x, dy = a.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            const R = Rbase + a.r;
            if (d2 < R * R) {
              const d = Math.sqrt(d2) || 1;
              const nx = dx / d, ny = dy / d;
              const f = (1 - d / R);
              a.vx += (nx * ROBOT_OPTIONS.MOUSE_REPEL_FORCE + mouse.vx * 0.04) * f;
              a.vy += (ny * ROBOT_OPTIONS.MOUSE_REPEL_FORCE + mouse.vy * 0.04) * f;
            }
          }
        }

        a.x += a.vx; a.y += a.vy;
        a.vx *= ROBOT_OPTIONS.FRICTION; a.vy *= ROBOT_OPTIONS.FRICTION;
        if (!mouse.active) { a.vx *= ROBOT_OPTIONS.DRAG_FRICTION; a.vy *= ROBOT_OPTIONS.DRAG_FRICTION; }

        if (a.x < a.r) { a.x = a.r; a.vx = Math.abs(a.vx) * ROBOT_OPTIONS.WALL_ELASTICITY; }
        if (a.x > W - a.r) { a.x = W - a.r; a.vx = -Math.abs(a.vx) * ROBOT_OPTIONS.WALL_ELASTICITY; }
        if (a.y < a.r) { a.y = a.r; a.vy = Math.abs(a.vy) * ROBOT_OPTIONS.WALL_ELASTICITY; }
        if (a.y > H - a.r) { a.y = H - a.r; a.vy = -Math.abs(a.vy) * ROBOT_OPTIONS.WALL_ELASTICITY; }

        const targetTilt = (a.vx / DPR) * 0.05;
        a.tilt += (targetTilt - a.tilt) * 0.1;
      }

      // Collisions
      for (let i = 0; i < robots.length; i++) {
        for (let j = i + 1; j < robots.length; j++) {
          const a = robots[i], b = robots[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const min = a.r + b.r;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < min * min) {
            const d = Math.sqrt(d2) || 1;
            const nx = dx / d, ny = dy / d;
            const overlap = (min - d) * 0.5;
            a.x += nx * overlap; a.y += ny * overlap;
            b.x -= nx * overlap; b.y -= ny * overlap;
            const dvx = a.vx - b.vx, dvy = a.vy - b.vy;
            const vn = dvx * nx + dvy * ny;
            if (vn < 0) {
              const impulse = vn * ROBOT_OPTIONS.COLLISION_ELASTICITY;
              a.vx -= impulse * nx; a.vy -= impulse * ny;
              b.vx += impulse * nx; b.vy += impulse * ny;
            }
            const intensity = Math.min(1.3, Math.abs(vn) * 1.4 + 0.5);
            emitBurst((a.x + b.x) / 2, (a.y + b.y) / 2, Math.random() < 0.5 ? a.tint : b.tint, intensity);
            const nowS = performance.now() / 1000;
            a.hurt = true; b.hurt = true;
            a.hurtUntil = nowS + RAND(0.5, 0.7);
            b.hurtUntil = nowS + RAND(0.5, 0.7);
          }
        }
      }
    };

    // Draw robot (exact original visuals)
    window.__robotDraw = function () {
      if (!robotCtx) return;
      robotCtx.clearRect(0, 0, W, H);

      for (const b of robots) {
        const ctx = robotCtx;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.tilt);
        ctx.translate(-b.x, -b.y);

        const w = b.r * 1.8, h = b.r * 1.6;
        const rx = b.x - w / 2, ry = b.y - h / 2;

        // Body with glow
        ctx.shadowBlur = 26 * DPR;
        ctx.shadowColor = b.tint === 'teal' ? 'rgba(42,157,143,0.65)' : 'rgba(244,162,97,0.65)';
        ctx.fillStyle = b.tint === 'teal' ? 'rgba(42,157,143,0.98)' : 'rgba(244,162,97,0.98)';
        rr(ctx, rx, ry, w, h, 12 * DPR);
        ctx.fill();

        // White stroke outline
        ctx.shadowBlur = 0;
        ctx.lineWidth = 2 * DPR;
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.stroke();

        // White face plate
        const fpw = w * 0.78, fph = h * 0.48;
        const fpx = b.x - fpw / 2, fpy = b.y - fph * 0.15;
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        rr(ctx, fpx, fpy, fpw, fph, 10 * DPR);
        ctx.fill();

        // Eyes
        const es = b.r * 0.22, ey = b.y;
        if (b.hurt) {
          // X eyes + frown
          ctx.strokeStyle = 'rgba(14,27,42,0.95)';
          ctx.lineWidth = 2 * DPR;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(fpx + fpw * 0.25 - es, ey - es);
          ctx.lineTo(fpx + fpw * 0.25 + es, ey + es);
          ctx.moveTo(fpx + fpw * 0.75 + es, ey - es);
          ctx.lineTo(fpx + fpw * 0.75 - es, ey + es);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(b.x, b.y + es * 1.1, es * 0.9, 0.85 * Math.PI, 0.15 * Math.PI, true);
          ctx.stroke();
        } else {
          // Normal dark rounded square eyes
          ctx.fillStyle = 'rgba(14,27,42,0.95)';
          const leftOpen = !(b.blinking && (b.winkSide === 'left' || b.winkSide === 'both'));
          const rightOpen = !(b.blinking && (b.winkSide === 'right' || b.winkSide === 'both'));
          if (leftOpen) { rr(ctx, fpx + fpw * 0.25 - es, ey - es, es * 2, es * 2, es); ctx.fill(); }
          else { ctx.fillRect(fpx + fpw * 0.25 - es, ey - 1 * DPR, es * 2, 2 * DPR); }
          if (rightOpen) { rr(ctx, fpx + fpw * 0.75 - es, ey - es, es * 2, es * 2, es); ctx.fill(); }
          else { ctx.fillRect(fpx + fpw * 0.75 - es, ey - 1 * DPR, es * 2, 2 * DPR); }
          // Smile
          ctx.strokeStyle = 'rgba(14,27,42,0.8)';
          ctx.lineWidth = 2 * DPR;
          ctx.beginPath();
          ctx.arc(b.x, b.y + es * 0.9, es * 0.9, 0.15 * Math.PI, 0.85 * Math.PI);
          ctx.stroke();
        }

        // White arms
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        let leftArmY = b.y - h * 0.05, rightArmY = b.y - h * 0.05;
        if (b.waving) rightArmY -= h * 0.25;
        rr(ctx, b.x - w * 0.45, leftArmY, w * 0.18, h * 0.12, 6 * DPR); ctx.fill();
        rr(ctx, b.x + w * 0.27, rightArmY, w * 0.18, h * 0.12, 6 * DPR); ctx.fill();

        // White legs
        rr(ctx, b.x - w * 0.22, b.y + h * 0.45, w * 0.18, h * 0.18, 6 * DPR); ctx.fill();
        rr(ctx, b.x + w * 0.04, b.y + h * 0.45, w * 0.18, h * 0.18, 6 * DPR); ctx.fill();

        // Two white antennae with circle tips
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 2 * DPR;
        ctx.beginPath();
        ctx.moveTo(b.x - w * 0.18, ry + 4 * DPR);
        ctx.lineTo(b.x - w * 0.18, ry - h * 0.25);
        ctx.moveTo(b.x + w * 0.18, ry + 4 * DPR);
        ctx.lineTo(b.x + w * 0.18, ry - h * 0.25);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(b.x - w * 0.18, ry - h * 0.28, 3.5 * DPR, 0, Math.PI * 2);
        ctx.arc(b.x + w * 0.18, ry - h * 0.28, 3.5 * DPR, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.fill();

        ctx.restore();
      }

      // Particles
      drawParticles(robotCtx);

      // Mask behind cards
      if (maskRects && maskRects.length) {
        robotCtx.save();
        try {
          robotCtx.globalCompositeOperation = 'destination-out';
          robotCtx.filter = 'blur(6px)';
          robotCtx.fillStyle = 'rgba(0,0,0,0.95)';
          for (const r of maskRects) {
            const x = r.left * DPR, y = r.top * DPR, w = r.width * DPR, h = r.height * DPR;
            if (!Number.isFinite(x) || !Number.isFinite(y) || w <= 0 || h <= 0) continue;
            rr(robotCtx, x - 12 * DPR, y - 12 * DPR, w + 24 * DPR, h + 24 * DPR, 16 * DPR);
            robotCtx.fill();
          }
        } catch (e) {}
        robotCtx.filter = 'none';
        robotCtx.restore();
        robotCtx.globalCompositeOperation = 'source-over';
      }
    };
  }

  // ─── ROBOT UI (Speech, Halos, AI) ──────
  function initRobotsUI() {
    robotUICanvas = document.getElementById('robots-ui');
    if (!robotUICanvas || !robots.length) return;
    robotUICtx = robotUICanvas.getContext('2d');

    function resize() {
      robotUICanvas.width = Math.max(16, Math.floor(innerWidth * DPR));
      robotUICanvas.height = Math.max(16, Math.floor(innerHeight * DPR));
      robotUICanvas.style.width = innerWidth + 'px';
      robotUICanvas.style.height = innerHeight + 'px';
    }
    resize();
    addEventListener('resize', resize, { passive: true });

    const DAMPING = 0.9975, SPEED_CAP_BASE = 9.5, SEP_FORCE = 0.05, POST_HUG_KICK = 0.9;
    let seed = 999;
    function rand() { seed = (seed * 1664525 + 1013904223) >>> 0; return (seed & 0xffff) / 0xffff; }
    function between(a, b) { return a + (b - a) * rand(); }

    const sayings = ["On se voit quand ?", "Besoin d'un coup de main ?", "Contactez-nous \uD83D\uDC4B", "Une question sur l'IA ?", "Prêt à essayer ?", "Réserve un créneau \uD83D\uDCC5"];
    let nextSpeakAt = performance.now() + 20000, lastSpeaker = -1;
    let nextPairAt = performance.now() + 60000;
    let nextBoostAt = performance.now() + between(12000, 22000);
    let nextMalAt = performance.now() + 180000, malfunctionBot = -1;

    // Init AI state on each robot
    robots.forEach(b => {
      b._ai = {
        trail: [], mood: 'wander', target: null,
        hugging: false, hugUntil: 0, hugWith: null, hugCooldownUntil: 0,
        speedFactor: between(0.7, 1.35), speedDriftAt: performance.now() + between(8000, 16000),
        angle: 0, speech: null, tSpeechUntil: 0,
        boostUntil: 0, boostDir: 0,
        malPhase: null, malUntil: 0, spinSpeed: 0, recoverAt: 0
      };
    });

    function scheduleSpeech(now) {
      if (now < nextSpeakAt) return;
      nextSpeakAt = now + 20000;
      let idx = Math.floor(rand() * robots.length);
      if (robots.length > 1 && idx === lastSpeaker) idx = (idx + 1) % robots.length;
      lastSpeaker = idx;
      const b = robots[idx];
      b._ai.speech = sayings[Math.floor(rand() * sayings.length)];
      b._ai.tSpeechUntil = now + 3000;
    }

    function schedulePair(now) {
      if (now < nextPairAt || robots.length < 2) return;
      nextPairAt = now + 60000;
      let i = Math.floor(rand() * robots.length), j = Math.floor(rand() * robots.length);
      if (j === i) j = (j + 1) % robots.length;
      robots[i]._ai.mood = 'seekmate'; robots[i]._ai.target = j;
      robots[j]._ai.mood = 'seekmate'; robots[j]._ai.target = i;
    }

    function scheduleBoost(now) {
      if (now < nextBoostAt) return;
      nextBoostAt = now + between(12000, 22000);
      const i = Math.floor(rand() * robots.length);
      const ai = robots[i]._ai;
      ai.boostUntil = now + 1200;
      ai.boostDir = Math.atan2(robots[i].vy, robots[i].vx) + between(-0.8, 0.8);
      if (now > (ai.tSpeechUntil || 0) && now > nextSpeakAt - 5000) {
        ai.speech = "Wouhouuuu !"; ai.tSpeechUntil = now + 1200;
      }
    }

    function scheduleMal(now) {
      if (now < nextMalAt || robots.length === 0) return;
      nextMalAt = now + 180000;
      malfunctionBot = Math.floor(rand() * robots.length);
      const ai = robots[malfunctionBot]._ai;
      ai.malPhase = 'spin'; ai.malUntil = now + 2000;
      ai.spinSpeed = between(0.3, 0.6);
    }

    function stepAI(dt) {
      const now = performance.now();
      scheduleSpeech(now); schedulePair(now); scheduleBoost(now); scheduleMal(now);

      for (const b of robots) {
        const ai = b._ai;
        if (now >= ai.speedDriftAt) {
          ai.speedFactor = Math.min(1.5, Math.max(0.65, ai.speedFactor + between(-0.25, 0.25)));
          ai.speedDriftAt = now + between(8000, 16000);
        }
      }

      // Separation
      for (let i = 0; i < robots.length; i++) {
        for (let j = i + 1; j < robots.length; j++) {
          const a = robots[i], b = robots[j];
          if (a._ai.hugging || b._ai.hugging) continue;
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          const minD = (a.r + b.r) * 1.5, minD2 = minD * minD;
          if (d2 > 0 && d2 < minD2) {
            const d = Math.sqrt(d2) || 1, nx = dx / d, ny = dy / d;
            const push = (minD - d) * SEP_FORCE;
            a.vx += nx * push; a.vy += ny * push;
            b.vx -= nx * push; b.vy -= ny * push;
          }
        }
      }

      for (let i = 0; i < robots.length; i++) {
        const b = robots[i], ai = b._ai;
        if (__botfx_grabbed === i) continue;

        // Malfunction
        if (i === malfunctionBot && ai.malPhase) {
          if (ai.malPhase === 'spin') {
            ai.angle += ai.spinSpeed; b.vx *= 0.95; b.vy *= 0.95;
            if (now >= ai.malUntil) {
              ai.malPhase = 'spinFly'; ai.malUntil = now + 4000;
              const dir = between(0, Math.PI * 2);
              b.vx += Math.cos(dir) * 6; b.vy += Math.sin(dir) * 6;
            }
          } else if (ai.malPhase === 'spinFly') {
            ai.angle += ai.spinSpeed * 1.8;
            if (Math.hypot(b.vx, b.vy) < 10) { b.vx *= 1.06; b.vy *= 1.06; }
            if (now >= ai.malUntil) { ai.malPhase = null; malfunctionBot = -1; ai.recoverAt = now + 2000; }
          }
          if (ai.recoverAt && now >= ai.recoverAt) {
            ai.recoverAt = 0; ai.speech = "Jetpack HS !"; ai.tSpeechUntil = now + 4000;
          }
        }

        // Jitter
        const jitter = 0.028 * ai.speedFactor;
        b.vx += between(-jitter, jitter); b.vy += between(-jitter, jitter);

        // Seeking / hugging
        if (ai.mood === 'seekmate' && typeof ai.target === 'number' && now > (ai.hugCooldownUntil || 0)) {
          const t = robots[ai.target];
          if (t) {
            const dx = t.x - b.x, dy = t.y - b.y, d = Math.hypot(dx, dy) || 1;
            const k = 0.05 * ai.speedFactor;
            b.vx += (dx / d) * k; b.vy += (dy / d) * k;
            const rel = Math.hypot(b.vx - t.vx, b.vy - t.vy);
            if (d < (b.r + t.r) * 1.05 && rel < 2.5) {
              ai.hugging = true; ai.hugUntil = now + 2000; ai.hugWith = ai.target; ai.mood = 'hug';
              t._ai.hugging = true; t._ai.hugUntil = now + 2000; t._ai.hugWith = i; t._ai.mood = 'hug';
              b.vx *= 0.2; b.vy *= 0.2; t.vx *= 0.2; t.vy *= 0.2;
            }
          }
        }

        // Boost
        if (ai.boostUntil && now < ai.boostUntil) {
          const p = 0.9 * ai.speedFactor;
          b.vx += Math.cos(ai.boostDir) * p; b.vy += Math.sin(ai.boostDir) * p;
        }

        // Hugging slowdown
        if (ai.hugging) {
          if (now >= ai.hugUntil) {
            ai.hugging = false; ai.mood = 'wander';
            ai.hugCooldownUntil = now + between(4000, 9000);
            const partner = typeof ai.hugWith === 'number' ? robots[ai.hugWith] : null;
            if (partner) {
              const dx = b.x - partner.x, dy = b.y - partner.y;
              const d = Math.hypot(dx, dy) || 1;
              b.vx += (dx / d) * POST_HUG_KICK; b.vy += (dy / d) * POST_HUG_KICK;
            }
            ai.hugWith = null;
          } else { b.vx *= 0.85; b.vy *= 0.85; }
        }

        // Speed cap
        const cap = SPEED_CAP_BASE * ai.speedFactor;
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > cap) { b.vx = b.vx / sp * cap; b.vy = b.vy / sp * cap; }

        // Trail
        if (Math.hypot(b.vx, b.vy) > 0.6) {
          ai.trail = ai.trail || [];
          ai.trail.push({ x: b.x, y: b.y, t: performance.now() });
        }
        if (ai.trail && ai.trail.length > 18) ai.trail.splice(0, ai.trail.length - 18);
      }
    }

    function drawUI() {
      if (!robotUICtx) return;
      const ctx = robotUICtx;
      ctx.clearRect(0, 0, robotUICanvas.width, robotUICanvas.height);
      const now = performance.now();

      for (const b of robots) {
        const ai = b._ai || {};

        // Halo / shadow
        const baseY = b.y + b.r * 0.95;
        const haloW = Math.max(16, b.r * 1.2);
        const haloH = Math.max(6, b.r * 0.35);
        ctx.save();
        ctx.globalAlpha = 0.55;
        ctx.shadowBlur = 18;
        ctx.shadowColor = 'rgba(100,220,255,0.55)';
        ctx.fillStyle = 'rgba(120,220,255,0.18)';
        ctx.beginPath();
        ctx.ellipse(b.x, baseY, haloW, haloH, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Hug arms
        if (ai.hugging && now < ai.hugUntil) {
          ctx.strokeStyle = 'rgba(14,27,42,0.95)';
          ctx.lineWidth = 3;
          const armR = b.r * 0.9, swing = Math.sin(now / 180) * 0.25;
          ctx.beginPath();
          ctx.arc(b.x, b.y, armR, (0.25 + swing) * Math.PI, (0.75 - swing) * Math.PI);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(b.x, b.y, armR, (1.25 - swing) * Math.PI, (1.75 + swing) * Math.PI);
          ctx.stroke();
          // Heart dots
          ctx.fillStyle = 'white';
          ctx.beginPath(); ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.2, 2.5, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(b.x + b.r * 0.35, b.y - b.r * 0.2, 2.5, 0, Math.PI * 2); ctx.fill();
        }

        // Speech bubble (white with pointer)
        if (now < (ai.tSpeechUntil || 0) && ai.speech) {
          const text = ai.speech;
          ctx.font = '700 ' + (14 * DPR / 1.5) + 'px system-ui, sans-serif';
          ctx.textBaseline = 'top';
          const padding = 8 * DPR / 1.5;
          const tw = Math.min(260 * DPR / 1.5, ctx.measureText(text).width + padding * 2);
          const th = 28 * DPR / 1.5;
          const bx = Math.max(8, Math.min(robotUICanvas.width - tw - 8, b.x - tw / 2));
          const by = Math.max(8, b.y - b.r - th - 14 * DPR / 1.5);

          ctx.fillStyle = 'rgba(255,255,255,0.95)';
          ctx.strokeStyle = 'rgba(0,0,0,0.12)';
          ctx.lineWidth = 1 * DPR / 1.5;
          if (ctx.roundRect) {
            ctx.beginPath(); ctx.roundRect(bx, by, tw, th, 10 * DPR / 1.5);
            ctx.fill(); ctx.stroke();
          } else {
            ctx.fillRect(bx, by, tw, th);
            ctx.strokeRect(bx, by, tw, th);
          }
          // Pointer triangle
          ctx.beginPath();
          ctx.moveTo(b.x, by + th);
          ctx.lineTo(b.x - 6 * DPR / 1.5, by + th + 8 * DPR / 1.5);
          ctx.lineTo(b.x + 6 * DPR / 1.5, by + th);
          ctx.closePath();
          ctx.fill();
          // Text
          ctx.fillStyle = '#0e1b2a';
          ctx.fillText(text, bx + padding, by + 7 * DPR / 1.5);
        }
      }
    }

    // UI animation loop
    let lastUI = performance.now();
    function tickUI() {
      const now = performance.now();
      const dt = Math.min(40, now - lastUI);
      lastUI = now;
      if (!document.hidden) {
        stepAI(dt / 16.0);
        drawUI();
      }
      requestAnimationFrame(tickUI);
    }
    requestAnimationFrame(tickUI);
  }


  // ─── ANIMATIONS (GSAP) ────────────────────
  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero word reveal
    const words = document.querySelectorAll('.hero .word-inner');
    gsap.fromTo(words,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.08,
        delay: 0.3
      }
    );

    // Hero reveals
    gsap.fromTo('.hero .reveal',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, delay: 0.8 }
    );

    // Section reveals
    document.querySelectorAll('.section .reveal, .intro .reveal').forEach(el => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Intro line
    document.querySelectorAll('.reveal-line').forEach(el => {
      gsap.fromTo(el,
        { width: 0 },
        {
          width: 80,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Scroll indicator
    gsap.to('#scroll-indicator', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        onUpdate: (self) => {
          const indicator = document.getElementById('scroll-indicator');
          if (indicator) indicator.style.width = (self.progress * 100) + '%';
        }
      }
    });
  }


  // ─── NAVIGATION ────────────────────────────
  let lastScrollY = 0;

  function initNavigation() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 100);
      if (y > lastScrollY && y > 400) {
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }
      lastScrollY = y;
    }, { passive: true });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function toggleMobileNav() {
    const mob = document.getElementById('mobile-nav');
    const ham = document.getElementById('hamburger');
    mob.classList.toggle('open');
    ham.classList.toggle('open');
  }

  function closeMobileNav() {
    const mob = document.getElementById('mobile-nav');
    const ham = document.getElementById('hamburger');
    mob.classList.remove('open');
    ham.classList.remove('open');
  }


  // ─── CUSTOM CURSOR ─────────────────────────
  function initCursor() {
    if ('ontouchstart' in window || window.innerWidth < 768) return;

    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    cursor.style.display = 'block';

    let cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });

    function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(loop);
    }
    loop();

    // Hover detection
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .magnetic, input, textarea, .faq-question')) {
        cursor.classList.add('active');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .magnetic, input, textarea, .faq-question')) {
        cursor.classList.remove('active');
      }
    });
  }


  // ─── COOKIE CONSENT ────────────────────────
  function initCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (document.cookie.includes('cookie_consent=')) return;

    setTimeout(() => banner.classList.add('visible'), 2000);

    document.getElementById('cookie-accept').addEventListener('click', () => {
      document.cookie = 'cookie_consent=accepted; max-age=31536000; path=/; SameSite=Lax';
      banner.classList.remove('visible');
    });

    document.getElementById('cookie-refuse').addEventListener('click', () => {
      document.cookie = 'cookie_consent=refused; max-age=31536000; path=/; SameSite=Lax';
      banner.classList.remove('visible');
    });
  }


  // ─── LOADER ────────────────────────────────
  function runLoader(cb) {
    const loader = document.getElementById('loader');
    const progress = loader.querySelector('.loader-progress');
    const text = loader.querySelector('.loader-text');
    let p = 0;

    const interval = setInterval(() => {
      p += Math.random() * 12 + 3;
      if (p > 100) p = 100;
      progress.style.width = p + '%';
      text.textContent = Math.round(p) + '%';
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add('hidden');
          cb();
        }, 400);
      }
    }, 80);
  }


  // ─── MAIN LOOP ─────────────────────────────
  let robotLast = performance.now();
  function mainLoop(time) {
    animateScene(time);
    // Robot physics + draw
    const now = performance.now();
    const dt = Math.min(48, now - robotLast);
    robotLast = now;
    if (window.__robotStep) window.__robotStep();
    stepParticles(dt);
    if (window.__robotDraw) window.__robotDraw();
    requestAnimationFrame(mainLoop);
  }


  // ─── BOOT ──────────────────────────────────
  function boot() {
    renderApp();
    initScene();
    initRobots();
    initRobotsUI();
    initCursor();
    initCookies();

    runLoader(() => {
      initAnimations();
      initNavigation();
      requestAnimationFrame(mainLoop);
    });
  }

  // Wait for DOM and libraries
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
