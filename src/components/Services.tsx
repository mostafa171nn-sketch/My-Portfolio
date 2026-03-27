'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
className="py-20 px-6 md:px-12 lg:px-24 bg-[#3B1C32]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-2xl shadow-white/30 text-6xl tracking-tight"
        >
          {t('title') || 'Services'}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="group bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40 hover:border-purple-500/60 hover:bg-gray-700/70 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
          >

            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('1.title') || 'Web Development'}</h3>
            <p className="text-gray-300 leading-relaxed">{t('1.desc') || 'Professional web development using latest technologies'}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40 hover:border-blue-500/60 hover:bg-gray-700/70 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
          >

            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2h12a1 1 0 100-2H3zM3 7a1 1 0 000 2h12a1 1 0 100-2H3zM3 11a1 1 0 000 2h12a1 1 0 100-2H3zM3 15a1 1 0 000 2h12a1 1 0 100-2H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('2.title') || 'UI/UX Design'}</h3>
            <p className="text-gray-300 leading-relaxed">{t('2.desc') || 'Beautiful user interfaces focused on user experience'}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40 hover:border-emerald-500/60 hover:bg-gray-700/70 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20"
          >

            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('3.title') || 'Responsive Design'}</h3>
            <p className="text-gray-300 leading-relaxed">{t('3.desc') || 'Perfect on all devices from phones to large screens'}</p>
          </motion.div>

          {/* Add more services matching JSON structure */}
        </div>
      </div>
    </motion.section>
  );
}

