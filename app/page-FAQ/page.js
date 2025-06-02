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

            {/* FAQ Section - Nuevo diseño estético */}
            <section className="section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="faq-modern" style={{marginBottom: "70px"}}>
                      <div className="faq-item" style={{background: "linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)", borderRadius: "15px", padding: "30px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)"}}>
                        <div className="faq-question">
                          <div className="d-flex align-items-center">
                            <span style={{color: "#FFD700", marginRight: "15px", fontSize: "24px"}}><i className="fas fa-star"></i></span>
                            <h5 style={{margin: 0, color: "#ffffff", fontWeight: 600, fontSize: "22px"}}>¿Qué servicios ofrece ROFF Studio?</h5>
                          </div>
                        </div>
                        <div className="faq-answer" style={{marginTop: "20px", paddingLeft: "40px", borderLeft: "2px solid rgba(255,215,0,0.3)"}}>
                          <p style={{color: "#e6e6e6", lineHeight: 1.8, fontSize: "16px"}}>
                            Ofrecemos una amplia gama de servicios digitales que incluyen diseño UI/UX, desarrollo web, estrategia de marca, 
                            marketing digital, SEO, diseño de producto, y dirección de arte. Somos una firma full-stack 
                            que puede ayudarte desde la estrategia hasta el lanzamiento, y en cualquier punto intermedio.
                          </p>
                        </div>
                      </div>
                      
                      <div className="faq-item" style={{background: "linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)", borderRadius: "15px", padding: "30px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)"}}>
                        <div className="faq-question">
                          <div className="d-flex align-items-center">
                            <span style={{color: "#FFD700", marginRight: "15px", fontSize: "24px"}}><i className="fas fa-cogs"></i></span>
                            <h5 style={{margin: 0, color: "#ffffff", fontWeight: 600, fontSize: "22px"}}>¿Cómo es el proceso de trabajo con ROFF Studio?</h5>
                          </div>
                        </div>
                        <div className="faq-answer" style={{marginTop: "20px", paddingLeft: "40px", borderLeft: "2px solid rgba(255,215,0,0.3)"}}>
                          <p style={{color: "#e6e6e6", lineHeight: 1.8, fontSize: "16px"}}>
                            Nuestro proceso comienza con una reunión inicial para comprender tus necesidades y objetivos. 
                            Luego pasamos a la fase de investigación y planificación, seguida por diseño, desarrollo, pruebas e implementación. 
                            Mantenemos una comunicación constante durante todo el proyecto y ofrecemos soporte posterior al lanzamiento.
                          </p>
                        </div>
                      </div>
                      
                      <div className="faq-item" style={{background: "linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)", borderRadius: "15px", padding: "30px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)"}}>
                        <div className="faq-question">
                          <div className="d-flex align-items-center">
                            <span style={{color: "#FFD700", marginRight: "15px", fontSize: "24px"}}><i className="fas fa-clock"></i></span>
                            <h5 style={{margin: 0, color: "#ffffff", fontWeight: 600, fontSize: "22px"}}>¿Cuánto tiempo toma completar un proyecto?</h5>
                          </div>
                        </div>
                        <div className="faq-answer" style={{marginTop: "20px", paddingLeft: "40px", borderLeft: "2px solid rgba(255,215,0,0.3)"}}>
                          <p style={{color: "#e6e6e6", lineHeight: 1.8, fontSize: "16px"}}>
                            El tiempo de desarrollo varía según la complejidad y alcance del proyecto. Un sitio web básico puede estar 
                            listo en 2-4 semanas, mientras que proyectos más complejos pueden tomar varios meses. En nuestra primera 
                            reunión, te proporcionaremos un cronograma detallado según tus necesidades específicas.
                          </p>
                        </div>
                      </div>
                      
                      <div className="faq-item" style={{background: "linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)", borderRadius: "15px", padding: "30px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)"}}>
                        <div className="faq-question">
                          <div className="d-flex align-items-center">
                            <span style={{color: "#FFD700", marginRight: "15px", fontSize: "24px"}}><i className="fas fa-globe"></i></span>
                            <h5 style={{margin: 0, color: "#ffffff", fontWeight: 600, fontSize: "22px"}}>¿Trabajáis con clientes internacionales?</h5>
                          </div>
                        </div>
                        <div className="faq-answer" style={{marginTop: "20px", paddingLeft: "40px", borderLeft: "2px solid rgba(255,215,0,0.3)"}}>
                          <p style={{color: "#e6e6e6", lineHeight: 1.8, fontSize: "16px"}}>
                            Sí, trabajamos con clientes de todo el mundo. Nuestra ubicación en Santiago de Chile nos permite colaborar 
                            con empresas en diferentes zonas horarias. Utilizamos herramientas de comunicación y gestión de proyectos 
                            para garantizar una colaboración eficiente independientemente de la ubicación geográfica.
                          </p>
                        </div>
                      </div>
                      
                      <div className="faq-item" style={{background: "linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)", borderRadius: "15px", padding: "30px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(10px)"}}>
                        <div className="faq-question">
                          <div className="d-flex align-items-center">
                            <span style={{color: "#FFD700", marginRight: "15px", fontSize: "24px"}}><i className="fas fa-dollar-sign"></i></span>
                            <h5 style={{margin: 0, color: "#ffffff", fontWeight: 600, fontSize: "22px"}}>¿Cómo puedo solicitar un presupuesto?</h5>
                          </div>
                        </div>
                        <div className="faq-answer" style={{marginTop: "20px", paddingLeft: "40px", borderLeft: "2px solid rgba(255,215,0,0.3)"}}>
                          <p style={{color: "#e6e6e6", lineHeight: 1.8, fontSize: "16px"}}>
                            Puedes contactarnos a través de nuestro formulario de contacto, por correo electrónico a Contacto@roffstudio.com, 
                            o visitando nuestra oficina en Los Militares, Las Condes, Santiago de Chile. Te responderemos en un plazo de 24-48 horas 
                            con información sobre los siguientes pasos y la posibilidad de agendar una reunión inicial sin compromiso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="contact-box" style={{background: "linear-gradient(145deg, #1e1e23 0%, #0f0f14 100%)", borderRadius: "15px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center"}}>
                      <h4 style={{color: "#FFD700", marginBottom: "20px", fontWeight: 600}}>¿Tienes más preguntas?</h4>
                      <p style={{color: "#e6e6e6", fontSize: "16px", lineHeight: 1.7, marginBottom: "30px"}}>No dudes en contactarnos directamente para resolver cualquier duda específica sobre nuestros servicios.</p>
                      <a href="/page-contact" className="butn-circle" style={{background: "linear-gradient(to right, #FFD700, #FFA500)", color: "#000", padding: "15px 35px", borderRadius: "30px", fontWeight: 600, display: "inline-block", textDecoration: "none", boxShadow: "0 5px 15px rgba(255,215,0,0.3)"}}>
                        <span>Contactar</span>
                      </a>
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
