import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
  content?: string;
  author?: string;
  date?: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3001/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const currentPost = posts.find((post) => post.id.toString() === slug);

  if (!currentPost) {
    return <p>Post not found</p>;
  }

  const relatedPosts = posts.filter((post) => post.id.toString() !== slug).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-12">
          <div className="w-[70%] aspect-16/10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Post hero image</span>
          </div>
        </section>

        {/* Post Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{currentPost.title}</h1>
          <div className="flex justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <span>By {currentPost.author}</span>
            <span>•</span>
            <span>{currentPost.date}</span>
          </div>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {currentPost.content}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do e312312321321iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ef121312312312312312312312312321312312312312312312312312312312123123123123123123123321321312giat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Related Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Related posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <div key={post.id} className="bg-[#687B55] text-white p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Thumbnail</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{post.title}</h3>
                <p className="mb-4 text-center">{post.summary}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="block w-full text-center hover:underline"
                >
                  Read
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
