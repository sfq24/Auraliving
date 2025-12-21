import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // 1. 依然优先读取用户之前手动切换过的选择（保存在缓存中）
    const saved = localStorage.getItem('auraliving-language');
    if (saved === 'en' || saved === 'zh') return saved;

    // 2. 删掉原来的浏览器检测逻辑，直接强制返回 'en'
    // 这样新用户第一次访问，或者没选过语言的用户，都会看到英文
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('auraliving-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
