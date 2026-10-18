import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3001/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Imagen placeholder</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center">Santiago G. C.</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Hi, my name is Santiago. I'm passionate about programming, especially game development, because I love creating interactive experiences and shaping them with my own ideas.
 
              </p>

              <Link
                href="/blog"
                className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Ver blog
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-center">{featuredPost.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
                <button className="text-gray-900 dark:text-gray-100 hover:underline text-lg font-semibold text-center block w-full">
                  Leer más
                </button>
              </div>
            )}

            {/* Regular Posts */}
            <div className="space-y-4">
              {regularPosts.map((post) => (
                <div key={post.id} className="flex gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Img</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1 text-center">{post.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.summary}</p>
                    <button className="text-gray-900 dark:text-gray-100 hover:underline text-lg font-semibold text-center block w-full">
                      Leer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
