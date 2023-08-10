import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import FeaturedPosts from "../components/pages/FeaturedPosts";
import Posts from "../components/pages/Posts";
import { BiSolidStar } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Blog | Victor Eke",
  metadataBase: new URL("https://victoreke.com/blog"),
  description: "Read latest stories from Victor Eke's Blog",
  openGraph: {
    title: "Blog | Victor Eke",
    url: "https://victoreke.com/blog",
    description: "Read latest stories from Victor Eke's Blog",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-[950px] mb-12 pb-12 border-b dark:border-zinc-800 border-zinc-100">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem]">
            Blog
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Welcome to my blog domain where I share personal stories about
            things I&apos;ve learned, personal stories or projects and findings.
          </p>

          <div className="my-8">
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Aside from this blog, I&apos;ve also written for other
              publications. Some of them include:
            </p>
          </div>
          <div>Social Icons will show up here</div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex items-center gap-x-3 mb-8">
            <BiSolidStar className="text-yellow-500" />
            <h2 className="text-xl font-semibold tracking-tight">Featured</h2>
          </div>
          <FeaturedPosts />
        </div>

        <div>
          <div className="flex items-center gap-x-3 mb-8">
            <BiDetail />
            <h2 className="text-xl font-semibold tracking-tight">
              Explore All
            </h2>
          </div>
          <Posts />
        </div>
      </section>
    </main>
  );
}