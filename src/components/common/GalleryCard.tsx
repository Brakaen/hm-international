import type { GalleryItem } from '../../types';

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-gold/15">
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 py-4 text-sm text-ivory">
        {item.title}
      </figcaption>
    </figure>
  );
}
