import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <Image src="/assets/imgs/rofflogo.png" alt="Roff Studio Logo" width={100} height={100} className="object-cover" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">CONTACTO</h6>
              <h6 className="p-color fw-400">
                Los Militares, Las Condes. <br /> Santiago de Chile
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:Contacto@roffstudio.com">Contacto@roffstudio.com</a>
              </h6>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">ENLACES ÚTILES</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">Nosotros</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Servicios</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li>
                <li>
                  <a href="/page-contact">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">BOLETÍN</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Tu Correo Electrónico" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              &copy; {new Date().getFullYear()} ROFF Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image src="/assets/imgs/patterns/blur1.png" alt="" width={600} height={600} />
      </div>
    </footer>
  );
}

export default Footer;
