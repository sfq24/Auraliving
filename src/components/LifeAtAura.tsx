import { motion } from 'framer-motion';
import { Music, Flower2, Palette, Cake, Calendar, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const eventIcons = [Music, Flower2, Cake, Palette, Calendar, Brain];

export const LifeAtAura = () => {
  const { language } = useLanguage();
  const t = translations[language].lifeAtAura;

  return (
    <section id="life-at-aura" className="py-20 bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.events.map((event, index) => {
            const Icon = eventIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2 text-sm">{event.description}</p>
                    <p className="text-emerald-600 font-semibold text-sm">{event.frequency}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">{t.wellness.title}</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{t.wellness.description}</p>
        </motion.div>
      </div>
    </section>
  );
};
