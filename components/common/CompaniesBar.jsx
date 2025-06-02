'use client';
import React, { useEffect } from 'react';

function CompaniesBar() {
  useEffect(() => {
    // Buscar y reemplazar el texto con error en cualquier elemento después de que el componente se monte
    const replaceText = () => {
      // Buscar elementos que contengan el texto con error
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el.textContent && (
          el.textContent.includes('More than 200+ companiestrusted us worldwide') || 
          el.textContent.includes('More than 200+ companies trusted us worldwide')
        )) {
          // Reemplazar el texto si el elemento solo contiene ese texto (para evitar reemplazos parciales)
          if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            el.textContent = 'llamados a la acción';
          }
        }
      });
    };

    // Ejecutar después de que el DOM esté completamente cargado
    setTimeout(replaceText, 500);
  }, []);

  return null; // Este componente no renderiza nada visible
}

export default CompaniesBar;
