import { motion } from 'framer-motion';
import { MapPin, Waves, Droplets, UtensilsCrossed, Heart, Phone, Mail, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Kent = () => {
  const { language } = useLanguage();

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50"
          style={{
            backgroundImage: 'url(/images/kent_hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-emerald-900/60 to-blue-800/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === 'en' ? 'Aura Living - Kent' : '奥若养老 - 肯特'}
            </h1>
            <div className="flex items-center justify-center text-white/90 text-xl mb-8">
              <MapPin className="w-6 h-6 mr-2" />
              <span>{language === 'en' ? 'Kent, Washington' : '肯特，华盛顿州'}</span>
            </div>
            <p className="text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Resort-style living with authentic Chinese cuisine and premium amenities'
                : '中国生活体验，正宗中国管理员，中国环境，中餐服务和高端设施'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Unique Features of Our Kent Home' : '肯特家园独特优势'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Experience unparalleled comfort with resort-style amenities and authentic cultural services'
                : '体验无与伦比的舒适度，度假式设施和正宗文化服务'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Swimming Pool' : '游泳池'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Private swimming pool for exercise, therapy, and relaxation in a safe environment'
                  : '私人游泳池，在安全环境中进行锻炼、理疗和放松'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Hot Tub' : '温泉按摩池'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Therapeutic hot tub for muscle relaxation and hydrotherapy treatments'
                  : '治疗性温泉按摩池，用于肌肉放松和水疗'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Authentic Chinese Cuisine' : '正宗中餐'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Daily home-cooked authentic Chinese meals prepared by experienced chefs'
                  : '由中国护工和管理员安排中餐服务，符合中国人的饮食习惯'}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Huge Backyard & Outdoor Spaces' : '超大后院和户外空间'}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === 'en'
                    ? 'Our Kent home features an expansive backyard perfect for outdoor activities, gardening, BBQ gatherings, and enjoying nature. The spacious grounds provide plenty of room for residents to roam, relax, and connect with family during visits.'
                    : '我们的肯特家园拥有宽敞的后院，非常适合户外活动、园艺、烧烤聚会和享受自然。宽阔的场地为长者提供了充足的活动空间，可以散步、放松，并在家属探访时温馨相聚。'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Chinese Language & Cultural Services' : '中文服务与文化关怀'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our Kent location specializes in providing authentic Chinese-language care and cultural familiarity'
                : '我们的肯特家园专注于提供正宗的中文护理和文化认同感'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Mandarin & Cantonese Speaking Staff' : '中文护工团队'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Communicate comfortably in Mandarin or Cantonese with our bilingual caregiving team who understand cultural nuances and traditions.'
                  : '与我们的双语护理团队用普通话或粤语轻松交流，他们理解文化细节和传统。'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Traditional Chinese Celebrations' : '传统节日庆祝'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Celebrate Spring Festival, Mid-Autumn Festival, and other important holidays with special meals and activities.'
                  : '庆祝春节、中秋节等重要节日，提供特色餐饮和活动。'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Photo Gallery' : '家园照片'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Explore our beautiful Kent home and amenities' : '探索我们美丽的肯特家园和设施'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/Kent/Sunroom.png',
              '/images/Kent/Living Room.png',
              '/images/Kent/Kitchen.png',
              '/images/Kent/Couple Bedroom.png',
              '/images/Kent/Bedroom 1.png',
              '/images/Kent/Bathroom 1.png',
              '/images/Kent/Bathroom 2.png',
              '/images/Kent/Backyard.png',
              '/images/Kent/Bedroom 2.png',
              '/images/Kent/Bedroom 3.png',
              '/images/Kent/Sunroom & Yard.png',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <img
                  src={image}
                  alt={`Kent Home ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' ? 'Experience Kent Living' : '体验肯特生活'}
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Schedule a personal tour and see our amazing amenities including the pool, hot tub, and beautiful grounds'
                : '预约参观，亲眼看看我们的精彩设施，包括游泳池、温泉和美丽庭院'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(214) 205-4091"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(214) 205-4091</span>
              </a>
              <a
                href="mailto:aura@auralivingcare.com"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>{language === 'en' ? 'Email Us' : '邮件联系'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
