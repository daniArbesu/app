import Link from 'next/link';
import type { APIProductData } from '../../types';

interface Props {
  item: APIProductData;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/products/${item.id}`}>
      <article className="w-72 flex flex-col gap-3 mb-12">
        <div
          style={{
            ['--image-url' as string]: `url(${
              (process.env.STRAPI_IMAGES_URL as string) + item.attributes?.img?.data.attributes.url
            })`,
            ['--hover-url' as string]: `url(${
              (process.env.STRAPI_IMAGES_URL as string) + item.attributes?.img2?.data.attributes.url
            })`
          }}
          className="w-full h-96 overflow-hidden relative bg-[image:var(--image-url)] hover:bg-[image:var(--hover-url)] bg-cover "
        >
          {Boolean(item.attributes?.isNew) && (
            <span className="absolute top-1 left-1 bg-white text-teal-500 p-1 text-sm font-medium">
              New Season
            </span>
          )}
        </div>
        <h3 className="text-base font-normal">{item.attributes?.title}</h3>
        <div className="flex gap-5">
          {item.attributes?.oldPrice != null ? (
            <span className="text-lg font-medium text-gray-500 line-through">
              ${item.attributes?.oldPrice}
            </span>
          ) : (
            ''
          )}
          <span className="text-lg font-medium">${item.attributes?.price}</span>
        </div>
      </article>
    </Link>
  );
};

export default Card;
