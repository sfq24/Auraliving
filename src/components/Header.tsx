import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Aura Living
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('our-homes')}
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              {t.ourHomes}
            </button>
            <button
              onClick={() => scrollToSection('life-at-aura')}
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              {t.lifeAtAura}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              {t.contact}
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-emerald-700 transition-colors border border-gray-300 rounded-lg hover:border-emerald-700"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? '中文' : 'EN'}
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              {t.scheduleTour}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('our-homes')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {t.ourHomes}
            </button>
            <button
              onClick={() => scrollToSection('life-at-aura')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {t.lifeAtAura}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {t.contact}
            </button>
            <div className="pt-3 space-y-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:border-emerald-700 hover:text-emerald-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">
                  {language === 'en' ? '中文' : 'EN'}
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-emerald-700 text-white px-4 py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold"
              >
                {t.scheduleTour}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
