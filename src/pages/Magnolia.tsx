import { motion } from 'framer-motion';
import { MapPin, Star, Trees, Heart, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { SchemaOrg } from '../components/SchemaOrg';

export const Magnolia = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <SEOHead
        title="Magnolia Adult Family Home Seattle | Aura Living"
        description="Aura Living Magnolia is a premium adult family home in Seattle's prestigious Magnolia neighborhood. 24/7 nursing care, luxury environment, walking distance to parks."
        path="/homes/magnolia"
      />
      <SchemaOrg type="magnolia" />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-emerald-700 transition-colors">{language === 'en' ? 'Home' : '首页'}</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><a href="/#our-homes" className="hover:text-emerald-700 transition-colors">{language === 'en' ? 'Our Homes' : '我们的家园'}</a></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-gray-900 font-medium">Magnolia</li>
          </ol>
        </div>
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50"
            style={{
              backgroundImage: 'url(/images/magnolia_living_room.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-blue-900/60 to-emerald-800/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === 'en' ? 'Aura Living - Magnolia' : '奥若养老 - 马格诺利亚'}
            </h1>
            <div className="flex items-center justify-center text-white/90 text-xl mb-8">
              <MapPin className="w-6 h-6 mr-2" />
              <span>{language === 'en' ? 'Magnolia Neighborhood, Seattle' : '马格诺利亚社区，西雅图'}</span>
            </div>
            <p className="text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Experience luxury senior living in one of Seattle\'s most prestigious neighborhoods'
                : '在西雅图最负盛名的社区之一体验奢华养老生活'}
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
              {language === 'en' ? 'Why Choose Magnolia?' : '为什么选择马格诺利亚？'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our Magnolia location offers the perfect blend of upscale neighborhood living and comprehensive care'
                : '我们的马格诺利亚家园完美融合了高端社区生活和全方位护理'}
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
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Elite Neighborhood' : '富人社区'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Located in one of Seattle\'s most desirable areas with stunning views and peaceful surroundings'
                  : '位于西雅图最理想的地段之一，拥有迷人景观和宁静环境'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trees className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Walking Distance to Parks' : '步行到公园'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Easy access to beautiful parks and green spaces for outdoor activities and fresh air'
                  : '轻松步行至美丽的公园和绿地，享受户外活动和新鲜空气'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Premium Care' : '优质护理'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'en'
                  ? '24/7 professional nursing care with personalized attention in a luxurious setting'
                  : '24小时专业护理服务，在奢华环境中提供个性化关怀'}
              </p>
            </motion.div>
          </div>
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
              {language === 'en' ? 'Photo Gallery' : '家园照片'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Take a visual tour of our beautiful Magnolia home' : '通过照片了解我们美丽的马格诺利亚家园'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/magnolia_living_room.png', alt: 'Aura Living Magnolia living room - Seattle adult family home' },
              { src: '/images/Magnolia/Front Desk 2.png', alt: 'Aura Living Magnolia reception area - professional senior care Seattle' },
              { src: '/images/Magnolia/Kitchen.png', alt: 'Magnolia adult family home kitchen - home-cooked meals for seniors' },
              { src: '/images/Magnolia/Living Room.png', alt: 'Magnolia senior care home common living room - Aura Living Seattle' },
              { src: '/images/Magnolia/Restroom.png', alt: 'Magnolia adult family home accessible bathroom - Aura Living' },
              { src: '/images/Magnolia/Bedroom.jpg', alt: 'Private bedroom at Magnolia adult family home Seattle - Aura Living' },
              { src: '/images/Magnolia/Front Desk.png', alt: 'Aura Living Magnolia front desk - 24/7 senior care staff Seattle' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' ? 'Ready to Visit?' : '准备参观？'}
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Schedule a personal tour of our Magnolia home and experience the difference firsthand'
                : '预约参观我们的马格诺利亚家园，亲身体验与众不同'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(800) 490-1990"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(800) 490-1990</span>
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
