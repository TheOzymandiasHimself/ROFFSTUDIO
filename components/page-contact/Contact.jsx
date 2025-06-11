import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="mb-20" style={{ textAlign: 'center' }}>
                <a href="https://wa.me/+56962655233" target="_blank" rel="noopener noreferrer" className="butn butn-md butn-bord radius-30" style={{ background: 'linear-gradient(45deg, #e6a701, #e67e01)', color: '#fff', border: 'none', boxShadow: '0 4px 15px rgba(230, 167, 1, 0.3)' }}>
                  <span className="text" style={{ fontWeight: 'bold' }}>CLICK AQUÍ PARA WHATSAPP</span>
                </a>
              </div>
              <div className="phone fz-24 fw-600 underline main-color" style={{ textAlign: 'center' }}>
                <a href="https://wa.me/+56962655233">+56962655233</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Ubicación</h6>
                <p>Santiago, Chile</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>contacto@roffstudio.cl</p>
              </div>

              <div className="social-icon mt-50">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Conversemos</h6>
                <h3 className="text-u ls1">
                  Envíanos un <span className="fw-200">mensaje</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Mensaje"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Enviar Mensaje</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
