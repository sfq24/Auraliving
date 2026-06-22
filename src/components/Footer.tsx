import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl font-bold">Aura Living</span>
            </div>
            <p className="text-gray-400 mb-4">{t.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.about}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.aboutText}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#home" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {nav.home}
                </a>
              </li>
              <li>
                <a href="/#our-homes" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {nav.ourHomes}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {nav.services}
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{language === 'en' ? 'Our Homes' : '我们的家园'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/homes/magnolia" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Aura Living - Magnolia' : '奥若养老 - 马格诺利亚'}
                </Link>
              </li>
              <li>
                <Link to="/homes/kent" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Aura Living - Kent' : '奥若养老 - 肯特'}
                </Link>
              </li>
              <li>
                <Link to="/homes/shoreline" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Aura Living - Shoreline' : '奥若养老 - 岸线'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.contactInfo}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:(800) 490-1990" className="hover:text-emerald-400 transition-colors">
                  (800) 490-1990
                </a>
              </li>
              <li>
                <a href="mailto:aura@auralivingcare.com" className="hover:text-emerald-400 transition-colors">
                  aura@auralivingcare.com
                </a>
              </li>
              <li>Seattle, WA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">{t.rights}</p>
            <p className="text-gray-400 text-sm">{t.licensed}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
