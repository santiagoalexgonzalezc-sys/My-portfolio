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
          <div className="bg-[#687B55] text-white p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Imagen placeholder</span>
              </div>
              <div>
                {/* About Section Content */}
                <h2 className="text-3xl font-bold mb-4 text-center">Santiago G. C. Contact's Information</h2>
                <p className="mb-4">
                  Gmail: santiagoalexgonzalezc@gmail.com
                </p>

              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}