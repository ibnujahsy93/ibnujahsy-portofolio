import { RevealOnScroll } from '../RevealOnScroll'
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {' '}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Trivia Hidden Object</h3>
              <p className="text-gray-400 mb-4">
                Game Hidden Object yang dicampur dengan cara bermain Game Trivia
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Unity', 'C#', 'Photoshop'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                  hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all
                                "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ibnujahsy93/Testing-Hidden-Object-Game"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Endless Runner 3D</h3>
              <p className="text-gray-400 mb-4">
                Game Endless Runner yang berbentuk 3D seperti Subway Surfers
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Unity', 'C#', 'Photoshop'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                  hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all
                                "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ibnujahsy93/Endless-Runner-3D"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
