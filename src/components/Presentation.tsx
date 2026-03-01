import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '@/data/slides';

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Preload adjacent slide images
  useEffect(() => {
    [current - 1, current + 1, current + 2].forEach(i => {
      if (i >= 0 && i < slides.length && slides[i].bgImage) {
        const img = new Image();
        img.src = slides[i].bgImage!;
      }
    });
  }, [current]);

  const navigate = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowRight', ' ', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        navigate(current + 1);
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        navigate(current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigate(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigate(slides.length - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, navigate]);

  const slide = slides[current];
  const isTitle = slide.type === 'title';
  const isConclusion = slide.type === 'conclusion';
  const isCentered = isTitle || isConclusion;

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? '-30%' : '30%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background select-none">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image — NO blur, semi-transparent overlay */}
          {slide.bgImage && (
            <div className="absolute inset-0">
              <img
                src={slide.bgImage}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isCentered ? 'bg-background/70' : 'bg-background/65'}`} />
            </div>
          )}

          {/* Gradient fallback for slides without images */}
          {!slide.bgImage && (
            <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
          )}

          {/* Left accent bar */}
          {!isCentered && (
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/40 z-10" />
          )}

          {/* Slide Content */}
          <div
            className={`relative z-10 h-full flex flex-col ${
              isCentered ? 'items-center justify-center text-center px-10 md:px-20' : 'justify-center px-10 md:px-24'
            } py-12 md:py-16`}
          >
            {/* Section badge */}
            {slide.section && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className={`inline-block w-fit px-5 py-2 rounded-full text-sm md:text-base font-semibold mb-6 md:mb-8 ${slide.sectionClass}`}
              >
                {slide.section}
              </motion.span>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`font-display font-bold text-foreground leading-tight mb-4 md:mb-6 ${
                isTitle
                  ? 'text-5xl md:text-7xl lg:text-8xl max-w-5xl'
                  : isConclusion
                  ? 'text-4xl md:text-6xl lg:text-7xl max-w-4xl'
                  : 'text-4xl md:text-5xl lg:text-6xl'
              }`}
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            {slide.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className={`text-lg md:text-2xl text-muted-foreground leading-relaxed mb-8 ${
                  isCentered ? 'max-w-3xl' : 'max-w-4xl'
                }`}
              >
                {slide.subtitle}
              </motion.p>
            )}

            {/* Bullet points */}
            {slide.points && (
              <div className={`space-y-4 md:space-y-5 ${isCentered ? 'max-w-3xl' : 'max-w-5xl'}`}>
                {slide.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: isCentered ? 0 : -30,
                      y: isCentered ? 15 : 0,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                    className={`flex items-start gap-4 ${isCentered ? 'justify-start text-left' : ''}`}
                  >
                    <span
                      className={`mt-2.5 md:mt-3 w-3 h-3 rounded-full flex-shrink-0 ${
                        slide.dotClass || 'bg-primary'
                      }`}
                    />
                    <span className="text-base md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Stat highlight */}
            {slide.stat && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                className="mt-8 md:mt-10 flex items-baseline gap-4 bg-card/50 border border-border/50 rounded-2xl px-8 py-5 w-fit"
              >
                <span className="font-display text-5xl md:text-7xl font-bold text-primary">
                  {slide.stat.value}
                </span>
                <span className="text-base md:text-xl text-muted-foreground">
                  {slide.stat.label}
                </span>
              </motion.div>
            )}

            {/* Note */}
            {slide.note && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-6 md:mt-8 text-muted-foreground italic text-base md:text-lg border-l-2 border-primary/40 pl-4 max-w-3xl"
              >
                💡 {slide.note}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => navigate(current - 1)}
        className={`absolute left-4 md:left-5 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card/50 border border-border/50 transition-all duration-300 hover:bg-card/80 ${
          current === 0 ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={() => navigate(current + 1)}
        className={`absolute right-4 md:right-5 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card/50 border border-border/50 transition-all duration-300 hover:bg-card/80 ${
          current === slides.length - 1
            ? 'opacity-0 pointer-events-none'
            : 'opacity-60 hover:opacity-100'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 z-20">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-3 md:bottom-4 right-6 md:right-8 z-20 text-sm md:text-base text-muted-foreground/70 font-mono">
        {String(current + 1).padStart(2, '0')} / {slides.length}
      </div>

      {/* Click zones for navigation */}
      <div
        className="absolute left-0 top-0 bottom-12 w-[15%] z-10 cursor-pointer"
        onClick={() => navigate(current - 1)}
      />
      <div
        className="absolute right-0 top-0 bottom-12 w-[15%] z-10 cursor-pointer"
        onClick={() => navigate(current + 1)}
      />
    </div>
  );
};

export default Presentation;
