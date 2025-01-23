'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language || navigator.userLanguage;
    // Set PT if browser language starts with 'pt', otherwise EN
    const initialLang = browserLang.startsWith('pt') ? 'pt-BR' : 'en';
    setLanguage(initialLang);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext); 