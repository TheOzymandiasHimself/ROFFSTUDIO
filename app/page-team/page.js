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
                <div className="row md-marg">
                  <div className="col-lg-4 col-md-6">
                    <div className="item mb-30">
                      <div className="img">
                        <img src="/assets/imgs/team/1.jpg" alt="" />
                      </div>
                      <div className="info">
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Director Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Director Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Director Creativo</h4>
                                </div>
                                <div className="item">
                                  <h4>Director Creativo</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5>Alejandro Rojas</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="item mb-30">
                      <div className="img">
                        <img src="/assets/imgs/team/2.jpg" alt="" />
                      </div>
                      <div className="info">
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Desarrollador Web</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Web</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Web</h4>
                                </div>
                                <div className="item">
                                  <h4>Desarrollador Web</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5>Camila Fernández</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="item mb-30">
                      <div className="img">
                        <img src="/assets/imgs/team/3.jpg" alt="" />
                      </div>
                      <div className="info">
                        <div className="main-marq team-position">
                          <div className="slide-har st1 non-strok">
                            <div className="box">
                              <div className="items">
                                <div className="item">
                                  <h4>Diseñador UI/UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Diseñador UI/UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Diseñador UI/UX</h4>
                                </div>
                                <div className="item">
                                  <h4>Diseñador UI/UX</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5>Matías Lagos</h5>
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
