import Image from "next/image";

import { GallerySection } from "../components/gallery-section";
import { features, menus, metrics, slides, testimonials } from "./home-content";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12.2 9.4 18 20 6" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3c3.2 3.7 5.7 6.4 5.7 10A5.7 5.7 0 1 1 6.3 13c0-3.6 2.5-6.3 5.7-10Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour a l'accueil">
          <span className="brand__mark">MM</span>
          <span className="brand__text">
            <strong>Marc Mercier</strong>
            <span>Reception mariage</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#savoir-faire">Savoir-faire</a>
          <a href="#menus">Cartes & menus</a>
          <a href="#galerie">Galerie</a>
          <a href="#avis">Avis</a>
        </nav>

        <a className="button button--ghost button--sm" href="#contact">
          Demander un devis
        </a>
      </header>

      <main id="top">
        <section className="section section--intro" id="savoir-faire">
          <div className="section-grid">
            <div className="section-copy">
              <p className="eyebrow">Traiteur de mariage haut de gamme</p>
              <h1>Notre Savoir-Faire Culinaire</h1>
              <p className="lead">
                Nous imaginons des receptions sur mesure ou la gastronomie, le rythme du service et
                l'elegance de la table racontent la meme histoire : celle d'un mariage parfaitement
                orchestre.
              </p>

              <ul className="feature-list">
                {features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-icon" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a className="button" href="#menus">
                En savoir plus sur nous
              </a>
            </div>

            <div className="editorial-collage">
              <article className="collage-frame collage-frame--large">
                <div className="collage-image collage-image--hero">
                  <Image
                    className="cover-image"
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                    alt="Chef dressant une assiette"
                    fill
                    priority
                    sizes="(max-width: 1100px) 100vw, 38vw"
                  />
                </div>
              </article>

              <article className="collage-frame collage-frame--medium">
                <div className="collage-image collage-image--portrait">
                  <Image
                    className="cover-image"
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80"
                    alt="Decoration de table de mariage"
                    fill
                    sizes="(max-width: 1100px) 40vw, 16vw"
                  />
                </div>
              </article>

              <article className="collage-frame collage-frame--small">
                <div className="collage-image collage-image--square">
                  <Image
                    className="cover-image"
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
                    alt="Salle de reception preparee pour un mariage"
                    fill
                    sizes="(max-width: 1100px) 40vw, 18vw"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="menus">
          <div className="menu-layout">
            <div className="menu-overview">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Des propositions modulables</p>
                  <h2>Nos Cartes & Menus</h2>
                </div>
                <p>
                  Cocktail d'accueil, diner assis, buffet de fin de soiree ou brunch du lendemain :
                  chaque formule s'adapte a votre lieu, vos envies et a la saison.
                </p>
              </div>

              <a className="button button--ghost button--sm" href="#contact">
                En savoir plus sur nous
              </a>

              <div className="menu-card-grid">
                {menus.map((menu) => (
                  <article className="menu-card" key={menu.title}>
                    <div className="menu-card__media">
                      <Image
                        className="cover-image"
                        src={menu.image}
                        alt={menu.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 22vw"
                      />
                    </div>
                    <div className="menu-card__body">
                      <h3>{menu.title}</h3>
                      <p>{menu.description}</p>
                      <div className="menu-tags">
                        {menu.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <a className="button button--dark button--sm" href="#contact">
                        Voir ce menu
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="menu-editorial">
              <div className="menu-editorial__media">
                <div className="menu-editorial__stack">
                  <div className="media-panel media-panel--paper">
                    <div className="editorial-image editorial-image--paper">
                      <Image
                        className="cover-image"
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80"
                        alt="Papeterie et details de table"
                        fill
                        sizes="(max-width: 860px) 100vw, 16vw"
                      />
                    </div>
                  </div>
                  <div className="note-card">
                    <span className="note-icon" aria-hidden="true">
                      <DropIcon />
                    </span>
                    <p>
                      Nous nous adaptons a votre lieu, au planning de la journee et au nombre
                      d'invites.
                    </p>
                  </div>
                </div>

                <div className="menu-editorial__feature">
                  <div className="media-panel media-panel--feature">
                    <div className="editorial-image editorial-image--feature">
                      <Image
                        className="cover-image"
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                        alt="Table de mariage fleurie avec champagne"
                        fill
                        sizes="(max-width: 860px) 100vw, 28vw"
                      />
                    </div>
                  </div>
                  <div className="note-card">
                    <span className="note-icon" aria-hidden="true">
                      <DropIcon />
                    </span>
                    <p>
                      Nos menus peuvent inclure options vegetariennes, vegan et sans allergenes sur
                      demande.
                    </p>
                  </div>
                </div>
              </div>

              <a className="button" href="#contact">
                Voir nos menus
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="galerie">
          <div className="section-heading section-heading--gallery">
            <div>
              <p className="eyebrow">Moments et details</p>
              <h2>Galerie Photos</h2>
            </div>
            <p>
              Decouvrez quelques ambiances de mariages, tables d'honneur et instants de service.
            </p>
          </div>

          <GallerySection slides={slides} />
        </section>

        <section className="section" id="avis">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Des mariages accompagnes avec soin</p>
            <h2>Ils Nous Ont Fait Confiance</h2>
            <p>
              Des couples qui voulaient une reception a la fois chaleureuse, precise et tres
              elegante jusque dans les moindres details.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <div className="testimonial-card__media">
                  <div className="testimonial-image">
                    <Image
                      className="cover-image"
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 24vw"
                    />
                  </div>
                </div>
                <div className="testimonial-card__body">
                  <p className="quote">{testimonial.quote}</p>
                  <span className="author">{testimonial.author}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="contact-panel">
            <p className="eyebrow eyebrow--light">Une reception a votre image</p>
            <h2>Parlons de votre mariage</h2>
            <p>
              Partagez votre date, votre lieu et l'atmosphere recherchee. Nous revenons vers vous
              avec une premiere orientation culinaire et scenographique.
            </p>
            <div className="contact-actions">
              <a className="button button--light" href="mailto:contact@exemple.fr">
                Demander un devis
              </a>
              <a className="button button--ghost-light" href="#menus">
                Feuilleter les menus
              </a>
            </div>
          </div>

          <div className="contact-metrics">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <strong>{metric.label}</strong>
                <span>{metric.description}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Marc Mercier Reception</p>
        <p>Site vitrine de demonstration pour traiteur de mariage</p>
      </footer>
    </div>
  );
}
