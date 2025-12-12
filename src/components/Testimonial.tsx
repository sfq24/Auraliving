import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Testimonial = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonial;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative"
        >
          <div className="absolute -top-6 left-8">
            <div className="bg-emerald-600 rounded-full p-4">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          <blockquote className="mt-6">
            <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <footer className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full"></div>
              <div className="ml-4">
                <p className="font-bold text-gray-900 text-lg">{t.author}</p>
                <p className="text-gray-600">{t.role}</p>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
