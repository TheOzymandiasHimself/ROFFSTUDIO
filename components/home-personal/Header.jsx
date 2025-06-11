'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Image from 'next/image';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header header-personal valign" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video de fondo solo en desktop, imagen en móvil */}
      <iframe
        src="https://jade-bombolone-6c6d9a.netlify.app/"
        title="Roff Background Experience"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: -1,
          filter: 'brightness(0.7)'
        }}
        allow="autoplay; fullscreen; picture-in-picture"
      />
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <Image src="/assets/imgs/header/hi.png" alt="hi icon" width={30} height={30} />
                </span>{' '}
                ¡Hola!
              </h6>
              <h1 className="fw-700 mb-10">
                Bienvenidos a ROFF <span className="main-color">STUDIO</span>
              </h1>
              <h3>Creamos Identidades Digitales.</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Desde inicio a fin, con un enfoque holístico e integral.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contáctanos</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <Image
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt="flecha hacia abajo"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">contacto@roffstudio.cl</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">WhatsApp :</h6>
            <span className="p-color">+56962655233</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Ubicación :</h6>
            <span className="p-color">Santiago, Chile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
