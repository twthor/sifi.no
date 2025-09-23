import Link from 'next/link';
import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';

const POST_QUERY = `
  *[_type == "post"] | order(eventStart asc)
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
  images?: SanityImageSource[];
  slug?: { current: string };
  publishedAt: string;
  eventStart: string;
  body: string;
}
async function PostPage() {
  const posts = await client.fetch<SanityDocument>(POST_QUERY, {}, options);
  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-start items-center gap-4 pt-20 dark:bg-gray-900">
        <p className="text-2xl font-semibold">Her var det tomt gitt!</p>
        <p className="text-xl">Følg med her for fremtidige arrangementer 😄</p>
      </div>
    );
  }

  const today = new Date();
  const filteredPosts =
    posts?.filter((post: Post) => {
      const eventStart = new Date(post.eventStart);
      return eventStart >= today;
    }) || [];

  return (
    <div>
      {filteredPosts.map((post: Post) => {
        const imageUrls =
          post.images?.map((image: SanityImageSource) =>
            urlFor(image)?.width(550).height(310).url()
          ) || [];

        const page_id = post.slug?.current || '';
        const firstImageUrl = imageUrls[0];

        return (
          <div key={post._id} className="mb-4 p-8 text-wrap">
            <div className="max-w-[550px]">
              {firstImageUrl && (
                <Link href={`/arrangementer/${page_id}`}>
                  <Image
                    src={firstImageUrl}
                    alt={post.title}
                    className="aspect-video rounded-xl pb-2"
                    width="550"
                    height="310"
                  />
                </Link>
              )}
              <Link href={`/arrangementer/${page_id}`}>
                <h1 className="text-4xl font-bold mb-4 text-pretty break-words">
                  {post.title}
                </h1>
              </Link>

              <div className="">
                <p>
                  Tidspunkt:{' '}
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
          </div>
        );
      })}
    </div>
  );
}

const Arrangementer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center-start items-center md:flex-row md:justify-center gap-0 md:gap-4 dark:bg-gray-900">
      <PostPage></PostPage>
    </div>
  );
};

export default Arrangementer;
