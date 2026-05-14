import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initReveal();
        this.initStickyHeader();
        this.initCollectionsPanel();
    }

    /* ── Legacy Raed tab system (keep for compatibility) ── */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            });
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }

    /* ── Scroll-reveal (IntersectionObserver) ─────────────── */
    initReveal() {
        const targets = document.querySelectorAll('.js-mek-reveal, .js-mek-fadeup');
        if (!targets.length) return;

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        targets.forEach(el => io.observe(el));
    }

    /* ── Sticky header ────────────────────────────────────── */
    initStickyHeader() {
        const header = document.getElementById('mek-header');
        if (!header || window.header_is_sticky === 'false') return;

        const announcement = header.previousElementSibling;
        let annHeight = announcement ? announcement.offsetHeight : 0;
        let lastY = 0;
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                if (y > annHeight + 10) {
                    header.classList.add('is-sticky');
                } else {
                    header.classList.remove('is-sticky');
                }
                lastY = y;
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ── Collections hover panel (desktop) ───────────────── */
    initCollectionsPanel() {
        const panels = document.querySelectorAll('.mek-collections__panel-img');
        if (!panels.length) return;
        /* Alpine.js :class binding handles visibility — nothing needed here */
    }
}

/* ── Alpine.js data component for story timeline ─────────── */
document.addEventListener('alpine:init', () => {
    Alpine.data('mekStory', () => ({
        active: 0,
        touchStartX: 0,
        total: 5,

        prev() { if (this.active > 0) this.active--; },
        next() { if (this.active < this.total - 1) this.active++; },

        touchStart(e) { this.touchStartX = e.touches[0].clientX; },
        touchEnd(e) {
            const diff = this.touchStartX - e.changedTouches[0].clientX;
            if (diff > 50) this.next();
            else if (diff < -50) this.prev();
        },

        polaroidClass(i) {
            const off = Math.abs(i - this.active);
            return { 'pointer-events-none': off > 2 };
        },

        polaroidStyle(i, tilt) {
            const off = i - this.active;
            const absOff = Math.abs(off);
            if (absOff > 2) return 'opacity:0';
            const isMobile = window.innerWidth < 768;
            const x = off * (isMobile ? 130 : 210);
            const scale = 1 - absOff * 0.15;
            const rotate = off * 13 + parseFloat(tilt);
            const opacity = 1 - absOff * 0.36;
            const z = 10 - absOff;
            return `transform: translateX(${x}px) scale(${scale}) rotate(${rotate}deg); opacity:${opacity}; z-index:${z}`;
        },
    }));
});

Home.initiateWhenReady(['index']);
