import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Nuestra Especialidad</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Servicios <span className="fw-200">Destacados.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver Todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Diseño UI/UX</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">UI/UX</span>
                  <span className="tag">Desarrollo</span>
                </div>
                <p>
                  Creamos experiencias digitales que definen la identidad visual de tu marca. Nuestro diseño UI/UX combina estética atractiva y funcionalidad intuitiva para conectar con tus usuarios de forma significativa.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Estrategia de Marca</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Branding</span>
                  <span className="tag">Estrategia</span>
                </div>
                <p>
                  Desarrollamos estrategias de marca sólidas que destacan los beneficios de tus productos o servicios. Comunicamos tu propuesta de valor de forma clara y persuasiva para atraer a tu audiencia objetivo.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>SEO / Marketing</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">SEO</span>
                  <span className="tag">Marketing</span>
                </div>
                <p>
                  Potenciamos tu visibilidad online combinando optimización técnica de código con análisis heurístico. Implementamos estrategias SEO/Marketing basadas en datos que generan tráfico cualificado y conversiones.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
