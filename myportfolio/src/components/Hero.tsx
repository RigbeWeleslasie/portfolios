// src/components/Hero.tsx
const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-900 text-white text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Rigbe
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A Full-Stack Developer passionate about creating beautiful web experiences.
        </p>
        <a href="#projects" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero