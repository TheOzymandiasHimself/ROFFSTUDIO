'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Nuestro Portafolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trabajos <span className="fw-200">Seleccionados.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver Todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Diseño Web
                      </a>
                    </div>
                    <h4>App Móvil Cutter</h4>
                  </div>
                  <div>
                    <p>
                      Somos una firma full-stack que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalles <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Diseño Web
                      </a>
                    </div>
                    <h4>App Móvil Cutter</h4>
                  </div>
                  <div>
                    <p>
                      Somos una firma full-stack que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalles <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Diseño Web
                      </a>
                    </div>
                    <h4>App Móvil Cutter</h4>
                  </div>
                  <div>
                    <p>
                      Somos una firma full-stack que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalles <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Diseño Web
                      </a>
                    </div>
                    <h4>App Móvil Cutter</h4>
                  </div>
                  <div>
                    <p>
                      Somos una firma full-stack que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalles <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Diseño Web
                      </a>
                    </div>
                    <h4>App Móvil Cutter</h4>
                  </div>
                  <div>
                    <p>
                      Somos una firma full-stack que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalles <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            <a href="https://wa.me/+56962655233" target="_blank" rel="noopener noreferrer">
              <span style={{ color: '#ffffff' }}>Así es como te</span>
              <span style={{ margin: '0 2px' }}> </span>
              <span style={{ color: '#aaaaaa' }}>posicionamos digitalmente</span>
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
