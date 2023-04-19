import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', ],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
});

const experienceContent = [
  {
    title: "Desarrollador Full-Stack",
    company: "Webcl.",
    url: "https://vicarb.github.io/super-memory",
    date: "Enero 2022 - Presente",
    descripcion: "Desarrollo y mantenimiento de aplicaciones web y móviles, incluyendo un sitio de comercio electrónico y una aplicación móvil para iOS y Android.",
    description: "Development and maintenance of web and mobile applications, including an e-commerce site and a mobile application for iOS and Android."
  },
  {
    title: "Desarrollador Front-End",
    url: "https://vicarb.github.io/reusable-comps",
    company: "Webcl",
    date: "Septiembre 2020 - Diciembre 2021",
    descripcion: "Desarrollo de extensiones de Chrome y aplicaciones web para clientes corporativos.",
    description: "Development of Chrome extensions and web applications for corporate clients."
  }
];

export const Experience = () => {
  const { english } = useContext(LanguageContext);
  return (
    <div className="py-12 bg-blue-500 opacity-75 rounded-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`${roboto.className} text-3xl font-bold text-white mb-4`}>{english ? "Experience" : "Experiencia"}</h1>
        
        <div className="space-y-8">
          {experienceContent.map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className={`${inter.className} text-lg font-bold text-white`}>{item.title}</h2>
                <p className={`${inter.className} text-gray-400 text-sm`}>{item.date}</p>
              </div>
              <h3 className={`${inter.className} text-gray-400 text-sm mb-2`}>{item.company}</h3>
              <p className={`${inter.className} text-white leading-6`}>{english ? item.description : item.descripcion}</p>

              <Link href={item.url}>
                <h1 className="bg-white text-gray-800 py-2 px-4 rounded-md mt-4 inline-block">
                  {english ? "Visit Website" : "Visitar sitio web"}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};