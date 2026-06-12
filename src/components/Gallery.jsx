import { galleryData } from "../data/galleryData";

export default function Gallery() {
  return (
    <section className="mt-16">
      <h2 className="text-center text-pink-400 text-lg sm:text-xl font-semibold mb-6">
        Nossos Momentos ❤️
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {galleryData.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="
            w-full
            aspect-[3/4]
            object-cover
            rounded-2xl
            hover:scale-105
            transition
            duration-300
          "
        />
        ))}
      </div>
    </section>
  );
}