import { useState } from 'react';

// Importamos todas las imágenes desde la carpeta src
import imgPortada from './portada.jpg'; // La imagen grande de la emergencia en terreno
import imgAlimentos from './alimentos.jpg';
import imgPanales from './panales.jpg';
import imgSuplementos from './suplementos.jpg';
import imgCatastrofe from './catastrofe_icono.jpg'; // La casita sola con la lona azul

const TarjetaPrestacion = ({ titulo, imagen, descripcion, publico, requisitos }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col overflow-hidden mb-4 transition-all duration-300">
      <button 
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center p-4 relative active:bg-gray-50 focus:outline-none"
      >
        {/* Imagen del ícono cuadrado */}
        <div className="w-20 h-20 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden mr-4 border border-gray-100 p-1">
          <img src={imagen} alt={titulo} className="w-full h-full object-contain" />
        </div>
        
        <div className="text-left flex-1 pr-6">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{titulo}</h3>
        </div>
        
        <div className="absolute right-5 text-gray-400 text-xl font-bold">
          {abierto ? '▲' : '▼'}
        </div>
      </button>
      
      {/* Contenido desplegable estructurado */}
      {abierto && (
        <div className="px-5 pb-6 pt-2 bg-white border-t border-gray-100 text-left">
          
          <div className="mb-4">
            <span className="font-black text-gray-900 text-base block mb-1">📝 Descripción:</span>
            <p className="text-gray-700 text-base font-medium leading-relaxed">{descripcion}</p>
          </div>

          <div className="mb-4 bg-blue-50 p-3 rounded-xl border border-blue-100">
            <span className="font-black text-blue-900 text-base block mb-1">👤 Público Objetivo:</span>
            <p className="text-blue-800 text-base font-medium leading-relaxed">{publico}</p>
          </div>

          <div>
            <span className="font-black text-gray-900 text-base block mb-2">📄 Requisitos Documentales específicos:</span>
            <ul className="space-y-3">
              {requisitos.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-blue-600 font-black mt-0.5 text-lg">•</span>
                  <span className="leading-tight font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

export default function App() {
  const prestaciones = [
    {
      titulo: "Cajas de Alimentos",
      imagen: imgAlimentos,
      descripcion: "Ayuda para cubrir necesidades nutricionales básicas frente a situaciones de crisis. Se puede solicitar cada 6 meses (se debe renovar documentación).",
      publico: "Familias vulnerables que enfrentan cesantía, enfermedad o disminución drástica de ingresos.",
      requisitos: [
        "Entrevista de evaluación socioeconómica presencial al momento de solicitar.",
        "Documento de respaldo económico: finiquito, boletas impagas, liquidación de pensión, certificado de alumno regular o comprobante de pensión de alimentos."
      ]
    },
    {
      titulo: "Pañales (Niño / Adulto)",
      imagen: imgPanales,
      descripcion: "Apoyo con paquetes de pañales entregados de forma mensual o trimestral, según evaluación.",
      publico: "Personas con dependencia severa, postración o incontinencia.",
      requisitos: [
        "Para Menores de 18 años: Documento que acredite la condición, carnet de niño sano y credencial de discapacidad (si aplica).",
        "Para Adultos: Certificado médico que justifique clínicamente el uso del pañal (debe actualizarse cada 3 meses)."
      ]
    },
    {
      titulo: "Suplementos Alimenticios",
      imagen: imgSuplementos,
      descripcion: "Entrega de fórmulas lácteas (Ensure o Pediasure) para la recuperación o mantención de la salud. Entrega mensual o trimestral.",
      publico: "Personas con déficit nutricional, bajo peso o enfermedades crónicas.",
      requisitos: [
        "Receta médica de la red de salud pública indicando el suplemento y la dosis diaria (debe actualizarse cada 3 meses).",
        "Carnet de control de salud crónico o documento de derivación de nutricionista."
      ]
    },
    {
      titulo: "Asistencia por Catástrofe",
      imagen: imgCatastrofe,
      descripcion: "Intervención social de urgencia ante desastres naturales que afecten gravemente la vivienda (voladuras de techo, anegamientos, incendios).",
      publico: "Hogares siniestrados o afectados por emergencias habitacionales.",
      requisitos: [
        "Llamar de inmediato al *4155 para reportar la emergencia al municipio.",
        "Aplicación de Ficha Básica de Emergencia (FIBE) en el domicilio tras el aviso.",
        "La entrega está sujeta a la evaluación técnica en terreno por parte de Trabajo Social. (Excepción: Este trámite NO exige tener hasta el 40% en el RSH)."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      
      {/* PORTADA ILUSTRADA CON IMAGEN GRANDE EN TERRENO */}
      <div className="w-full relative h-[300px] shadow-md rounded-b-[2rem] overflow-hidden">
        <img 
          src={imgPortada} 
          alt="Trabajo Social en Terreno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent flex flex-col justify-end p-6">
           <h1 className="text-white text-2xl font-black text-center mb-1 uppercase tracking-wide drop-shadow-lg">
             Municipalidad de<br/>Hualpén / Dideco
           </h1>
           <h2 className="text-blue-200 text-lg font-bold text-center drop-shadow-md">
             PRESTACIONES SOCIALES
           </h2>
        </div>
      </div>

      <main className="max-w-md mx-auto px-4 pb-12">
        
        {/* Botonera de Información superpuesta */}
        <div className="flex justify-between gap-3 mb-6 -mt-6 relative z-10">
          <div className="bg-white flex-1 p-3 rounded-xl shadow-md text-center border border-gray-100">
            <div className="text-blue-700 text-3xl mb-1">📍</div>
            <div className="text-[11px] font-black text-black leading-tight uppercase">Patria Nueva<br/>1035</div>
          </div>
          <div className="bg-white flex-1 p-3 rounded-xl shadow-md text-center border border-gray-100">
            <div className="text-gray-600 text-3xl mb-1">🕒</div>
            <div className="text-[11px] font-black text-black leading-tight uppercase">08:15 a<br/>14:00 hrs</div>
          </div>
          <div className="bg-white flex-1 p-3 rounded-xl shadow-md text-center border border-gray-100">
            <div className="text-red-600 text-3xl mb-1">🚨</div>
            <div className="text-[11px] font-black text-red-700 leading-tight uppercase">Urgencias<br/>*4155</div>
          </div>
        </div>

        {/* Requisitos Generales - Bloque de Alerta */}
        <section className="bg-[#fff9d6] rounded-2xl p-5 mb-6 shadow-md border border-yellow-200">
          <h2 className="font-black text-yellow-900 text-base mb-2 uppercase tracking-tight flex items-center gap-2">
            ⚠️ REQUISITOS GENERALES (RSH 40%)
          </h2>
          <p className="text-sm text-yellow-800 font-bold leading-relaxed">
            Cédula de Identidad de quien solicita y del Jefe de Hogar + Cartola del RSH hasta el 40%. 
            <span className="font-medium text-yellow-700 block mt-1"> (La cartola se puede imprimir directamente en el municipio si no la trae).</span>
          </p>
        </section>

        {/* Catálogo de Prestaciones */}
        <section className="flex flex-col">
          <h2 className="font-black text-gray-800 text-lg mb-4 px-2">Seleccione una ayuda social:</h2>
          {prestaciones.map((prestacion, index) => (
            <TarjetaPrestacion key={index} {...prestacion} />
          ))}
        </section>

      </main>
    </div>
  );
}