import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "../../../sanity.types";

export default async function Page() {
  const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 py-12">
      <h1 className="text-4xl font-bold">Post index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <a
              className="block p-4 hover:bg-blue-50"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
