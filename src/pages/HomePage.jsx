import { NavLink } from "react-router-dom";
import NewsLetter from "../components/newsletter/NewsLetter";

export default function HomePage({
  products,
  designers,
  journal,
}) {
  console.log("designers:", designers);
  console.log("journal:", journal);

  return (
    <main>

      {/* Hero Section */}

      <section className="relative w-full min-h-[680px] md:min-h-[760px] flex items-center overflow-hidden bg-neutral-100">

        {/* Image */}

        <div className="absolute right-0 top-0 w-full md:w-[58%] h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcvkU5g20GwbrgP9DQDXowSUWZEelyH5mpX3A9Mk6ekhqurDbjtEcpZanZ-j7rOwi5O-0iFkwarO7LA1fsbwumcUzFRQfRz8I99G_j4NaOZfVNhgmEM9pHe8i1W_xNzjbTK3YHMy-9deXlPxrTSgkfZeDkT8OEIAPWA1wmlYYvexTbxiUjVara4xmlUbN83MxfFMTC3CR8AsLs1TrQfPJFEpMWOE8eWvhuNh4TuVNnEvrh35jnYQ7D"
            alt="Autumn Collection"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content Background */}

        <div className="absolute left-0 top-0 w-full md:w-[58%] h-full bg-gradient-to-r from-neutral-100 via-neutral-100/95 to-transparent" />

        {/* Content */}

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">

          <div className="max-w-xl">

            <p className="font-label-caps text-label-caps uppercase tracking-[0.3em] mb-5 text-on-surface-variant">
              Autumn / Winter 2024
            </p>

            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-[0.95]">
              The Autumn
              <br />
              Collection
            </h1>

            <p className="max-w-md text-on-surface-variant mb-10 leading-relaxed">
              Discover refined silhouettes, rich textures and timeless pieces
              designed for the autumn season.
            </p>

            <div className="flex flex-wrap gap-3">

              <NavLink
                to="/women"
                className={({ isActive }) =>
                  `px-8 py-4 font-label-caps text-label-caps border transition-all duration-300 ${
                    isActive
                      ? "bg-on-surface text-white border-on-surface"
                      : "bg-transparent text-on-surface border-on-surface hover:bg-on-surface hover:text-white"
                  }`
                }
              >
                SHOP WOMEN
              </NavLink>

              <NavLink
                to="/men"
                className={({ isActive }) =>
                  `px-8 py-4 font-label-caps text-label-caps border transition-all duration-300 ${
                    isActive
                      ? "bg-on-surface text-white border-on-surface"
                      : "bg-transparent text-on-surface border-on-surface hover:bg-on-surface hover:text-white"
                  }`
                }
              >
                SHOP MEN
              </NavLink>

            </div>
          </div>
        </div>
      </section>

      {/* Trending Styles */}

      <section className="py-section-gap max-w-[1440px] mx-auto px-margin-desktop">

        <div className="flex justify-between items-end mb-16 reveal-on-scroll">

          <div>

            <h2 className="font-headline-lg text-headline-lg">
              Trending Styles
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
              Curated pieces that define the modern wardrobe, selected by our
              global style editors.
            </p>

          </div>

          <NavLink
            to="/new"
            className="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            VIEW ALL TRENDS
          </NavLink>

        </div>

        <div className="grid grid-cols-12 gap-gutter h-[800px]">

          {/* Large Feature */}

          <div className="col-span-12 md:col-span-7 h-full relative group overflow-hidden reveal-on-scroll">

            <img
              src="/images/brand/campaign-fashion.png"
              alt="Fashion campaign"
              data-alt="A full-length fashion shot of two models in contrasting tailored silk and leather outfits. They are positioned in a sculptural pose in a bright, white-walled studio with sharp daylight streaming through large windows. The aesthetic is clean, minimalist, and luxury editorial. The colors are muted neutrals: sand, slate, and bone white."
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-10 left-10 text-white">

              <span className="bg-tertiary text-on-tertiary px-3 py-1 font-label-caps text-[10px] tracking-widest uppercase mb-4 inline-block">
                Featured
              </span>

              <h3 className="font-headline-md text-headline-md">
                Monochrome Minimal
              </h3>

              <NavLink
                to="/new"
                className="font-label-caps text-label-caps underline underline-offset-4 mt-4 inline-block"
              >
                EXPLORE SELECTION
              </NavLink>

            </div>
          </div>

          {/* Vertical Small */}

          <div className="col-span-12 md:col-span-5 flex flex-col gap-gutter h-full">

            {/* Accessories */}

            <div
              className="h-1/2 relative group overflow-hidden reveal-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >

              <img
                src="images/products/architectural-leather-tote/detail.png"
                alt="Luxury leather handbag"
                data-alt="Close-up detail of a luxury leather handbag with gold hardware, resting on a marble surface. The lighting is soft and warm, highlighting the fine grain of the leather. The palette is dominated by deep forest green and cream marble textures, exuding opulence and craftsmanship."
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                <NavLink
                  to="/collection"
                  className="text-white font-label-caps text-label-caps border border-white px-6 py-3"
                >
                  SHOP ACCESSORIES
                </NavLink>

              </div>
            </div>

            {/* Small Editorial Images */}

            <div className="h-1/2 grid grid-cols-2 gap-gutter">

              <div
                className="relative group overflow-hidden reveal-on-scroll"
                style={{ transitionDelay: "200ms" }}
              >

                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASClx4sIQPGTNWKjR2geA_4Aol51NTnZd2b23l8SOLEIwxDchXdL_LQ_fTo8Zw6uLKc1K6vz6vjWiHnxFogdYhJCCfqxkerxxVinfT7rKcigiknjegmH6oYjXfjlI3BCKuEAnPIvSfOTo_cL2SES1GF3_YJDL2Q7h7UAn-bThXU7cjEkuJEJbIKO_tftpRbbmqfTT4WSMnrQ73jL9D-vepP0Hb99YYw0B0Z09d5AXYKvDUmsT1MurF"
                  alt="Luxury designer loafers"
                  data-alt="Minimalist shot of luxury designer loafers in polished black calfskin leather on a neutral grey background. The lighting is sharp, creating a professional and clean studio look. High-end footwear photography with deep shadows and crisp highlights."
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div
                className="relative group overflow-hidden reveal-on-scroll"
                style={{ transitionDelay: "300ms" }}
              >

                <img
                  src="/images/products/cashmere-crewneck/lifestyle.png"
                  alt="Luxury gold jewelry"
                  data-alt="Portrait of a model wearing minimalist gold jewelry: a sleek collar necklace and geometric earrings. The background is a soft beige linen texture. The focus is sharp on the metallic sheen of the jewelry, with a warm, luxurious glow."
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Designers Section */}

      <section className="py-section-gap bg-surface-container-low">

        <div className="max-w-[1440px] mx-auto px-margin-desktop">

          <div className="text-center mb-20 reveal-on-scroll">

            <h2 className="font-headline-lg text-headline-lg mb-4">
              Featured Designers
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto italic">
              Craftsmanship meets innovation. Discover the visionaries shaping
              the future of high-apparel.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">

            {designers?.map((item) => (
              <div
                key={item.id}
                className="text-center group cursor-pointer reveal-on-scroll"
              >

                <div className="aspect-[3/4] mb-6 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    data-alt="Black and white artistic portrait of a visionary fashion designer in their atelier, surrounded by fabric swatches and architectural sketches. High contrast, moody, professional photography that captures the creative essence of luxury fashion design."
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                  />

                </div>

                <h4 className="font-label-caps text-label-caps tracking-[0.2em] uppercase">
                  {item.name}
                </h4>

                <p className="font-body-md text-body-md text-on-surface-variant italic">
                  {item.specialty}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Journal Section */}

      <section className="py-section-gap max-w-[1440px] mx-auto px-margin-desktop">

        <div className="grid grid-cols-12 gap-gutter items-center mb-24 reveal-on-scroll">

          <div className="col-span-12 md:col-span-5">

            <span className="font-label-caps text-label-caps text-tertiary-container mb-4 block">
              The Journal
            </span>

            <h2 className="font-headline-lg text-headline-lg leading-tight mb-8">
              Stories of Style, Substance, and Soul
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Dive into our digital magazine for exclusive interviews, trend
              forecasts, and deep dives into the artistry of the luxury world.
            </p>

            <NavLink
              to="/journal"
              className="inline-flex items-center gap-4 font-label-caps text-label-caps group"
            >
              READ THE JOURNAL

              <span
                className="material-symbols-outlined transition-transform group-hover:translate-x-2"
                data-icon="arrow_right_alt"
              >
                arrow_right_alt
              </span>
            </NavLink>

          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 relative">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzSDjDWROr2fC0kgC98kTxNZpCQvQobDslvae2HGyxKHF_DpBDcrfNmWa0b_RkTRzGvm8t0pCIlk1hbJLVspOuJ8TyL1xAtiaVEm1SJCLpXkaEm6VKRIyWfViCnt0GCwYFJM-D5Pum4S2kcEvLEozz59vWojhujBRum7A4bfdgGwNh31C1xgtfVHxCT1CAI7eDIRc0MjcJ5KS8gE-iHBSHT2VUdPMF75HJ9-d1tXfTbrdWkGj6JDIw"
              alt="Editorial magazine spread"
              data-alt="Editorial magazine spread layout on a wooden desk with a cup of coffee and spectacles. The spread shows high-fashion photography of an desert landscape and a model in flowing linen. The lighting is warm and intellectual, capturing a lifestyle of leisure and curation."
              className="w-full h-auto shadow-2xl"
            />

            <div className="absolute -bottom-10 -left-10 bg-white p-8 max-w-xs hidden lg:block border border-outline-variant">

              <h5 className="font-headline-md text-headline-md text-2xl mb-2">
                Issue 04
              </h5>

              <p className="font-body-md text-body-md text-on-surface-variant">
                The Solstice Edition: A journey through light and shadow.
              </p>

            </div>
          </div>
        </div>

        {/* More Journal Stories */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 pt-1.5">

          {journal?.map((item) => (
            <div
              key={item.id}
              className="reveal-on-scroll"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-cover mb-6"
              />

              <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                {item.category} • {item.readTime}
              </p>

              <h3 className="font-headline-md text-2xl mb-4">
                {item.title}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Newsletter Subscription */}

      <NewsLetter />

    </main>
  );
}