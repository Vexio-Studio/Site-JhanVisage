"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  aboutParagraphs,
  heroContent,
  locationInfo,
  positioningPrinciples,
  processSteps,
  services,
  socialLinks,
  testimonials,
  transformationCases
} from "@/lib/site-content";
import { PremiumButton } from "@/components/ui/premium-button";

gsap.registerPlugin(ScrollTrigger);

function splitText(value: string) {
  return value.split(" ").map((word, index) => (
    <span className="hero-word" key={`${word}-${index}`}>
      {word}&nbsp;
    </span>
  ));
}

export function OnePageSite() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from("[data-hero-shade]", {
          opacity: 0,
          duration: 0.9
        })
        .from(
          ".hero-word",
          {
            yPercent: 120,
            opacity: 0,
            duration: 1.1,
            stagger: 0.04
          },
          "-=0.55"
        )
        .from(
          "[data-hero-sub]",
          { y: 20, opacity: 0, duration: 0.9 },
          "-=0.65"
        )
        .from(
          "[data-hero-cta]",
          { y: 28, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.55"
        )
        .from(
          "[data-hero-portrait]",
          {
            scale: 1.12,
            opacity: 0,
            filter: "blur(16px)",
            duration: 1.2
          },
          "-=1.05"
        );

      gsap.to("[data-parallax='bg']", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%"
          }
        });
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-transform-panel]");
        if (panels.length < 2) return;

        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "[data-transform-track]",
            pin: true,
            start: "center center",
            scrub: 1.2,
            end: `+=${window.innerWidth * (panels.length + 0.1)}`,
            snap: 1 / (panels.length - 1),
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-transform-panel]").forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 50,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 86%"
            }
          });
        });
      });

      gsap.fromTo(
        "[data-process-line]",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-process]",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      const cardListeners: Array<() => void> = [];
      gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((card) => {
        const inner = card.querySelector<HTMLElement>("[data-tilt-inner]");
        if (!inner) return;

        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          const rx = (py - 0.5) * -10;
          const ry = (px - 0.5) * 12;
          gsap.to(inner, {
            rotateX: rx,
            rotateY: ry,
            transformPerspective: 1000,
            duration: 0.55,
            ease: "power3.out"
          });
        };

        const onLeave = () => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power3.out"
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cardListeners.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => {
        cardListeners.forEach((dispose) => dispose());
        mm.revert();
      };
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="page-root">
      <header className="site-header">
        <a className="brand-mark" href="#hero">
          <span className="brand-main">Jhan Alves</span>
          <span className="brand-sub">Studio Visage</span>
        </a>
        <nav className="top-nav">
          <a href="#posicionamento">Posicionamento</a>
          <a href="#transformacoes">Transformações</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="hero" data-hero className="hero-section">
          <div className="hero-background" data-parallax="bg">
            <Image
              src="/images/studio-wide.jpeg"
              alt="Ambiente premium do Studio Visage"
              fill
              loading="eager"
              className="hero-bg-img"
            />
          </div>
          <div className="hero-shade" data-hero-shade />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{heroContent.eyebrow}</p>
              <h1>{splitText(heroContent.headline)}</h1>
              <p data-hero-sub>{heroContent.subheadline}</p>
              <div className="hero-cta-row">
                <div data-hero-cta>
                  <PremiumButton
                    href={heroContent.primaryCta.href}
                    label={heroContent.primaryCta.label}
                  />
                </div>
                <div data-hero-cta>
                  <PremiumButton
                    href={heroContent.secondaryCta.href}
                    label={heroContent.secondaryCta.label}
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
            <div className="hero-visual" data-hero-portrait>
              <div className="hero-portrait-mask">
                <Image
                  src="/images/jhan-portrait.png"
                  alt="Jhan Alves em retrato editorial"
                  fill
                  loading="eager"
                  className="hero-portrait-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="posicionamento" className="positioning-section section-shell">
          <div className="section-kicker" data-reveal>
            Posicionamento visual masculino
          </div>
          <h2 data-reveal>
            Imagem não é tendência. É coerência entre quem você é e como deseja ser
            percebido.
          </h2>
          <div className="principles-grid">
            {positioningPrinciples.map((item) => (
              <article key={item.title} className="glass-card" data-reveal>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="transformacoes" className="transformation-shell">
          <div className="section-shell transformation-head">
            <div className="section-kicker" data-reveal>
              Transformações
            </div>
            <h2 data-reveal>
              Evolução de imagem com foco em presença, confiança e autoridade.
            </h2>
          </div>
          <div className="transformation-track" data-transform-track>
            {transformationCases.map((item) => (
              <article
                key={item.id}
                className="transformation-panel"
                data-transform-panel
              >
                <div className="panel-images">
                  <div className="panel-image-wrap">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.title} - ${item.beforeLabel}`}
                      fill
                      loading="eager"
                      className="panel-image"
                    />
                    <span>{item.beforeLabel}</span>
                  </div>
                  <div className="panel-image-wrap">
                    <Image
                      src={item.afterImage}
                      alt={`${item.title} - ${item.afterLabel}`}
                      fill
                      loading="eager"
                      className="panel-image"
                    />
                    <span>{item.afterLabel}</span>
                  </div>
                </div>
                <div className="panel-copy">
                  <p className="panel-badge">{item.badge}</p>
                  <h3>{item.title}</h3>
                  <p>{item.narrative}</p>
                  <strong>{item.metric}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-shell">
          <div className="section-kicker" data-reveal>
            Sobre Jhan Alves
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <h2 data-reveal>
                Mais que execução técnica: direção de imagem com autoridade sutil e
                estratégia.
              </h2>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} data-reveal>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="about-visual" data-reveal>
              <Image
                src="/images/jhan-studio.jpeg"
                alt="Jhan Alves no Studio Visage"
                fill
                loading="eager"
                className="about-image"
              />
            </div>
          </div>
        </section>

        <section id="processo" className="process-section section-shell" data-process>
          <div className="section-kicker" data-reveal>
            Como funciona
          </div>
          <h2 data-reveal>
            Método claro para quem quer mudar a imagem sem perder autenticidade.
          </h2>
          <div className="process-timeline">
            <div className="process-line-base">
              <i data-process-line />
            </div>
            <div className="process-steps">
              {processSteps.map((step) => (
                <article key={step.title} className="process-step" data-reveal>
                  <span>{step.title}</span>
                  <p>{step.description}</p>
                  <small>{step.objection}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section section-shell">
          <div className="section-kicker" data-reveal>
            Serviços
          </div>
          <h2 data-reveal>
            Não é escolher um corte. É escolher como você será percebido.
          </h2>
          <div className="services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${service.featured ? "service-featured" : ""}`}
                data-tilt
                data-reveal
              >
                <div data-tilt-inner className="service-inner">
                  <p>{service.subtitle}</p>
                  <h3>{service.title}</h3>
                  <span>{service.description}</span>
                  <a href={service.ctaHref} target="_blank" rel="noreferrer">
                    {service.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section section-shell">
          <div className="section-kicker" data-reveal>
            Prova social
          </div>
          <h2 data-reveal>
            Resultados reais para homens que querem se apresentar com mais clareza.
          </h2>
          {testimonials.length === 0 ? (
            <div className="testimonial-placeholder glass-card" data-reveal>
              <h3>Depoimentos reais em atualização</h3>
              <p>
                A seção está preparada para receber relatos de clientes focados em
                transformação emocional, confiança e autoridade percebida.
              </p>
            </div>
          ) : (
            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <article key={item.quote} className="glass-card" data-reveal>
                  <p>{item.quote}</p>
                  <strong>{item.author}</strong>
                  <span>{item.context}</span>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="location-section section-shell" id="localizacao">
          <div className="section-kicker" data-reveal>
            Localização
          </div>
          <h2 data-reveal>Visite o Studio Visage e viva a experiência completa.</h2>
          <div className="location-grid">
            <div className="location-map-wrap" data-reveal>
              <iframe
                title="Mapa do Studio Visage"
                src={locationInfo.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-copy glass-card" data-reveal>
              <h3>{locationInfo.title}</h3>
              <p>{locationInfo.addressLine}</p>
              <span>{locationInfo.cityLine}</span>
              <div className="location-actions">
                <a href={locationInfo.googleMapsUrl} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
                <a href={locationInfo.wazeUrl} target="_blank" rel="noreferrer">
                  Abrir no Waze
                </a>
                <a href={locationInfo.uberUrl} target="_blank" rel="noreferrer">
                  Chamar Uber
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="contato" className="final-cta-section">
        <Image
          src="/images/studio-chairs.jpeg"
          alt="Interior do Studio Visage"
          fill
          loading="eager"
          className="final-bg"
        />
        <div className="final-shade" />
        <div className="final-copy section-shell">
          <h2>
            Se sua imagem ainda não representa quem você é, talvez esteja na hora de
            mudar isso.
          </h2>
          <p>
            Sua próxima versão começa pela forma como você se apresenta ao mundo.
          </p>
          <div className="hero-cta-row">
            <PremiumButton
              href={socialLinks.whatsapp}
              label="Quero minha consultoria"
            />
            <PremiumButton
              href={socialLinks.appointment}
              label="Agendar atendimento"
              variant="secondary"
            />
          </div>
          <div className="social-row">
            <a href={socialLinks.personalInstagram} target="_blank" rel="noreferrer">
              Instagram Jhan
            </a>
            <a href={socialLinks.studioInstagram} target="_blank" rel="noreferrer">
              Instagram Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
