import React from "react";
import { useParams } from "react-router-dom";

function JournalDetails({ journal }) {
  const { id } = useParams();

  const story =journal?.stories?.find(
    (item) => item.id === Number(id)
  );

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-headline-lg text-headline-lg">
          Story Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="mb-8">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            {story.category} · {story.readTime}
          </span>

          <h1 className="font-headline-lg text-headline-lg mt-5 mb-6">
            {story.title}
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant italic">
            {story.description}
          </p>
        </div>

        <img
          src={story.image}
          alt={story.description}
          className="w-full aspect-[16/9] object-cover mb-10"
        />

        <div className="max-w-3xl mx-auto">
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            {story.content}
          </p>
        </div>

      </div>
    </main>
  );
}

export default JournalDetails;