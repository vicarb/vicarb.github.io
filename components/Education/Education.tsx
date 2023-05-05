import React from 'react'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', ],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

const educationContent = [
  {
    title: "Software Developer",
    institution: "Self-taught",
    date: "Self-taught since 2020",
  },
  {
    
    title: "MSc in Marketing",
    institution: "Universidad Adolfo Ibáñez",
    date: "Graduado en 2020",
  },
  {
    title: "Ingeniero Comercial",
    institution: "Universidad Adolfo Ibáñez",
    date: "Graduado en 2020",
  }
];

export const Education = () => {
  const { english } = useContext(LanguageContext);
  return (
    <div className="p-4 lg:p-12 bg-blue-500 opacity-75 rounded-lg">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className={`${roboto.className} text-3xl font-bold text-white mb-4 text-center`}>{english ? "Education": "Educación"}</h1>
    <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 flex justify-between items-center">
      {educationContent.map((item, index) => (
        <div key={index} className="p-6 md:p-12 bg-gray-800 rounded-lg">
          <h2 className={`${inter.className} text-lg font-bold text-white mb-2`}>{item.title}</h2>
          <h3 className={`${inter.className} text-gray-400 text-sm mb-2`}>{item.institution}</h3>
          <p className={`${inter.className} text-gray-400 text-sm`}>{`Graduado en ${item.date}`}</p>

        </div>
      ))}
    </div>
  </div>
</div>

  

  )
}
