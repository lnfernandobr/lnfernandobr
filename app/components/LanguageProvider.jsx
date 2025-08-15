'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'pt-BR',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt-BR');

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language || navigator.userLanguage;
    // Set EN if browser language starts with 'en', otherwise PT-BR
    const initialLang = browserLang.startsWith('en') ? 'en' : 'pt-BR';
    setLanguage(initialLang);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext); 