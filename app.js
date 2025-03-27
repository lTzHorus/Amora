import { gsap } from 'gsap';
import { ScrollTrigger } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
import { config } from './config.js';

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Suave scroll para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animações de entrada
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: config.animation.heroEntrance,
        ease: 'power3.out'
    });
    
    // Animar o título da seção cardapios
    gsap.from('.cardapios h2', {
        scrollTrigger: {
            trigger: '.cardapios',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Animar os itens do cardápio com stagger
    gsap.from('.cardapio-grid .cardapio-item', {
        scrollTrigger: {
            trigger: '.cardapio-grid',
            start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: config.animation.menuItems,
        stagger: config.animation.menuItemsStagger,
        ease: 'power3.out'
    });
    
    // Animar navbar ao scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = `rgba(93, 63, 106, 0.95)`;
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'var(--color-primary)';
            header.style.padding = '20px 0';
        }
    });
});