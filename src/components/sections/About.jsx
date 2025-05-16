import { RevealOnScroll } from '../RevealOnScroll'
export const About = () => {
  const frontendSkills = ['React', 'TailwindCSS', 'Bootstrap']
  const backendSkills = ['CodeIgniter4', 'Laravel', 'Python']
  const anotherSkills = [
    'Canva',
    'Capcut',
    'Photoshop',
    'Microsoft Office',
    'Unity',
    'C#',
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {' '}
            About Me
          </h2>

          <div className="rounded-xl p-7 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition-all">
            <p className="text-gray-300 mb-6">
              Saya adalah developer yang baru mulai dan ingin mencari pengalaman
              di bidang web developer dan terbuka untuk posisi lainnya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                  hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition
                                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                  hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition
                                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 md:col-span-2 md:w-1/2 md:mx-auto hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Skill Lainnya
                </h3>
                <div className="flex flex-wrap gap-2">
                  {anotherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                  hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition
                                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Pendidikan </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> S1 Informatika </strong> di Universitas Muhammadiyah
                  Malang (2019-2024) <br />
                  <strong>IPK 3.92</strong>
                </li>
                <li>
                  <strong> Teknik Komputer Jaringan </strong> di SMK Negeri 3
                  Palu (2016-2019) <br />
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Pengalaman Kerja </h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {' '}
                    <strong>IT Support (Intern)</strong> di Perwakilan BKKBN
                    Provinsi Sulawesi Tengah, Palu <br /> (Agustus 2022 -
                    September 2022){' '}
                  </h4>
                  <li>
                    Membantu kegiatan administrasi harian, termasuk pengarsipan,
                    pengelolaan data, dan pembuatan laporan.
                  </li>
                </div>
                <br />
                <div>
                  <h4 className="font-semibold">
                    {' '}
                    <strong>IT Support (Intern)</strong> di Kantor UPBU Kelas I
                    Mutiara Sis Al-Jufri Palu <br /> (Juli 2018 - November
                    2018){' '}
                  </h4>
                  <li>
                    Merancang dan membuat banner untuk bandara dalam rangka
                    perayaan Idul Adha serta penyambutan jemaah haji.
                  </li>
                  <li>
                    Membuat video animasi edukatif mengenai bahaya bercanda
                    tentang bom di area bandara.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
