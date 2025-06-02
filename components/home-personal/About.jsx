import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <iframe src="https://roff-volcano-scene.windsurf.build/" style={{ width: '100%', height: '100%', border: 'none' }} title="Animación Escena Volcán Roff"></iframe>
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre Nosotros:</h6>
              <div className="text">
                <h4 className="mb-30">
                  Somos <strong>ROFF STUDIO</strong>, creadores de experiencias digitales y tu mejor opción para posicionar tu marca.
                </h4>
                <p>
                  Convertimos problemas complejos en diseños simples, intuitivos y hermosos. Nuestro objetivo es mostrarte de la manera más creativa posible.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Satisfacción del cliente
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">1000+</h3>
                          <h6 className="p-color sub-title">
                            Horas hombre completadas
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
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
      </div>
    </section>
  );
}

export default About;
