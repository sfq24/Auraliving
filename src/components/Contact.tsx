import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'immediate',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setFormData({ name: '', phone: '', email: '', interest: 'immediate', message: '' });
  //   }, 3000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("formhandler.auralivingcare.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Thank you! Your message has been sent. We will contact you as soon as possible!");
      } else {
        alert("Oops! Something went wrong. Please call 2142054091");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    placeholder={t.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    placeholder={t.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.interest}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                  >
                    <option value="immediate">{t.form.interestOptions.immediate}</option>
                    <option value="planning">{t.form.interestOptions.planning}</option>
                    <option value="exploring">{t.form.interestOptions.exploring}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg resize-none"
                    placeholder={t.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <span>✓ {language === 'en' ? 'Sent!' : '已发送！'}</span>
                  ) : (
                    <>
                      <span>{t.form.submit}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.info.address}</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${t.info.phone}`}
                  className="flex items-start space-x-4 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">{t.callUs}</p>
                    <p className="text-xl font-bold">{t.info.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${t.info.email}`}
                  className="flex items-start space-x-4 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-bold">{t.info.email}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">{language === 'en' ? 'Hours' : '营业时间'}</p>
                    <p className="text-lg font-bold">{t.info.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-gray-700">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">{language === 'en' ? 'Location' : '地址'}</p>
                    <p className="text-lg font-bold">{t.info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172183.71788215753!2d-122.43193469999999!3d47.6061389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Seattle Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
