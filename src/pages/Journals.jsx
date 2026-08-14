import React from "react";
import { NavLink } from "react-router-dom";

function Journals({ journal }) {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="text-center mb-12 md:mb-20">

          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-[0.2em]">
            The Journal
          </span>

          <h1 className="font-headline-lg text-headline-lg mt-4 mb-5">
            Stories of Style, Substance, and Soul
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto italic">
            Explore our latest stories, fashion insights, craftsmanship,
            culture and the world of luxury.
          </p>

        </div>

        {/* Journal Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {journal?.map((item) => (

            <article
              key={item.id}
              className="group cursor-pointer"
            >

              {/* Image */}

              <div className="overflow-hidden mb-5 aspect-[4/3] bg-surface-container">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Meta */}

              <div className="flex items-center gap-3 mb-3">

                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                  {item.category}
                </span>

                <span className="w-1 h-1 rounded-full bg-on-surface-variant" />

                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  {item.readTime}
                </span>

              </div>

              {/* Title */}

              <h2 className="font-headline-md text-2xl md:text-3xl leading-tight mb-4 transition-opacity duration-300 group-hover:opacity-70">
                {item.title}
              </h2>

              {/* Description */}

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {item.description}
              </p>

              {/* Read More */}

              <NavLink
                to={`/journal/${item.id}`}
                className="mt-5 inline-flex items-center gap-2 font-label-caps text-label-caps border-b border-on-surface pb-1"
              >
                READ STORY

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NavLink>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Journals;