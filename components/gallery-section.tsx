"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

export type GallerySlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
  thumbTitle: string;
};

type GallerySectionProps = {
  slides: GallerySlide[];
};

export function GallerySection({ slides }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex((nextIndex + slides.length) % slides.length);
    });
  };

  const handleKeyNavigation = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      goToSlide(activeIndex + 1);
    }
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      handleKeyNavigation(event);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleKeyNavigation]);

  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];
  const secondarySlides = [1, 2, 3].map((offset) => ({
    ...slides[(activeIndex + offset) % slides.length],
    index: (activeIndex + offset) % slides.length
  }));

  return (
    <div className="gallery-layout">
      <div className="gallery-slider">
        <button
          className="gallery-nav gallery-nav--prev"
          type="button"
          aria-label="Image precedente"
          onClick={() => goToSlide(activeIndex - 1)}
        >
          &lt;
        </button>

        <div className="gallery-frame">
          <div className="gallery-image-wrap">
            <Image
              className="cover-image"
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 46vw"
            />
          </div>
        </div>

        <button
          className="gallery-nav gallery-nav--next"
          type="button"
          aria-label="Image suivante"
          onClick={() => goToSlide(activeIndex + 1)}
        >
          &gt;
        </button>

        <div className="gallery-caption">
          <div className="gallery-caption__text">
            <h3>{activeSlide.title}</h3>
            <p>{activeSlide.description}</p>
          </div>
          <a className="button button--ghost button--sm" href="#contact">
            Voir notre offre photos
          </a>
        </div>

        <div className="gallery-dots" aria-label="Navigation galerie">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`gallery-dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Voir l'image ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="gallery-side">
        <div className="gallery-side__grid">
          <div className="gallery-side__stack">
            {secondarySlides.slice(0, 2).map((slide) => (
              <button
                key={slide.src}
                className="gallery-side__card"
                type="button"
                onClick={() => goToSlide(slide.index)}
              >
                <span className="media-panel">
                  <span className="gallery-thumb-wrap">
                    <Image
                      className="cover-image"
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 1100px) 100vw, 18vw"
                    />
                  </span>
                </span>
                <span className="gallery-side__label">{slide.thumbTitle}</span>
              </button>
            ))}
          </div>

          <button
            className="gallery-side__card gallery-side__card--feature"
            type="button"
            onClick={() => goToSlide(secondarySlides[2].index)}
          >
            <span className="media-panel media-panel--tall">
              <span className="gallery-thumb-wrap gallery-thumb-wrap--tall">
                <Image
                  className="cover-image"
                  src={secondarySlides[2].src}
                  alt={secondarySlides[2].alt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 22vw"
                />
              </span>
            </span>
            <span className="gallery-side__label">{secondarySlides[2].thumbTitle}</span>
          </button>
        </div>

        <a className="button button--ghost" href="#contact">
          Voir toute la galerie
        </a>
      </div>
    </div>
  );
}
