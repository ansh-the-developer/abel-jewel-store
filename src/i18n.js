import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ko from './locales/ko.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
    },
    // ✅ Default to English detection (which shows Korean content)
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      // 1. Check URL (?lng=ko)
      // 2. Check LocalStorage (saved preference)
      // 3. Check Browser Settings (navigator)
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
