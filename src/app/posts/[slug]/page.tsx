import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { POST_QUERYResult } from "../../../../sanity.types";

type PostIndexProps = { params: { slug: string } };

export default async function Page({ params }: PostIndexProps) {
  const post = await client.fetch<POST_QUERYResult>(POST_QUERY, params);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 py-12">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
