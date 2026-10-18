import Link from 'next/link';



export default function About() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* About me Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-[#687B55] text-white p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Imagen de perfil</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-center">Santiago G. C.</h2>
                <p className="mb-4">
                  My programming journey started when I was around 10 years old, when my dad introduced me to Python. I began by creating games using Python's Tkinter and Turtle libraries. Through these projects, I learned the fundamentals of programming and started developing my problem-solving skills.

                  As I became more interested in development, I started taking courses on Platzi, where I learned HTML, CSS, and JavaScript. I began exploring web development and game design, and later started learning Node.js to understand how backend development works.
                </p>

                <p className="mb-6">
                  Over time, I've worked on different games and websites, putting what I've learned into practice and experimenting with new ideas. I enjoy the entire development process, from writing code and testing features to debugging problems and improving my projects.

                  Through this portfolio, I want to showcase my projects, share my progress, and continue growing as a developer.
                </p>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
