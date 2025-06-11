import React from 'react';
import Image from 'next/image';

function Services() {
  // Estilos CSS en línea para mantener la responsividad
  const styles = {
    serviceFeatures: {
      listStyleType: 'none',
      padding: 0,
      margin: '15px 0',
    },
    serviceFeaturesItem: {
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '8px',
      fontSize: '14px',
    },
    serviceFeaturesDot: {
      content: '"•"',
      color: 'var(--main-color)',
      fontWeight: 'bold',
      position: 'absolute',
      left: '0',
    },
    priceOptions: {
      margin: '10px 0',
    },
    priceOption: {
      fontSize: '13px',
      margin: '3px 0',
      display: 'flex',
      justifyContent: 'space-between',
    },
    priceOptionSpan: {
      fontWeight: '600',
    },
  };
  // Componente para los elementos de la lista con estilos inline
  const ServiceFeatureItem = ({ text }) => (
    <li style={styles.serviceFeaturesItem}>
      <span style={styles.serviceFeaturesDot}>•</span> {text}
    </li>
  );

  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center flex-wrap">
            <div className="mb-4 mb-md-0">
              <span className="sub-title main-color mb-5">Precios Introductorios · Desde sept. 2024</span>
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
          <p className="mt-3">Como nuevo estudio, ofrecemos tarifas especiales de lanzamiento por tiempo limitado.</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-30">
                <Image src="/assets/imgs/serv-icons/3.png" alt="icono UI/UX" width={60} height={60} />
              </div>
              <h5>Diseño UI/UX</h5>
              <div className="text mt-30">
                <div className="mb-10">
                  <span className="tag">UI/UX</span>
                  <span className="tag">Desarrollo</span>
                </div>
                <p>
                  Creamos experiencias digitales que definen la identidad visual de tu marca. Nuestro diseño UI/UX combina estética atractiva y funcionalidad intuitiva para conectar con tus usuarios.                 
                </p>
                <ul className="service-features">
                  <li>Análisis de la experiencia de usuario</li>
                  <li>Wireframes y prototipos interactivos</li>
                  <li>Diseño de interfaces modernas</li>
                </ul>
                <div className="price-tag mb-20">
                  <span className="price">Desde $75.000</span>
                  <span className="label">Por página</span>
                </div>
              </div>
              <a href="/page-contact" className="butn butn-sm butn-bord radius-30">
                <span className="text">Cotizar Proyecto</span>
              </a>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-30">
                <Image src="/assets/imgs/serv-icons/4.png" alt="icono Desarrollo" width={60} height={60} />
              </div>
              <h5>Desarrollo Web Profesional</h5>
              <div className="text mt-30">
                <div className="mb-10">
                  <span className="tag">React</span>
                  <span className="tag">NextJS</span>
                  <span className="tag">WordPress</span>
                </div>
                <p>
                  Desarrollo web a medida con las tecnologías más modernas. Creamos sitios web rápidos, seguros y optimizados para buscadores que impulsan tu negocio.
                </p>
                <ul className="service-features">
                  <li>Sitios web responsivos y modernos</li>
                  <li>Tiendas online con WooCommerce/Shopify</li>
                  <li>Aplicaciones web a medida (SaaS)</li>
                </ul>
                <div className="price-tag mb-10">
                  <span className="price">Planes Web</span>
                </div>
                <div className="price-options">
                  <div className="price-option"><span>Landing:</span> $150.000</div>
                  <div className="price-option"><span>Corporativa:</span> $300.000</div>
                  <div className="price-option"><span>E-commerce:</span> $450.000</div>
                </div>
              </div>
              <a href="/page-contact" className="butn butn-sm butn-bord radius-30 mt-3">
                <span className="text">Cotizar Proyecto</span>
              </a>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-30">
                <Image src="/assets/imgs/serv-icons/5.png" alt="icono SEO" width={60} height={60} />
              </div>
              <h5>SEO / Marketing</h5>
              <div className="text mt-30">
                <div className="mb-10">
                  <span className="tag">SEO</span>
                  <span className="tag">SEM</span>
                  <span className="tag">Analytics</span>
                </div>
                <p>
                  Potenciamos tu visibilidad online mediante estrategias SEO/Marketing basadas en datos que generan tráfico cualificado y conversiones.
                </p>
                <ul className="service-features">
                  <li>Optimización para motores de búsqueda</li>
                  <li>Campañas de Google Ads</li>
                  <li>Análisis de rendimiento y métricas</li>
                </ul>
                <div className="price-tag mb-20">
                  <span className="price">Desde $85.000</span>
                  <span className="label">Mensual</span>
                </div>
              </div>
              <a href="/page-contact" className="butn butn-sm butn-bord radius-30">
                <span className="text">Cotizar Proyecto</span>
              </a>
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

// Estilos CSS globales usando un enfoque diferente para las listas
const additionalStyles = `
  .service-features {
    list-style-type: none;
    padding: 0;
    margin: 15px 0;
  }
  .service-features li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .service-features li::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 8px;
    width: 4px;
    height: 4px;
    background-color: var(--main-color);
    border-radius: 50%;
  }
  .price-options {
    margin: 10px 0;
  }
  .price-option {
    font-size: 13px;
    margin: 3px 0;
    display: flex;
    justify-content: space-between;
  }
  .price-option span {
    font-weight: 600;
  }
  /* Asegurar espaciado adecuado entre las etiquetas (tags) */
  .services-clas .item .tag {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 6px;
  }
  /* Botón Cotizar Proyecto debe ocupar todo el ancho y estar resaltado */
  .services-clas .item .butn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-weight: 600;
    background: var(--main-color);
    color: #fff !important;
    border: none;
    margin-top: 15px;
  }
  .services-clas .item .butn .text {
    color: inherit !important;
  }
  /* Mostrar el precio y etiqueta en líneas separadas */
  .price-tag .price,
  .price-tag .label {
    display: block;
    line-height: 1.3;
  }
  @media (max-width: 767px) {
    .price-options {
      margin: 5px 0;
    }
    .price-option {
      font-size: 12px;
    }
    .service-features li {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }
`;

// Inyectar estilos al documento si estamos en el cliente
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = additionalStyles;
  document.head.appendChild(styleTag);
}
