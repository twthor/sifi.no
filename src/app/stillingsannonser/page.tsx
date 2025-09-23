import Link from 'next/link';
import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';

const ANNONSE_QUERY = `
  *[_type == "stillingsannonse"] | order(eventStart desc)
`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };
interface Post {
  _id: string;
  title: string;
  image?: SanityImageSource;
  slug?: { current: string };
  publishedAt: string;
  eventStart: string;
  eventEnd: string;
  body: string;
}
async function AnnonsePage() {
  const posts = await client.fetch<SanityDocument>(ANNONSE_QUERY, {}, options);
  console.log(posts);
  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-start items-center gap-4 pt-20 dark:bg-gray-900">
        <p className="text-2xl font-semibold">Her var det tomt gitt!</p>
        <p className="text-xl">
          Følg med her for fremtidige stillingsannonser 😄
        </p>
      </div>
    );
  }
  return (
    <div>
      {posts.map((post: Post) => {
        const postImageUrl = post.image
          ? urlFor(post.image)?.width(550).height(310).url()
          : null;

        const page_id = post.slug?.current || '';

        return (
          <div key={post._id} className="mb-12 p-8">
            {postImageUrl && (
              <Link href={`/stillingsannonser/${page_id}`}>
                <Image
                  src={postImageUrl}
                  alt={post.title}
                  className="aspect-video rounded-xl pb-2"
                  width="550"
                  height="310"
                />
              </Link>
            )}
            <Link href={`/stillingsannonser/${page_id}`}>
              <h1 className="text-4xl font-bold mb-4 ">{post.title}</h1>
            </Link>

            <div className="">
              <p>
                Søknadsfrist:{' '}
                {new Date(post.eventStart).toLocaleDateString('nb-NO', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'Europe/Oslo',
                })}{' '}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Arrangementer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center-start items-center md:flex-row md:justify-center gap-0 md:gap-4 dark:bg-gray-900">
      <AnnonsePage></AnnonsePage>
    </div>
  );
};

export default Arrangementer;
