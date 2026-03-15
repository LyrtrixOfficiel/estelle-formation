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

  // Robot speech bubbles
  const ROBOT_BUBBLES = [
    "On se voit quand ?",
    "Besoin d'un coup de main ?",
    "Contactez-nous !",
    "Une question sur l'IA ?",
    "Prêt à essayer ?",
    "Réserve un créneau !",
    "Jetpack HS !"
  ];


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


  // ─── ROBOTS ────────────────────────────────
  let robotCanvas, robotCtx;
  const bots = [];
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function initRobots() {
    robotCanvas = document.getElementById('robots');
    if (!robotCanvas) return;
    robotCtx = robotCanvas.getContext('2d');

    function resize() {
      robotCanvas.width = window.innerWidth * DPR;
      robotCanvas.height = window.innerHeight * DPR;
      robotCanvas.style.width = window.innerWidth + 'px';
      robotCanvas.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#22d3ee', '#f97316', '#22d3ee'];
    for (let i = 0; i < 3; i++) {
      bots.push({
        x: (0.2 + i * 0.3) * window.innerWidth,
        y: window.innerHeight * 0.6 + Math.random() * 100,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: (36 + i * 6) * DPR,
        color: colors[i],
        eyeOpen: [1, 1],
        blinkTimer: Math.random() * 200 + 100,
        waving: false,
        waveTimer: 0,
        bubbleText: '',
        bubbleTimer: 0,
        dragging: false,
        trail: []
      });
    }

    // Drag support
    let dragBot = null;
    const getPos = (e) => {
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX, y: t.clientY };
    };

    const onDown = (e) => {
      const p = getPos(e);
      for (let i = bots.length - 1; i >= 0; i--) {
        const b = bots[i];
        const dx = p.x - b.x, dy = p.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < b.size / DPR) {
          dragBot = b;
          b.dragging = true;
          robotCanvas.style.pointerEvents = 'auto';
          e.preventDefault();
          break;
        }
      }
    };
    const onMove = (e) => {
      if (!dragBot) return;
      const p = getPos(e);
      dragBot.x = p.x;
      dragBot.y = p.y;
      dragBot.vx = 0;
      dragBot.vy = 0;
      e.preventDefault();
    };
    const onUp = () => {
      if (dragBot) {
        dragBot.dragging = false;
        dragBot.vx = (Math.random() - 0.5) * 3;
        dragBot.vy = (Math.random() - 0.5) * 3;
        dragBot = null;
        robotCanvas.style.pointerEvents = 'none';
      }
    };

    robotCanvas.addEventListener('mousedown', onDown);
    robotCanvas.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
  }

  function updateRobots() {
    if (!robotCtx) return;
    const W = window.innerWidth, H = window.innerHeight;
    robotCtx.clearRect(0, 0, robotCanvas.width, robotCanvas.height);

    bots.forEach(b => {
      if (!b.dragging) {
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.998;
        b.vy *= 0.998;

        // Walls
        if (b.x < 30) { b.x = 30; b.vx *= -0.8; }
        if (b.x > W - 30) { b.x = W - 30; b.vx *= -0.8; }
        if (b.y < 30) { b.y = 30; b.vy *= -0.8; }
        if (b.y > H - 30) { b.y = H - 30; b.vy *= -0.8; }

        // Random nudge
        if (Math.random() < 0.005) {
          b.vx += (Math.random() - 0.5) * 2;
          b.vy += (Math.random() - 0.5) * 2;
        }
      }

      // Blink
      b.blinkTimer--;
      if (b.blinkTimer <= 0) {
        b.eyeOpen = [Math.random() > 0.3 ? 0 : 1, Math.random() > 0.3 ? 0 : 1];
        b.blinkTimer = b.eyeOpen[0] === 0 || b.eyeOpen[1] === 0 ? 8 : Math.random() * 300 + 100;
        if (b.eyeOpen[0] === 0 || b.eyeOpen[1] === 0) {
          b.blinkTimer = 8;
        }
      }
      if (b.blinkTimer === 8) {
        b.eyeOpen = [1, 1];
      }

      // Speech bubble
      if (b.bubbleTimer > 0) {
        b.bubbleTimer--;
      } else if (Math.random() < 0.001) {
        b.bubbleText = ROBOT_BUBBLES[Math.floor(Math.random() * ROBOT_BUBBLES.length)];
        b.bubbleTimer = 180;
      }

      // Trail
      b.trail.push({ x: b.x, y: b.y, life: 20 });
      if (b.trail.length > 15) b.trail.shift();

      drawRobot(b);
    });

    // Collisions
    for (let i = 0; i < bots.length; i++) {
      for (let j = i + 1; j < bots.length; j++) {
        const a = bots[i], b = bots[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = (a.size + b.size) / DPR / 2;
        if (dist < minDist && dist > 0) {
          const nx = dx / dist, ny = dy / dist;
          const push = (minDist - dist) / 2;
          if (!a.dragging) { a.x += nx * push; a.y += ny * push; a.vx += nx * 0.5; a.vy += ny * 0.5; }
          if (!b.dragging) { b.x -= nx * push; b.y -= ny * push; b.vx -= nx * 0.5; b.vy -= ny * 0.5; }
        }
      }
    }
  }

  function drawRobot(b) {
    const ctx = robotCtx;
    const s = b.size;
    const x = b.x * DPR, y = b.y * DPR;

    ctx.save();
    ctx.translate(x, y);

    // Glow
    ctx.shadowColor = b.color;
    ctx.shadowBlur = 20 * DPR;

    // Trail
    b.trail.forEach((t, i) => {
      const alpha = (t.life / 20) * 0.1;
      t.life--;
      ctx.beginPath();
      ctx.arc((t.x * DPR - x), (t.y * DPR - y), s * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = b.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
      const hex = b.color;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const bl = parseInt(hex.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${r},${g},${bl},${alpha})`;
      ctx.fill();
    });

    ctx.shadowBlur = 15 * DPR;

    // Body
    const bodyH = s * 0.6;
    const bodyW = s * 0.5;
    ctx.beginPath();
    const cornerR = s * 0.12;
    ctx.moveTo(-bodyW / 2 + cornerR, -bodyH / 2);
    ctx.lineTo(bodyW / 2 - cornerR, -bodyH / 2);
    ctx.quadraticCurveTo(bodyW / 2, -bodyH / 2, bodyW / 2, -bodyH / 2 + cornerR);
    ctx.lineTo(bodyW / 2, bodyH / 2 - cornerR);
    ctx.quadraticCurveTo(bodyW / 2, bodyH / 2, bodyW / 2 - cornerR, bodyH / 2);
    ctx.lineTo(-bodyW / 2 + cornerR, bodyH / 2);
    ctx.quadraticCurveTo(-bodyW / 2, bodyH / 2, -bodyW / 2, bodyH / 2 - cornerR);
    ctx.lineTo(-bodyW / 2, -bodyH / 2 + cornerR);
    ctx.quadraticCurveTo(-bodyW / 2, -bodyH / 2, -bodyW / 2 + cornerR, -bodyH / 2);
    ctx.closePath();
    ctx.fillStyle = b.color;
    ctx.fill();

    ctx.shadowBlur = 0;

    // Face plate
    const faceW = bodyW * 0.75;
    const faceH = bodyH * 0.5;
    ctx.beginPath();
    ctx.roundRect(-faceW / 2, -faceH / 2 - s * 0.02, faceW, faceH, s * 0.06);
    ctx.fillStyle = '#0a0a10';
    ctx.fill();

    // Eyes
    const eyeR = s * 0.06;
    const eyeY = -s * 0.04;
    for (let e = 0; e < 2; e++) {
      const ex = (e === 0 ? -1 : 1) * s * 0.1;
      ctx.beginPath();
      if (b.eyeOpen[e]) {
        ctx.arc(ex, eyeY, eyeR, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        // Pupil
        ctx.beginPath();
        ctx.arc(ex + mouseX * s * 0.015, eyeY + mouseY * s * 0.01, eyeR * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      } else {
        ctx.moveTo(ex - eyeR, eyeY);
        ctx.lineTo(ex + eyeR, eyeY);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = DPR;
        ctx.stroke();
      }
    }

    // Antenna
    ctx.beginPath();
    ctx.moveTo(0, -bodyH / 2);
    ctx.lineTo(0, -bodyH / 2 - s * 0.2);
    ctx.strokeStyle = b.color;
    ctx.lineWidth = DPR * 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -bodyH / 2 - s * 0.2, s * 0.04, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();

    // Legs
    ctx.fillStyle = b.color;
    ctx.fillRect(-bodyW * 0.25, bodyH / 2, s * 0.06, s * 0.12);
    ctx.fillRect(bodyW * 0.15, bodyH / 2, s * 0.06, s * 0.12);

    // Arms
    const armY = -s * 0.02;
    ctx.fillRect(-bodyW / 2 - s * 0.08, armY, s * 0.08, s * 0.04);
    ctx.fillRect(bodyW / 2, armY, s * 0.08, s * 0.04);

    // Speech bubble
    if (b.bubbleTimer > 0) {
      const bubbleAlpha = Math.min(1, b.bubbleTimer / 20, (180 - b.bubbleTimer + 20) / 20);
      ctx.globalAlpha = bubbleAlpha;
      ctx.font = `${Math.round(11 * DPR)}px "Space Grotesk", sans-serif`;
      const tw = ctx.measureText(b.bubbleText).width;
      const bx = -tw / 2 - 10 * DPR;
      const by = -bodyH / 2 - s * 0.35;
      const bw = tw + 20 * DPR;
      const bh = 24 * DPR;

      ctx.beginPath();
      ctx.roundRect(bx, by - bh, bw, bh, 8 * DPR);
      ctx.fillStyle = 'rgba(15,17,24,0.9)';
      ctx.fill();
      ctx.strokeStyle = b.color;
      ctx.lineWidth = DPR;
      ctx.stroke();

      ctx.fillStyle = '#e8e8ec';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b.bubbleText, 0, by - bh / 2);
      ctx.globalAlpha = 1;
    }

    ctx.restore();
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
  function mainLoop(time) {
    animateScene(time);
    updateRobots();
    requestAnimationFrame(mainLoop);
  }


  // ─── BOOT ──────────────────────────────────
  function boot() {
    renderApp();
    initScene();
    initRobots();
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
