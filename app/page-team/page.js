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
  title: 'ROFF Studio - Nuestro Equipo',
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

// Estilos personalizados para alinear correctamente las tarjetas del equipo
const teamStyles = {
  teamCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  teamInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  teamImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
};

export default function PageTeam() {
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
                      <h1>Nuestro Equipo</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Simple Team Section */}
            <section className="team section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="text-center mb-50">
                      <h2 className="fz-40 fw-700">Conozca a nuestros expertos</h2>
                    </div>
                  </div>
                </div>
                {/* Primera fila: 3 miembros */}
                <div className="row md-marg justify-content-center mb-4">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="item mb-30" style={teamStyles.teamCard}>
                      <div className="img" style={teamStyles.teamImg}>
                        <img src="/assets/imgs/team/1.jpg" alt="" />
                      </div>
                      <div className="info" style={teamStyles.teamInfo}>
                        <h5 className="mb-2">Francisca Zambrano</h5>
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Directora Creativa</h4>
                                </div>
                                <div className="item">
                                  <h4>Directora Creativa</h4>
                                </div>
                                <div className="item">
                                  <h4>Directora Creativa</h4>
                                </div>
                                <div className="item">
                                  <h4>Directora Creativa</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="item mb-30" style={teamStyles.teamCard}>
                      <div className="img" style={teamStyles.teamImg}>
                        <img src="/assets/imgs/team/2.jpg" alt="" />
                      </div>
                      <div className="info" style={teamStyles.teamInfo}>
                        <h5 className="mb-2">Oscar Zambrano</h5>
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Desarrollador Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Creativo</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="item mb-30" style={teamStyles.teamCard}>
                      <div className="img" style={teamStyles.teamImg}>
                        <img src="/assets/imgs/team/3.jpg" alt="" />
                      </div>
                      <div className="info" style={teamStyles.teamInfo}>
                        <h5 className="mb-2">Felipe Lopez</h5>
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Desarrollador UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador UX</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Segunda fila: 2 miembros */}
                <div className="row md-marg justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="item mb-30" style={teamStyles.teamCard}>
                      <div className="img" style={teamStyles.teamImg}>
                        <img src="/assets/imgs/team/4.jpg" alt="" />
                      </div>
                      <div className="info" style={teamStyles.teamInfo}>
                        <h5 className="mb-2">Felipe Cabrera</h5>
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Marketing</h4>
                                </div>
                                <div className="item">
                                  <h4>Marketing</h4>
                                </div>
                                <div className="item">
                                  <h4>Marketing</h4>
                                </div>
                                <div className="item">
                                  <h4>Marketing</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="item mb-30" style={teamStyles.teamCard}>
                      <div className="img" style={teamStyles.teamImg}>
                        <img src="/assets/imgs/team/5.jpg" alt="" />
                      </div>
                      <div className="info" style={teamStyles.teamInfo}>
                        <h5 className="mb-2">Roberto Toledo</h5>
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Desarrollador BackEnd</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador BackEnd</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador BackEnd</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador BackEnd</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
