import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Marq2 from '@/components/common/Marq2';

export const metadata = {
  title: 'ROFF Studio - Preguntas Frecuentes',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function PageFAQ() {
  return (
    <body className="home-personal">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <header className="page-header section-padding pb-0">
              <div className="container mt-80">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="caption">
                      <h1>Preguntas Frecuentes</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* FAQ Section */}
            <section className="section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="faq-accordion">
                      <div className="accordion-item mb-20">
                        <div className="title">
                          <h6 className="fz-18">¿Qué servicios ofrece ROFF Studio?</h6>
                          <span className="icon"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Ofrecemos una amplia gama de servicios digitales que incluyen diseño UI/UX, desarrollo web, estrategia de marca, 
                            marketing digital, SEO, diseño de producto, y dirección de arte. Somos una firma full-stack 
                            que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item mb-20">
                        <div className="title">
                          <h6 className="fz-18">¿Cómo es el proceso de trabajo con ROFF Studio?</h6>
                          <span className="icon"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Nuestro proceso comienza con una reunión inicial para comprender tus necesidades y objetivos. 
                            Luego pasamos a la fase de investigación y planificación, seguida por diseño, desarrollo, pruebas e implementación. 
                            Mantenemos una comunicación constante durante todo el proyecto y ofrecemos soporte posterior al lanzamiento.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item mb-20">
                        <div className="title">
                          <h6 className="fz-18">¿Cuánto tiempo toma completar un proyecto?</h6>
                          <span className="icon"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            El tiempo de desarrollo varía según la complejidad y alcance del proyecto. Un sitio web básico puede estar 
                            listo en 2-4 semanas, mientras que proyectos más complejos pueden tomar varios meses. En nuestra primera 
                            reunión, te proporcionaremos un cronograma detallado según tus necesidades específicas.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item mb-20">
                        <div className="title">
                          <h6 className="fz-18">¿Trabajáis con clientes internacionales?</h6>
                          <span className="icon"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Sí, trabajamos con clientes de todo el mundo. Nuestra ubicación en Santiago de Chile nos permite colaborar 
                            con empresas en diferentes zonas horarias. Utilizamos herramientas de comunicación y gestión de proyectos 
                            para garantizar una colaboración eficiente independientemente de la ubicación geográfica.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item mb-20">
                        <div className="title">
                          <h6 className="fz-18">¿Cómo puedo solicitar un presupuesto?</h6>
                          <span className="icon"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Puedes contactarnos a través de nuestro formulario de contacto, por correo electrónico a Contacto@roffstudio.com, 
                            o visitando nuestra oficina en Los Militares, Las Condes, Santiago de Chile. Te responderemos en un plazo de 24-48 horas 
                            con información sobre los siguientes pasos y la posibilidad de agendar una reunión inicial sin compromiso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="side-bar">
                      <div className="box-info mb-30">
                        <h6 className="mb-10">¿Tienes más preguntas?</h6>
                        <p>No dudes en contactarnos directamente para resolver cualquier duda específica sobre nuestros servicios.</p>
                        <a href="/page-contact" className="butn-dashed mt-30">
                          <span>Contactar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
