import Head from "next/head";

const posts = [
  { title: "React Testing", excerpt: 'learn React testing' },
  { title: 'React with tailwind', excerpt: 'learn react with tailwind' }
]

export default function Home() {
  return (
    <div className="w-[100%] container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Next Blog Web App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div className="">
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
