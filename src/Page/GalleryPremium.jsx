import React, { useState } from 'react';

// Apni images import karo
// import img1 from '../assets/gallery/1.jpg';
// import img2 from '../assets/gallery/2.jpg';
// import img3 from '../assets/gallery/3.jpg';
// import img4 from '../assets/gallery/4.jpg';
// import img5 from '../assets/gallery/5.jpg';
// import img6 from '../assets/gallery/6.jpg';
// import img7 from '../assets/gallery/7.jpg';
// import img8 from '../assets/gallery/8.jpg';
import DrSaurabhPhoto from "../assets/DrSaurabhPhoto.png"

const galleryImages = [
  {
    id: 1,
    src: DrSaurabhPhoto,
    category: 'Surgery',
    title: 'Knee Replacement Surgery',
  },
  {
    id: 2,
    src: DrSaurabhPhoto,
    category: 'Hospital',
    title: 'Modern Orthopedic Facility',
  },
  {
    id: 3,
    src: DrSaurabhPhoto,
    category: 'Patients',
    title: 'Post Surgery Recovery',
  },
  {
    id: 4,
    src: DrSaurabhPhoto,
    category: 'Surgery',
    title: 'Advanced Joint Procedure',
  },
  {
    id: 5,
    src: DrSaurabhPhoto,
    category: 'Events',
    title: 'Medical Awareness Camp',
  },
  {
    id: 6,
    src: DrSaurabhPhoto,
    category: 'Hospital',
    title: 'Operation Theatre',
  },
  {
    id: 7,
    src: DrSaurabhPhoto,
    category: 'Patients',
    title: 'Successful Recovery',
  },
  {
    id: 8,
    src: DrSaurabhPhoto,
    category: 'Awards',
    title: 'Professional Recognition',
  },
];

const categories = ['All', 'Surgery', 'Hospital', 'Patients', 'Events', 'Awards'];

export default function GalleryPremium() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className='min-h-screen bg-white'>
      {/* HERO SECTION */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20'>
        <div className='absolute inset-0 bg-black/10'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6'>
            <div className='w-2 h-2 bg-blue-300 rounded-full animate-pulse'></div>
            <span className='text-blue-100 text-sm font-medium'>Orthopedic Excellence</span>
          </div>

          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Gallery of Care
            <span className='block text-blue-300'>& Recovery</span>
          </h1>

          <p className='text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
            Explore moments from surgeries, patient recoveries, hospital facilities,
            and the compassionate orthopedic care provided by Dr. Saurabh Tiwari.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-6 text-white/90'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-300'>500+</div>
              <div className='text-sm'>Successful Procedures</div>
            </div>
            <div className='w-px bg-white/20 hidden sm:block'></div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-300'>1000+</div>
              <div className='text-sm'>Patients Treated</div>
            </div>
            <div className='w-px bg-white/20 hidden sm:block'></div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-300'>24/7</div>
              <div className='text-sm'>Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className='sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  ${
                    selectedCategory === category
                      ? 'bg-blue-950 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-900 hover:scale-105'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className='py-12 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                Photo Gallery
              </h2>
              <p className='text-gray-600'>
                {filteredImages.length} photos in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
              </p>
            </div>

            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>Original image quality preserved</span>
            </div>
          </div>

          {/* MASONRY GALLERY */}
          <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className='break-inside-avoid group cursor-pointer'
                onClick={() => setLightboxImage(image)}
              >
                <div className='relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100'>
                  {/* Image - Original aspect ratio preserved */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className='w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105'
                    loading='lazy'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end'>
                    <div className='p-5 text-white w-full'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='inline-block px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-semibold'>
                          {image.category}
                        </span>
                        <div className='w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                          <svg
                            className='w-5 h-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 10l4.553-4.553a2.121 2.121 0 00-3-3L12 7m3 3l-6 6m6-6L9 4m0 12l-4.553 4.553a2.121 2.121 0 003 3L12 17'
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className='font-semibold text-lg leading-tight'>
                        {image.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtle shine effect */}
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className='absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent rotate-12 transform group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className='text-center py-20'>
              <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-12 h-12 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                No photos found
              </h3>
              <p className='text-gray-600'>
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-6xl text-blue-200 mb-6'>“</div>
          <blockquote className='text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8'>
            Every patient’s recovery is a story of hope, resilience, and dedicated orthopedic care.
          </blockquote>
          <div className='flex items-center justify-center gap-4'>
            <div className='w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>ST</span>
            </div>
            <div className='text-left'>
              <div className='font-bold text-gray-900'>Dr. Saurabh Tiwari</div>
              <div className='text-blue-700'>Orthopedic & Joint Replacement Surgeon</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='py-16 bg-blue-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Need Orthopedic Consultation?
          </h2>
          <p className='text-blue-100 text-lg mb-8 max-w-2xl mx-auto'>
            Get expert diagnosis and advanced treatment for joint pain, fractures,
            sports injuries, spine disorders, and joint replacement procedures.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-950 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg'>
              Book Appointment
            </button>

            <button className='border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-950 transition-all duration-300 hover:scale-105'>
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            className='absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10'
            onClick={() => setLightboxImage(null)}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className='relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className='max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl'
            />

            {/* Image Info */}
            <div className='mt-6 text-center text-white'>
              <div className='inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3'>
                {lightboxImage.category}
              </div>
              <h3 className='text-2xl font-bold mb-2'>{lightboxImage.title}</h3>
              <p className='text-gray-300'>Dr. Saurabh Tiwari Orthopedic Gallery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}