import { motion } from 'framer-motion';
import { MapPin, Flower2, School, Heart, Phone, Mail, Trees } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Shoreline = () => {
  const { language } = useLanguage();

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-amber-50 to-blue-50"
          style={{
            backgroundImage: 'url(/images/shoreline_hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-amber-900/60 to-blue-800/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === 'en' ? 'Aura Living - Shoreline' : '奥若养老 - 岸线'}
            </h1>
            <div className="flex items-center justify-center text-white/90 text-xl mb-8">
              <MapPin className="w-6 h-6 mr-2" />
              <span>{language === 'en' ? 'Shoreline, WA' : '岸线，华盛顿州'}</span>
            </div>
            <p className="text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Tranquil living surrounded by nature with a vibrant community atmosphere'
                : '宁静的自然环境，充满活力的社区氛围'}
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
              {language === 'en' ? 'Why Choose Shoreline?' : '为什么选择岸线？'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our Shoreline home offers peace, natural beauty, and meaningful connections'
                : '我们的岸线家园提供宁静、自然美景和温馨互动'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Private Garden' : '私家花园'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Beautiful private garden perfect for morning walks, gardening activities, and fresh air'
                  : '美丽的私家花园，非常适合晨间散步、园艺活动和呼吸新鲜空气'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <School className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Elementary School View' : '学校景观'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Located near an elementary school, bringing joy and energy from children\'s activities'
                  : '靠近小学，孩子们的活动带来欢乐和活力'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trees className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Serene Environment' : '宁静环境'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Peaceful neighborhood setting with tree-lined streets and quiet surroundings'
                  : '宁静的社区环境，绿树成荫的街道和安静的周边'}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Intergenerational Connection' : '代际互动'}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === 'en'
                    ? 'Our unique location near the elementary school provides wonderful opportunities for residents to enjoy watching children play, participate in occasional community events, and experience the joy and energy that comes from being near a vibrant school community. These moments of connection bring smiles and brighten daily life.'
                    : '我们靠近小学的独特位置为长者提供了观看孩子们玩耍、参与社区活动的美好机会，体验来自活力校园社区的欢乐和能量。这些互动时刻带来微笑，点亮日常生活。'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Garden & Outdoor Living' : '花园与户外生活'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our private garden is a sanctuary for relaxation, gardening, and connecting with nature'
                : '我们的私家花园是放松、园艺和亲近自然的圣地'}
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
                {language === 'en' ? 'Therapeutic Gardening' : '园艺疗法'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Residents can participate in gardening activities, growing flowers, vegetables, and herbs. Gardening provides physical activity, mental stimulation, and a sense of accomplishment.'
                  : '长者可以参与园艺活动，种植花卉、蔬菜和草药。园艺提供身体活动、心理刺激和成就感。'}
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
                {language === 'en' ? 'Outdoor Relaxation Spaces' : '户外休闲空间'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === 'en'
                  ? 'Comfortable seating areas throughout the garden allow residents to enjoy fresh air, read, socialize, or simply watch the birds and butterflies.'
                  : '花园内舒适的座位区让长者享受新鲜空气、阅读、社交，或只是观赏鸟儿和蝴蝶。'}
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
              {language === 'en' ? 'Discover the tranquil beauty of our Shoreline home' : '探索我们岸线家园的宁静之美'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/Shoreline_exterior.png',
              '/images/Shoreline/Dining.png',
              '/images/Shoreline/Bedroom 1.png',
              '/images/Shoreline/Bedroom 2.png',
              '/images/Shoreline/Bedroom 3.png',
              '/images/Shoreline/Bathroom 2.png',
              '/images/Shoreline/Bathroom 1.png',
              '/images/Shoreline/External space.png',
              '/images/Shoreline/Living Room 1.png',
              '/images/Shoreline/Living Room 2.png',
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
                  alt={`Shoreline Home ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' ? 'Visit Our Shoreline Home' : '参观我们的岸线家园'}
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Experience the peace and beauty of our Shoreline location with a personal tour'
                : '通过个人参观体验我们岸线家园的宁静与美丽'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(214) 205-4091"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
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
