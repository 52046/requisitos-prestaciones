import { useState } from 'react';

// Importamos las imágenes principales e íconos
import imgPortada from './portada.jpg';
import imgAlimentos from './alimentos.jpg';
import imgPanales from './panales.jpg';
import imgSuplementos from './suplementos.jpg';
import imgCatastrofe from './catastrofe_icono.jpg';

// Importamos los dos logos institucionales
import logoMuni from './logomuni.jpg';
import logoUST from './logoust.png';

const TarjetaPrestacion = ({ titulo, imagen, descripcion, publico, requisitos }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col overflow-hidden mb-4 transition-all duration-300">
      <button 
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center p-4 relative active:bg-gray-50 focus:outline-none"
      >
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
      titulo: "Canasta Básica de Alimentos",
      imagen: imgAlimentos,
      descripcion: "Ayuda para cubrir necesidades básicas de alimentos frente a situaciones de crisis(se debe renovar documentación).",
      publico: "Familias vulnerables que enfrentan cesantía, enfermedad o disminución drástica de ingresos.",
      requisitos: [
        "Entrevista de evaluación socioeconómica presencial al momento de solicitar.",
        "Documento de respaldo económico: finiquito, boletas de gastos básicos (agua, luz, etc), liquidación de pensión, certificado de alumno regular o comprobante de pensión de alimentos."
      ]
    },
    {
      titulo: "Pañales (Niño / Adulto)",
      imagen: imgPanales,
      descripcion: "Apoyo de pañales entregados según evaluación médica.",
      publico: "Personas con dependencia severa, postración o incontinencia.",
      requisitos: [
        "Para Menores de 18 años: Documento que acredite la condición, carnet de niño sano y credencial de discapacidad (si aplica).",
        "Para Adultos: Certificado médico que justifique clínicamente el uso del pañal."
      ]
    },
    {
      titulo: "Suplementos Alimenticios",
      imagen: imgSuplementos,
      descripcion: "Entrega de fórmulas lácteas para la recuperación o mantención de la salud.",
      publico: "Personas con déficit nutricional, bajo peso o enfermedades crónicas.",
      requisitos: [
        "Receta médica de la red de salud pública indicando el suplemento y la dosis diaria (debe actualizar receta según requerimiento).",
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
        "Aplicación de Ficha Básica de Emergencia (FIBE) solo en alerta roja y amarilla",
        "La entrega está sujeta a la evaluación técnica en terreno por parte de Trabajo Social. (Excepción: Este trámite NO exige tener hasta el 40% en el RSH)."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      
      {/* PORTADA ILUSTRADA */}
      <div className="w-full relative h-[340px] shadow-md rounded-b-[2.5rem] overflow-hidden">
        <img 
          src={imgPortada} 
          alt="Trabajo Social en Terreno" 
          className="w-full h-full object-cover"
        />

        {/* 1. Logos en la parte superior sobre pastilla translúcida */}
        {/* Logos en la parte superior sobre pastilla blanca */}
<div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-md border border-white/60">
  <img src={logoMuni} alt="Municipalidad de Hualpén" className="h-14 object-contain max-w-[45%]" />
  <div className="h-8 w-px bg-gray-300 mx-3" />
  <img src={logoUST} alt="Santo Tomás" className="h-14 object-contain max-w-[45%]" />
</div>

        {/* Degradado inferior con títulos */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent flex flex-col justify-end p-6">
           <h1 className="text-white text-2xl font-black text-center mb-1 uppercase tracking-wide drop-shadow-lg">
             Municipalidad de<br/>Hualpén / Dideco
           </h1>
           <h2 className="text-blue-200 text-lg font-bold text-center drop-shadow-md">
             PRESTACIONES SOCIALES
           </h2>
        </div>
      </div>

      <main className="max-w-md mx-auto px-4 pb-8">
        
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

        {/* Requisitos Generales */}
        <section className="bg-[#fff9d6] rounded-2xl p-5 mb-6 shadow-md border border-yellow-200">
          <h2 className="font-black text-yellow-900 text-base mb-2 uppercase tracking-tight flex items-center gap-2">
            ⚠️ REQUISITOS GENERALES (RSH 40%)
          </h2>
          <p className="text-sm text-yellow-800 font-bold leading-relaxed">
            Cédula de Identidad de quien solicita y del Jefe de Hogar + Cartola del RSH hasta el 40% perteneciente a la comuna de Hualpén. 
            <span className="font-medium text-yellow-700 block mt-1"> (La cartola se puede imprimir directamente en el municipio si no la trae).</span>
          </p>
        </section>

        {/* Catálogo de Prestaciones */}
        <section className="flex flex-col mb-8">
          <h2 className="font-black text-gray-800 text-lg mb-4 px-2">Seleccione una ayuda social:</h2>
          {prestaciones.map((prestacion, index) => (
            <TarjetaPrestacion key={index} {...prestacion} />
          ))}
        </section>

        {/* 2. Footer Institucional y Académico */}
        <footer className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Iniciativa de Trabajo Social en Terreno
          </p>
          <div className="flex items-center justify-center gap-6 mb-3">
            <img src={logoMuni} alt="Municipalidad de Hualpén" className="h-10 object-contain" />
            <img src={logoUST} alt="Santo Tomás" className="h-10 object-contain" />
          </div>
          <p className="text-xs text-gray-400">
            Desarrollado para la Dirección de Desarrollo Comunitario (DIDECO)
          </p>
        </footer>

      </main>
    </div>
  );
}