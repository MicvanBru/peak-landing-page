'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { testimonials, type Testimonial } from './testimonialData'

// Expandable text component for long testimonials
const ExpandableText = ({ text, maxLength = 280 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  
  const truncatedText = text.slice(0, maxLength) + '...';
  
  return (
    <>
      <span>{isExpanded ? text : truncatedText}</span>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-cyan-400 hover:text-cyan-300 font-medium underline transition-colors duration-200"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </>
  );
};

export default function TestimonialsSection() {
  // const featuredTestimonial = testimonials.find(t => t.type === 'featured');
  const otherTestimonials = testimonials.filter(t => t.type !== 'featured');
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoPlaySpeed] = useState(6000); // Configurable speed in milliseconds
  
  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Update items per page on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate pagination
  const totalPages = Math.ceil(otherTestimonials.length / itemsPerPage);
  const maxIndex = totalPages - 1;
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlaySpeed); // Configurable speed
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, totalPages, autoPlaySpeed]);
  
  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  // Get current testimonials for display
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return otherTestimonials.slice(startIndex, startIndex + itemsPerPage);
  };
  
  return (
    <section id="testimonials" className="py-20 lg:py-32 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results From Real People
          </h2>
          <p className="text-xl text-cyan-400 font-semibold">
            Business Owners Who Got Their Lives Back
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative overflow-hidden pt-6 pb-6"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-200" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform duration-200" />
              </button>
            </>
          )}
          
          {/* Testimonials Container */}
          <div className="px-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 100;
                if (info.offset.x > threshold && currentIndex > 0) {
                  goToPrevious();
                } else if (info.offset.x < -threshold && currentIndex < maxIndex) {
                  goToNext();
                }
              }}
              className={`grid gap-8 cursor-grab active:cursor-grabbing min-h-[350px] ${
                itemsPerPage === 1 ? 'grid-cols-1' :
                itemsPerPage === 2 ? 'grid-cols-1 md:grid-cols-2' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {testimonial.type === 'video' && <VideoLayout {...testimonial} />}
                  {testimonial.type === 'picture' && <PictureLayout {...testimonial} />}
                  {testimonial.type === 'text' && <TextLayout {...testimonial} />}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Dots Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50'
                      : 'bg-neutral-600 hover:bg-neutral-500 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 5).map((testimonial) => (
                <div key={testimonial.id} className="w-8 h-8 rounded-full border-2 border-neutral-900 overflow-hidden">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${testimonial.accentColor || 'from-cyan-400 to-cyan-500'} flex items-center justify-center text-xs font-bold text-black`}>
                      {testimonial.initials || testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              <span className="text-white font-semibold">30+ businesses</span> transformed and counting
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Featured Layout - Hero style similar to SocialProof
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FeaturedLayout = ({ name, company, quote, initials, accentColor, image }: Testimonial) => (
  <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 lg:p-12 hover:border-cyan-500/40 transition-all duration-500">
    {/* Subtle glow effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    {/* Quote mark */}
    <div className="absolute -top-6 left-8">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>

    <div className="relative z-10 space-y-8">
      {/* Testimonial text */}
      <blockquote className="text-base sm:text-xl lg:text-2xl text-white leading-relaxed font-medium italic text-center">
        &quot;{quote}&quot;
      </blockquote>

      {/* Attribution section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          {image ? (
            <Image 
              src={image} 
              alt={name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500/30"
            />
          ) : (
            <div className={`w-20 h-20 bg-gradient-to-br ${accentColor || 'from-cyan-500 to-cyan-600'} rounded-full flex items-center justify-center border-2 border-cyan-500/30 font-bold text-2xl text-black`}>
              {initials || name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md opacity-50"></div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-white mb-1">{name}</p>
          {company && <p className="text-lg text-cyan-400 font-semibold">{company}</p>}
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 opacity-10">
      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-transparent rounded-full blur-3xl"></div>
    </div>
  </div>
)

// Video Layout - For video testimonials with embed
const VideoLayout = ({ name, role, company, quote, videoUrl, videoPlatform, initials, accentColor }: Testimonial) => {
  const getEmbedUrl = (url: string, platform?: string) => {
    if (!url) return '';
    
    if (platform === 'youtube' || url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop() 
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (platform === 'vimeo' || url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  return (
    <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
      {/* Video Embed */}
      {videoUrl && (
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={getEmbedUrl(videoUrl, videoPlatform)}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Quote */}
        <blockquote className="text-neutral-300 leading-relaxed text-base italic flex-1 mb-6">
          &quot;<ExpandableText text={quote} />&quot;
        </blockquote>
        
        {/* Attribution */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
          <div className={`w-12 h-12 bg-gradient-to-br ${accentColor || 'from-cyan-400 to-cyan-500'} rounded-full flex items-center justify-center font-bold text-black`}>
            {initials || name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-white font-semibold text-lg">{name}</p>
            {(role || company) && (
              <p className="text-cyan-400 text-sm">
                {role}{role && company ? ', ' : ''}{company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Picture Layout - Half/half design for image testimonials
const PictureLayout = ({ name, role, company, quote, image, initials, accentColor, results }: Testimonial) => (
  <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group h-full">
    {/* Content Container */}
    <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar/Image */}
        <div className="flex-shrink-0">
          {image ? (
            <Image 
              src={image} 
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
            />
          ) : (
            <div className={`w-12 h-12 bg-gradient-to-br ${accentColor || 'from-cyan-400 to-cyan-500'} rounded-full flex items-center justify-center font-bold text-black`}>
              {initials || name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        {/* Name and Role */}
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">{name}</p>
          {(role || company) && (
            <p className="text-cyan-400 text-sm">
              {role}{role && company ? ', ' : ''}{company}
            </p>
          )}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="flex-1 relative overflow-hidden">
        <div className="absolute -top-2 -left-2 text-cyan-500/30 text-4xl font-bold">&ldquo;</div>
        <p className="text-neutral-300 leading-relaxed text-base italic relative z-10">
          <ExpandableText text={quote} />
        </p>
      </blockquote>

      {/* Results if any */}
      {results && results.length > 0 && (
        <div className="mt-4 pt-4 border-t border-neutral-800">
          <div className="space-y-1">
            {results.map((result, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-neutral-400">{result}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
  </div>
)

// Text Layout - Clean card design for text-only testimonials
const TextLayout = ({ name, role, company, quote, initials, accentColor, image }: Testimonial) => (
  <div className="relative group h-full">
    <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
      {/* Quote Mark */}
      <div className="absolute -top-4 left-8">
        <div className={`w-8 h-8 bg-gradient-to-br ${accentColor || 'from-cyan-400 to-cyan-500'} rounded-full flex items-center justify-center`}>
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      <div className="h-full flex flex-col">
        {/* Quote */}
        <blockquote className="text-neutral-300 leading-relaxed text-base italic flex-1 mb-6">
          &quot;<ExpandableText text={quote} />&quot;
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
          {image ? (
            <Image 
              src={image} 
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
            />
          ) : (
            <div className={`w-12 h-12 bg-gradient-to-br ${accentColor || 'from-cyan-400 to-cyan-500'} rounded-full flex items-center justify-center font-bold text-black`}>
              {initials || name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
          <div>
            <p className="text-white font-semibold text-lg">{name}</p>
            {(role || company) && (
              <p className="text-cyan-400 text-sm">
                {role}{role && company ? ', ' : ''}{company}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
    </div>
  </div>
)