/* eslint-disable */
// Ported from design/pouya-sadri-3.html — Strict Mode safe / Lenis-safe
export function initSiteMotion(gsap, ScrollTrigger, Lenis) {
const root = document.documentElement;
  const cleanups = [];
  const abort = new AbortController();
  const { signal } = abort;
  const on = (target, type, handler, options) => {
    target.addEventListener(type, handler, { ...(options || {}), signal });
  };
  const init = (sel, fn) => document.querySelectorAll(sel).forEach(el => {
    try {
      fn(el)
    } catch (e) {
      console.error(e)
    }
  });
  const cssVar = name => getComputedStyle(root).getPropertyValue(name).trim();
  const px = name => parseFloat(cssVar(name)) || 0;
  init('.site-header', header => {
    const btn = header.querySelector('.menu-btn');
    if (!btn) return;
    const set = open => {
      header.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false')
    };
    on(btn, 'click', () => set(!header.classList.contains('is-open')));
    header.querySelectorAll('.nav a').forEach(a => on(a, 'click', () => set(false)));
    on(document, 'keydown', e => {
      if (e.key === 'Escape') set(false)
    })
  });
  init('[data-accordion]', acc => {
    on(acc, 'click', e => {
      const btn = e.target.closest('[data-acc-btn]');
      if (!btn || !acc.contains(btn)) return;
      const item = btn.closest('[data-acc-item]');
      if (!item) return;
      const open = !item.classList.contains('is-open');
      acc.querySelectorAll('[data-acc-item].is-open').forEach(o => {
        if (o === item) return;
        o.classList.remove('is-open');
        const b = o.querySelector('[data-acc-btn]');
        if (b) b.setAttribute('aria-expanded', 'false')
      });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 650)
    })
  });
  init('.pricing', sec => {
    const sw = sec.querySelector('[data-switch]');
    if (!sw) return;
    on(sw, 'click', e => {
      const btn = e.target.closest('[data-mode]');
      if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
      const mode = btn.dataset.mode;
      sw.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      const swapped = [];
      sec.querySelectorAll('[data-' + mode + ']').forEach(el => {
        if (el.dataset[mode] != null) {
          el.textContent = el.dataset[mode];
          swapped.push(el)
        }
      });
      if (gsap && root.classList.contains('motion') && swapped.length) gsap.fromTo(swapped, {
        yPercent: 60,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.03
      })
    })
  });
  init('form[data-sent]', form => {
    const status = form.querySelector('.form-status');
    on(form, 'submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return
      }
      if (status) status.textContent = form.dataset.sent || '';
      form.reset()
    })
  });
  const num = t => parseFloat(String(t || '').replace(/[^0-9.,-]/g, '').replace(',', '.')) || 0;
  init('[data-chart="ring"]', tile => {
    const fg = tile.querySelector('.ring-fg');
    const label = tile.querySelector('.ring-num');
    if (!fg) return;
    const v = Math.max(0, Math.min(100, num(label ? label.textContent : tile.dataset.value)));
    tile.dataset.ring = v;
    fg.style.strokeDashoffset = String(100 - v)
  });
  init('[data-chart="bars"]', list => {
    const items = [...list.children];
    const vals = items.map(li => num((li.querySelector('.bar-val') || li).textContent));
    const max = Math.max(...vals, 0) || 1;
    items.forEach((li, i) => li.style.setProperty('--h', (vals[i] / max).toFixed(3)))
  });
  let lenis = null;
  let lenisTicker = null;
  const matchMedias = [];
  const cleanupUi = () => {
    abort.abort();
    matchMedias.forEach(mm => {
      try { mm.revert(); } catch (_) {}
    });
    if (lenisTicker) {
      gsap.ticker.remove(lenisTicker);
      lenisTicker = null;
    }
    if (lenis) {
      try { lenis.destroy(); } catch (_) {}
      lenis = null;
    }
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.killTweensOf('*');
  };
if (!root.classList.contains('motion') || !gsap || !ScrollTrigger) return cleanupUi;
ScrollTrigger.getAll().forEach(t => t.kill());
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,resize'
});
if (Lenis) {
    try {
        lenis = new Lenis({
            lerp: 0.11,
            autoRaf: true
        });
        lenis.on('scroll', ScrollTrigger.update);
    } catch (err) {
        console.error('[site-motion] Lenis failed', err);
        lenis = null;
    }
}
document.querySelectorAll('a[href^="#"]').forEach(a => on(a, 'click', e => {
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    let target = null;
    try {
        target = document.querySelector(id)
    } catch (err) {
        return
    }
    if (!target) return;
    e.preventDefault();
    const header = document.querySelector('.site-header');
    const off = header ? header.offsetHeight : 0;
    if (lenis) lenis.scrollTo(target, {
        offset: -off,
        duration: 1.4
    });
    else target.scrollIntoView({
        behavior: 'smooth'
    })
}));
const docPos = el => {
    let x = 0,
        y = 0;
    for (let n = el; n; n = n.offsetParent) {
        x += n.offsetLeft;
        y += n.offsetTop
    }
    return {
        x,
        y
    }
};
const splitWords = (el, cls = 'w') => {
    const out = [];
    const walk = node => {
        [...node.childNodes].forEach(n => {
            if (n.nodeType === 3) {
                const frag = document.createDocumentFragment();
                n.textContent.split(/(\s+)/).forEach(part => {
                    if (!part) return;
                    if (/^\s+$/.test(part)) {
                        frag.appendChild(document.createTextNode(part));
                        return
                    }
                    const s = document.createElement('span');
                    s.className = cls;
                    s.textContent = part;
                    frag.appendChild(s);
                    out.push(s)
                });
                n.replaceWith(frag)
            } else if (n.nodeType === 1 && !n.classList.contains('stop')) walk(n)
        })
    };
    walk(el);
    return out
};
const addStop = title => {
    if (!title || !title.classList.contains('dot')) return null;
    let st = title.querySelector('.stop');
    if (!st) {
        st = document.createElement('span');
        st.className = 'stop';
        st.setAttribute('aria-hidden', 'true');
        title.appendChild(st)
    }
    title.classList.add('has-stop');
    return st
};
const splitChars = el => {
    const chars = [];
    splitWords(el, 'wd').forEach(w => {
        const t = w.textContent;
        w.textContent = '';
        [...t].forEach(c => {
            const s = document.createElement('span');
            s.className = 'ch';
            s.textContent = c;
            w.appendChild(s);
            chars.push(s)
        })
    });
    return chars
};
const headerH = () => {
    const h = document.querySelector('.site-header');
    return h ? h.offsetHeight : 0
};
const relPos = (el, anc) => {
    let x = 0,
        y = 0;
    for (let n = el; n && n !== anc; n = n.offsetParent) {
        x += n.offsetLeft;
        y += n.offsetTop
    }
    return {
        x,
        y
    }
};
const fx = [];
const add = (sel, run, prep) => fx.push({
    sel,
    run,
    prep
});
add('.hero', hero => {
    const frame = hero.querySelector('.hero-frame');
    const photo = hero.querySelector('.hero-photo');
    const bottom = hero.querySelector('.hero-bottom');
    const studio = hero.querySelector('.hero-studio');
    const wm = hero.querySelector('[data-flight-from]');
    const logo = document.querySelector('[data-flight-to]');
    const dist = () => Math.round(Math.min(window.innerHeight * 0.72, 600));
    const tl = gsap.timeline({
        defaults: {
            ease: 'none'
        },
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: () => '+=' + dist(),
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    if (frame) tl.fromTo(frame, {
        clipPath: () => `inset(0% 0% 0% 0% round ${px('--r-xl')}px)`
    }, {
        clipPath: () => `inset(5% 3.5% 0% 3.5% round ${px('--r-xl')*1.8}px)`,
        duration: 1
    }, 0);
    if (photo) tl.fromTo(photo, {
        scale: 1.12
    }, {
        scale: 1,
        duration: 1
    }, 0);
    if (bottom) tl.to(bottom, {
        y: () => -window.innerHeight * 0.1,
        duration: 1
    }, 0);
    if (studio) tl.to(studio, {
        opacity: 0,
        y: -30,
        duration: 0.4
    }, 0);
    if (wm && logo) {
        const geo = () => {
            const r = logo.getBoundingClientRect();
            const p = docPos(wm);
            const start = docPos(hero).y;
            const s = parseFloat(getComputedStyle(logo).fontSize) / parseFloat(getComputedStyle(wm).fontSize);
            return {
                x: r.left - p.x,
                y: r.top + start + dist() - p.y,
                s
            }
        };
        tl.to(wm, {
            x: () => geo().x,
            y: () => geo().y,
            scale: () => geo().s,
            duration: 1
        }, 0).to(wm, {
            color: () => cssVar('--ink'),
            duration: 0.3
        }, 0.62).to(logo, {
            opacity: 1,
            duration: 0.02
        }, 0.98).to(wm, {
            opacity: 0,
            duration: 0.02
        }, 0.98)
    }
});
add('.work-grid', grid => {
    const mm = gsap.matchMedia();
    matchMedias.push(mm);
    mm.add('(min-width: 761px)', () => {
        const w = grid.clientWidth;
        [...grid.children].forEach(item => {
            if (item.offsetWidth > w * 0.7 || item.offsetLeft < w * 0.4) return;
            gsap.fromTo(item, {
                y: 90
            }, {
                y: -90,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
        })
    })
});
add('.services', (sec, d) => {
    const {
        track,
        stage,
        dark,
        dot,
        dotCopy
    } = d;
    const geo = () => {
        const w = stage.offsetWidth,
            h = stage.offsetHeight;
        if (!dot) return {
            x: w / 2,
            y: h / 2,
            r0: 0,
            r1: Math.hypot(w, h) / 2 + 2
        };
        const p = relPos(dot, stage);
        const x = p.x + dot.offsetWidth / 2,
            y = p.y + dot.offsetHeight / 2;
        const r1 = Math.max(Math.hypot(x, y), Math.hypot(w - x, y), Math.hypot(x, h - y), Math.hypot(w - x, h - y)) + 2;
        return {
            x,
            y,
            r0: dot.offsetWidth / 2,
            r1
        }
    };
    const circle = k => () => {
        const g = geo();
        return `circle(${(k?g.r1:g.r0).toFixed(1)}px at ${g.x.toFixed(1)}px ${g.y.toFixed(1)}px)`
    };
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: track,
            start: () => 'top ' + headerH(),
            end: () => 'bottom bottom-=' + px('--frame'),
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    tl.fromTo(dark, {
        clipPath: circle(0)
    }, {
        clipPath: circle(1),
        ease: 'power2.in',
        duration: 1
    }, 0);
    if (dotCopy) tl.fromTo(dotCopy, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 0.15
    }, 0.75);
    tl.to({}, {
        duration: 0.25
    })
}, sec => {
    const track = sec.querySelector('.svc-track');
    const stage = sec.querySelector('[data-flood]');
    const light = stage && stage.querySelector('.svc-light');
    const dark = stage && stage.querySelector('.svc-dark');
    if (!track || !light || !dark) return null;
    if (!stage.dataset.motionPrepped) {
        addStop(light.querySelector('.dot'));
        dark.textContent = '';
        [...light.children].forEach(c => dark.appendChild(c.cloneNode(true)));
        stage.dataset.motionPrepped = '1';
    } else {
        addStop(light.querySelector('.dot'));
    }
    return {
        track,
        stage,
        dark,
        dot: light.querySelector('.stop'),
        dotCopy: dark.querySelector('.stop')
    }
});
add('.process', (sec, d) => {
    const {
        track,
        split,
        title,
        fig,
        a,
        b,
        over
    } = d;
    const img = fig.querySelector('img');
    const cap = fig.querySelector('figcaption');
    const pad = () => parseFloat(getComputedStyle(title).paddingLeft) || 0;
    const shiftA = () => -(relPos(a, split).x - pad());
    const shiftB = () => split.clientWidth - pad() - (relPos(b, split).x + b.offsetWidth);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: track,
            start: () => 'top ' + headerH(),
            end: () => 'bottom bottom-=' + px('--frame'),
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    const r = px('--r-xl');
    tl.fromTo(fig, {
        clipPath: 'inset(34% 49% 34% 49% round 14px)'
    }, {
        clipPath: `inset(0% 0% 0% 0% round ${r}px)`,
        ease: 'power2.inOut',
        duration: 1
    }, 0).fromTo([a, over.querySelector('.half-a')], {
        x: 0
    }, {
        x: shiftA,
        ease: 'power2.inOut',
        duration: 0.9
    }, 0).fromTo([b, over.querySelector('.half-b')], {
        x: 0
    }, {
        x: shiftB,
        ease: 'power2.inOut',
        duration: 0.9
    }, 0);
    if (img) tl.fromTo(img, {
        scale: 1.35
    }, {
        scale: 1,
        ease: 'power2.out',
        duration: 1
    }, 0);
    if (cap) tl.fromTo(cap, {
        opacity: 0,
        y: 24
    }, {
        opacity: 1,
        y: 0,
        duration: 0.2
    }, 0.85);
    tl.to({}, {
        duration: 0.15
    })
}, sec => {
    const track = sec.querySelector('.split-track');
    const split = sec.querySelector('[data-split]');
    const title = split && split.querySelector('.split-title');
    const fig = split && split.querySelector('.split-photo');
    if (!track || !title || !fig) return null;
    if (split.dataset.motionPrepped) {
        const a = title.querySelector('.half-a');
        const b = title.querySelector('.half-b');
        const over = fig.querySelector('.split-over');
        if (!a || !b || !over) return null;
        return { track, split, title, fig, a, b, over };
    }
    addStop(title);
    const words = splitWords(title);
    if (!words.length) return null;
    const cut = Math.ceil(words.length / 2);
    const a = document.createElement('span'),
        b = document.createElement('span');
    a.className = 'half half-a';
    b.className = 'half half-b';
    let seen = 0,
        gap = null;
    [...title.childNodes].forEach(n => {
        if (n.nodeType === 1 && n.classList.contains('w')) {
            seen++;
            (seen > cut ? b : a).appendChild(n)
        } else if (n.nodeType === 3 && seen === cut && !gap) gap = n;
        else (seen > cut ? b : a).appendChild(n)
    });
    title.textContent = '';
    title.append(a, gap || document.createTextNode(' '), b);
    const over = document.createElement('div');
    over.className = 'split-over';
    over.setAttribute('aria-hidden', 'true');
    over.appendChild(title.cloneNode(true));
    fig.insertBefore(over, fig.querySelector('figcaption'));
    split.dataset.motionPrepped = '1';
    return {
        track,
        split,
        title,
        fig,
        a,
        b,
        over
    }
});
add('.steps-track', track => {
    const line = track.querySelector('.steps-line');
    const steps = [...track.querySelectorAll('.step')];
    if (!line) return;
    const mm = gsap.matchMedia();
    matchMedias.push(mm);
    mm.add({
        wide: '(min-width: 761px)',
        narrow: '(max-width: 760px)'
    }, ctx => {
        const v = ctx.conditions.narrow;
        const prop = v ? 'scaleY' : 'scaleX';
        let marks = [];
        const measure = () => {
            marks = steps.map(s => v ? s.offsetTop / Math.max(1, track.offsetHeight) : s.offsetLeft / Math.max(1, track.offsetWidth))
        };
        const paint = p => steps.forEach((s, i) => {
            const on = p >= marks[i] + 0.004;
            if (s.classList.contains('is-on') !== on) s.classList.toggle('is-on', on)
        });
        gsap.fromTo(line, {
            [prop]: 0
        }, {
            [prop]: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: track,
                start: 'top 78%',
                end: v ? 'bottom 55%' : 'top 30%',
                scrub: true,
                onRefresh: self => {
                    measure();
                    paint(self.progress)
                },
                onUpdate: self => paint(self.progress)
            }
        });
        return () => steps.forEach(s => s.classList.remove('is-on'))
    })
});
add('[data-marquee]', (box, track) => {
    const tween = gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        repeat: -1,
        duration: Math.max(20, track.scrollWidth / 2 / 38),
        paused: true
    });
    let hover = false,
        seen = false;
    const sync = () => hover || !seen ? tween.pause() : tween.play();
    on(box, 'mouseenter', () => {
        hover = true;
        sync()
    });
    on(box, 'mouseleave', () => {
        hover = false;
        sync()
    });
    on(box, 'focusin', () => {
        hover = true;
        sync()
    });
    on(box, 'focusout', () => {
        hover = false;
        sync()
    });
    ScrollTrigger.create({
        trigger: box,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: s => {
            seen = s.isActive;
            sync()
        }
    })
}, box => {
    const track = box.querySelector('.marquee-track');
    if (!track || !track.children.length) return null;
    if (!box.dataset.motionPrepped) {
        [...track.children].forEach(li => {
            const c = li.cloneNode(true);
            c.setAttribute('aria-hidden', 'true');
            c.querySelectorAll('a,button').forEach(el => el.setAttribute('tabindex', '-1'));
            track.appendChild(c)
        });
        box.dataset.motionPrepped = '1';
    }
    return track
});
add('[data-chart="ring"]', tile => {
    const fg = tile.querySelector('.ring-fg');
    if (!fg) return;
    const v = parseFloat(tile.dataset.ring) || 0;
    gsap.fromTo(fg, {
        strokeDashoffset: 100
    }, {
        strokeDashoffset: 100 - v,
        duration: 1.8,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: tile,
            start: 'top 85%'
        }
    })
});
add('[data-chart="bars"]', list => {
    const bars = list.querySelectorAll('.bar');
    if (!bars.length) return;
    gsap.fromTo(bars, {
        scaleY: 0
    }, {
        scaleY: 1,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
            trigger: list,
            start: 'top 88%'
        }
    })
});
add('[data-unfold]', box => {
    const cards = [...box.children];
    if (!cards.length) return;
    gsap.set(cards, {
        transformOrigin: '50% 0%'
    });
    gsap.fromTo(cards, {
        rotationX: -24,
        y: 80,
        opacity: 0
    }, {
        rotationX: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
        clearProps: 'transform',
        scrollTrigger: {
            trigger: box,
            start: 'top 82%'
        }
    })
});
add('[data-fan]', list => {
    const cards = [...list.children];
    if (cards.length < 2) return;
    const dx = el => list.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2);
    const dy = el => list.offsetHeight / 2 - (el.offsetTop + el.offsetHeight / 2);
    gsap.fromTo(cards, {
        x: (i, el) => dx(el) * 0.92,
        y: (i, el) => dy(el) * 0.92 + 40,
        rotation: (i, el) => {
            const d = dx(el);
            return d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(10, Math.abs(d) / list.clientWidth * 22)
        }
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        ease: 'power2.out',
        stagger: 0.04,
        scrollTrigger: {
            trigger: list,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 0.6,
            invalidateOnRefresh: true
        }
    })
});
add('[data-draw]', list => {
    const rows = [...list.children];
    if (!rows.length) return;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: list,
            start: 'top 80%'
        }
    });
    tl.fromTo(rows, {
        '--draw': 0
    }, {
        '--draw': 1,
        duration: 1.1,
        ease: 'power3.inOut',
        stagger: 0.09
    }, 0).fromTo(rows.map(r => [...r.children]).flat(), {
        y: 22,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.02
    }, 0.15)
});
add('[data-loops]', sec => {
    ScrollTrigger.create({
        trigger: sec,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: s => sec.classList.toggle('is-off', !s.isActive)
    })
});
add('[data-clip]', list => {
    const rows = [...list.children];
    if (!rows.length) return;
    gsap.fromTo(rows, {
        clipPath: 'inset(0% 100% 0% 0%)'
    }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.1,
        clearProps: 'clipPath',
        scrollTrigger: {
            trigger: list,
            start: 'top 82%'
        }
    })
});
add('[data-inner]', frame => {
    const img = frame.querySelector('img');
    if (!img) return;
    gsap.fromTo(img, {
        yPercent: -7
    }, {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })
});
add('.foot-mark-wrap', w => {
    const m = w.querySelector('.foot-mark');
    if (!m) return;
    gsap.fromTo(m, {
        yPercent: 55
    }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: w,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
        }
    })
});
add('[data-mask]', el => {
    const img = el.querySelector('img');
    const r = px('--r-md');
    const tl = gsap.timeline({
        defaults: {
            ease: 'none'
        },
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom 30%',
            scrub: true
        }
    });
    tl.fromTo(el, {
        clipPath: `inset(14% 9% 14% 9% round ${r}px)`
    }, {
        clipPath: `inset(0% 0% 0% 0% round ${r}px)`,
        duration: 0.55
    }, 0);
    if (img) tl.fromTo(img, {
        scale: 1.28
    }, {
        scale: 1,
        duration: 1
    }, 0)
});
add('[data-ink]', (el, words) => {
    gsap.fromTo(words, {
        opacity: 0.16
    }, {
        opacity: 1,
        ease: 'none',
        stagger: 0.12,
        scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            end: 'bottom 50%',
            scrub: true
        }
    })
}, el => {
    if (el.dataset.motionPrepped) {
        const w = [...el.querySelectorAll('.w')];
        return w.length ? w : null;
    }
    const w = splitWords(el);
    if (w.length) el.dataset.motionPrepped = '1';
    return w.length ? w : null
});
const speedGroups = new Set;
add('[data-speed]', el => {
    const group = el.parentElement;
    if (!group || speedGroups.has(group)) return;
    speedGroups.add(group);
    const items = [...group.children].filter(c => parseFloat(c.dataset.speed));
    if (!items.length) return;
    const k = c => () => parseFloat(c.dataset.speed) * window.innerHeight * (window.innerWidth < 761 ? 0.35 : 1);
    const tl = gsap.timeline({
        defaults: {
            ease: 'none'
        },
        scrollTrigger: {
            trigger: group,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    items.forEach(c => {
        const f = k(c);
        tl.fromTo(c, {
            y: f
        }, {
            y: () => -f(),
            duration: 1
        }, 0)
    })
});
add('[data-rise]', (el, chars) => {
    gsap.fromTo(chars, {
        yPercent: 130
    }, {
        yPercent: 0,
        ease: 'power3.out',
        duration: 1.1,
        stagger: 0.045,
        scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
        }
    })
}, el => {
    if (el.dataset.motionPrepped) {
        const chars = [...el.querySelectorAll('.ch, .stop')];
        return chars.length ? chars : null;
    }
    const chars = splitChars(el);
    if (!chars.length) return null;
    const st = addStop(el);
    if (st) {
        const w = document.createElement('span');
        w.className = 'wd';
        st.replaceWith(w);
        w.appendChild(st);
        chars.push(st)
    }
    el.classList.add('is-split');
    el.dataset.motionPrepped = '1';
    return chars
});
const start = () => {
    const jobs = [];
    document.querySelectorAll(fx.map(f => f.sel).join(',')).forEach(el => fx.forEach(f => {
        if (!el.matches(f.sel)) return;
        let data;
        if (f.prep) {
            try {
                data = f.prep(el)
            } catch (e) {
                console.error(e);
                return
            }
            if (data == null) return
        }
        jobs.push(() => {
            try {
                f.run(el, data)
            } catch (e) {
                console.error(e)
            }
        })
    }));
    const ch = new MessageChannel;
    const next = () => {
        const t0 = performance.now();
        do {
            const j = jobs.shift();
            if (j) j()
        } while (jobs.length && performance.now() - t0 < 8);
        if (jobs.length) ch.port2.postMessage(0)
    };
    ch.port1.onmessage = next;
    ch.port2.postMessage(0)
};
start();
  cleanups.push(cleanupUi);
  return cleanupUi;
}
