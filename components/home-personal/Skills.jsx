'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

function Skills() {
  useEffect(() => {
    // Función para iniciar la animación de las estrellas
    const animateStars = () => {
      const stars = document.querySelectorAll('.star-rating');
      stars.forEach(star => {
        // Pequeña variación en la velocidad de rotación para cada estrella
        const randomSpeed = 10 + Math.random() * 5;
        star.style.animation = `rotateStar ${randomSpeed}s infinite linear`;
      });
    };
    
    // Iniciar animación cuando el componente se monte
    animateStars();
    
    // Limpieza cuando el componente se desmonte
    return () => {
      const stars = document.querySelectorAll('.star-rating');
      stars.forEach(star => {
        star.style.animation = 'none';
      });
    };
  }, []);
  
  return (
    <section className="my-skills section-padding">
      {/* CSS para las estrellas 3D con efecto bloom */}
      <style jsx>{`
        @keyframes floatStar {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }
        
        .stars-container {
          display: flex;
          justify-content: center;
          margin: 10px 0;
          padding: 5px;
        }
        
        .star-item {
          position: relative;
          margin: 0 2px;
          animation: floatStar 2s ease-in-out infinite;
        }
        
        .star-item:nth-child(1) { animation-delay: 0s; }
        .star-item:nth-child(2) { animation-delay: 0.2s; }
        .star-item:nth-child(3) { animation-delay: 0.4s; }
        .star-item:nth-child(4) { animation-delay: 0.6s; }
        .star-item:nth-child(5) { animation-delay: 0.8s; }
        
        .star {
          width: 28px;
          height: 28px;
          filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.8)) brightness(1.3);
        }
        
        .bloom-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          animation: pulse 2s infinite alternate;
        }
        
        @keyframes pulse {
          0% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0.2; }
        }
        
        .skill-label {
          font-size: 10px;
          background-color: rgba(40, 120, 200, 0.1);
          color: #2878c8;
          padding: 2px 6px;
          border-radius: 10px;
          display: inline-block;
          margin-top: 5px;
          text-transform: uppercase;
          font-weight: 600;
        }
      `}</style>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center mb-80">
              <h6 className="sub-title main-color mb-15">Nuestras Habilidades</h6>
              <h3>
                TECNOLOGÍAS Y HERRAMIENTAS <br /> <span className="opacity-7">QUE DOMINAMOS</span>
              </h3>
              <p className="mt-20">Aunque somos un estudio nuevo, nuestro equipo cuenta con conocimientos actualizados en las tecnologías y metodologías más efectivas para proyectos digitales.</p>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s1.png" alt="skill icon 1" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">Diseño UI / UX</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s2.png" alt="skill icon 2" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">Desarrollo Web</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s3.png" alt="skill icon 3" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">Diseño Gráfico</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s5.png" alt="skill icon 5" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">Figma</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s4.png" alt="skill icon 4" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">WordPress</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s6.png" alt="skill icon 6" width={70} height={70} />
                </div>
                <div className="stars-container">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div className="star-item" key={index}>
                      <Image src="/assets/imgs/estrellatransp.png" alt="estrella" width={28} height={28} className="star" />
                      <div className="bloom-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h6 className="fz-18">Marketing Digital</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
