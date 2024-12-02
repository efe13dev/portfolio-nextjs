import { motion } from 'framer-motion';
import { World } from './ui/globe';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export function Hero() {
  return (
    <section
      id='about'
      className='grid md:grid-cols-2  items-center  min-h-[calc(80vh-6rem)]'
    >
      {/* Columna de texto */}
      <div className='space-y-6'>
        <motion.h1
          className='text-5xl font-bold text-gray-900 dark:text-white'
          variants={fadeInUp}
        >
          Juan Desarrollador
        </motion.h1>
        <motion.p
          className='text-2xl font-semibold text-gray-700 dark:text-gray-300'
          variants={fadeInUp}
        >
          Desarrollador Full Stack
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className='text-lg text-gray-600 dark:text-gray-400'
        >
          Soy un desarrollador apasionado con experiencia en crear aplicaciones
          web modernas y eficientes. Me especializo en React, Next.js y Node.js,
          y siempre estoy buscando aprender nuevas tecnologías.
        </motion.p>
      </div>

      {/* Columna de imagen */}
      <motion.div
        className='flex justify-center items-center w-full h-full'
        variants={fadeInRight}
      >
        <div className='relative w-full h-[400px] md:h-[600px]'>
          <World
            globeConfig={{
              pointSize: 4,
              globeColor: '#11a1c4',
              showAtmosphere: true,
              atmosphereColor: '#3a64ff',
              atmosphereAltitude: 0.15,
              emissive: '#062d56',
              emissiveIntensity: 0.1,
              shininess: 0.9,
              polygonColor: 'rgba(255,255,255,1)',
              ambientLight: '#38bdf8',
              directionalLeftLight: '#ffffff',
              directionalTopLight: '#ffffff',
              pointLight: '#ffffff',
              arcTime: 1000,
              arcLength: 0.9,
              rings: 1,
              maxRings: 3,
              initialPosition: {
                lat: 40.4168,
                lng: -3.7038
              },
              autoRotate: true,
              autoRotateSpeed: 0.5
            }}
            data={[
              {
                order: 1,
                startLat: 40.4168,
                startLng: -3.7038,
                endLat: 48.8566,
                endLng: 2.3522,
                arcAlt: 0.2,
                color: '#60A5FA'
              },
              {
                order: 2,
                startLat: 51.5074,
                startLng: -0.1278,
                endLat: 40.7128,
                endLng: -74.006,
                arcAlt: 0.3,
                color: '#F472B6'
              },
              {
                order: 3,
                startLat: 35.6762,
                startLng: 139.6503,
                endLat: -33.8688,
                endLng: 151.2093,
                arcAlt: 0.25,
                color: '#4ADE80'
              },
              {
                order: 4,
                startLat: -33.8688,
                startLng: 151.2093,
                endLat: -23.5505,
                endLng: -46.6333,
                arcAlt: 0.35,
                color: '#FCD34D'
              },
              {
                order: 5,
                startLat: 55.7558,
                startLng: 37.6173,
                endLat: 35.6762,
                endLng: 139.6503,
                arcAlt: 0.28,
                color: '#C084FC'
              },
              {
                order: 6,
                startLat: 1.3521,
                startLng: 103.8198,
                endLat: 31.2304,
                endLng: 121.4737,
                arcAlt: 0.15,
                color: '#67E8F9'
              },
              {
                order: 7,
                startLat: -23.5505,
                startLng: -46.6333,
                endLat: 40.4168,
                endLng: -3.7038,
                arcAlt: 0.4,
                color: '#FB923C'
              },
              {
                order: 8,
                startLat: 48.8566,
                startLng: 2.3522,
                endLat: 55.7558,
                endLng: 37.6173,
                arcAlt: 0.2,
                color: '#BEF264'
              }
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}
