const BASE_PATH = '/Activity-1.1-Taluban-Haider';

export default function HeritageImage({ src, alt, className = '' }) {
  const imageSrc = src.startsWith(BASE_PATH)
    ? src
    : `${BASE_PATH}${src}`;

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
    />
  );
}