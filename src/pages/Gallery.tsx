import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/siteData';
import GalleryCard from '../components/common/GalleryCard';
import type { GalleryItem } from '../types';

const FILTERS: { label: string; value: GalleryItem['category'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Placements', value: 'placement' },
  { label: 'Events', value: 'event' },
  { label: 'Office', value: 'office' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryItem['category'] | 'all'>('all');
  const items =
    filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);

  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Gallery</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Moments from our journey
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm border transition-colors ${
                  filter === f.value
                    ? 'bg-gold border-gold text-ink'
                    : 'border-gold/25 text-ink-soft hover:border-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
