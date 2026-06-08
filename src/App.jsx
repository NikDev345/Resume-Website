import { useEffect, useState } from "react";
import Silk from "./components/Silk";
import ClickSpark from "./components/ClickSpark";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return (
<ClickSpark
  sparkColor="rgba(255,255,255,0.9)"
  sparkSize={10}
  sparkRadius={25}
  sparkCount={10}
  duration={300}
>
    <div className="relative min-h-screen overflow-x-hidden">      {/* Silk Background */}
      <div className="fixed inset-0 -z-20">
        <Silk
          speed={3}
          scale={1.2}
          color="#908f94"
          noiseIntensity={0.1}
          rotation={0}
        />
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/35 -z-10" />

      {/* Navbar */}
      <nav
  className={`
    fixed
    left-1/2
    -translate-x-1/2
    z-50

    ${scrolled ? "top-2 w-[50%] h-[64px]" : "top-5 w-[90%] h-[72px]"}

    max-w-7xl

    rounded-full

    bg-white/[0.03]

    backdrop-blur-[50px]
    backdrop-saturate-[220%]

    border
    border-white/[0.08]

    shadow-[0_10px_50px_rgba(0,0,0,0.25)]

    px-6

    transition-all
    duration-1000
    ease-[cubic-bezier(0.22,1,0.36,1)]

    overflow-hidden
  `}
>
  {/* Glass Reflection */}
  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-b
      from-white/[0.08]
      via-white/[0.03]
      to-transparent
      pointer-events-none
    "
  />

  <div className="relative h-full grid grid-cols-3 items-center">
    {/* Left */}
    <div className="flex items-center gap-3">
      <div
        className={`
          rounded-full
          border border-white/15

          flex
          items-center
          justify-center

          text-white

          transition-all
          duration-1000

          ${scrolled ? "w-8 h-8" : "w-10 h-10"}
        `}
      >
        ✦
      </div>

      <span
        className={`
          text-white
          font-light
          tracking-wide

          transition-all
          duration-1000

          ${scrolled ? "text-lg" : "text-xl"}
        `}
        style={{ fontFamily: "Sora" }}
      >
        NR
      </span>
    </div>

    {/* Center */}
    <div
      className={`
        flex
        justify-center
        items-center

        transition-all
        duration-1000

        ${scrolled ? "gap-6" : "gap-12"}
      `}
    >
      <a
        href="#projects"
        className="text-white/70 hover:text-white transition-all duration-300"
      >
        Projects
      </a>

      <a
        href="#about"
        className="text-white/70 hover:text-white transition-all duration-300"
      >
        About
      </a>

      <a
        href="#contact"
        className="text-white/70 hover:text-white transition-all duration-300"
      >
        Contact
      </a>
    </div>

    {/* Right */}
    <div className="flex justify-end">
      <button
        className={`
          rounded-full
          bg-white
          text-black
          font-semibold

          hover:scale-105

          transition-all
          duration-1000

          ${
            scrolled
              ? "px-4 py-2 text-xs"
              : "px-6 py-2.5 text-sm"
          }
        `}
      >
        Explore
      </button>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

      {/* LEFT SIDE */}
      <div>

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-3

            px-5
            py-2

            rounded-full

            bg-white/[0.04]
            border border-white/[0.08]

            backdrop-blur-xl

            mb-8
          "
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-white/70">
            Available For Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="
            text-white
            font-bold
            leading-[0.95]

            text-6xl
            md:text-7xl
            xl:text-8xl
          "
        >
          Nagraj
          <br />

          <span className="text-white/70">
            Rangarej
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          className="
            mt-6

            text-2xl
            md:text-3xl

            font-medium

            text-white/80
          "
        >
          AI Engineer & Data Scientist
        </h2>

        {/* Description */}
        <p
          className="
            mt-8

            max-w-2xl

            text-lg
            leading-relaxed

            text-white/55
          "
        >
          Building intelligent systems, AI applications,
          modern web experiences and data-driven solutions.
          Passionate about Artificial Intelligence,
          Machine Learning, Automation and futuristic technology.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <button
            className="
              px-8
              py-4

              rounded-full

              bg-white
              text-black

              font-semibold

              hover:scale-105

              transition-all
              duration-300
            "
          >
            View Projects
          </button>

          <button
            className="
              px-8
              py-4

              rounded-full

              bg-white/[0.04]

              border
              border-white/[0.08]

              backdrop-blur-xl

              text-white

              hover:bg-white/[0.08]

              transition-all
              duration-300
            "
          >
            Contact Me
          </button>

        </div>

        {/* Stats */}
        <div className="mt-16 flex gap-10 flex-wrap">

          <div>
            <h3 className="text-3xl font-bold text-white">
              10+
            </h3>

            <p className="text-white/50">
              Projects Built
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              AI
            </h3>

            <p className="text-white/50">
              Specialization
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              B.Tech
            </h3>

            <p className="text-white/50">
              AI & Data Science
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center lg:justify-end">

        <ProfileCard
          name="Nagraj Rangarej"
          title="AI Engineer"
          handle="nagraj"
          status="Available"
          contactText="Hire Me"
          avatarUrl="/nagraj.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt
          onContactClick={() => console.log('Contact clicked')}
          behindGlowEnabled={true}
          behindGlowColor="rgba(255,255,255,0.15)"
          innerGradient="
              linear-gradient(
                145deg,
                rgba(70,90,180,0.15) 0%,
                rgba(25,35,75,0.12) 45%,
                rgba(10,15,35,0.08) 100%
              )
            "          
          onContactClick={() =>
          console.log("Contact clicked")
          }
        />

      </div>

    </div>

  </div>
</section>

      {/* Scroll Test Section */}
      <section className="relative z-10 min-h-[250vh] flex items-center justify-center pt-40">
        <div className="text-center">
          <h2 className="text-white text-6xl font-bold mb-8">
            Scroll Down
          </h2>

          <p className="text-white/60 text-xl">
            Navbar remains visible and smoothly collapses as you scroll.
          </p>
        </div>
      </section>

    </div>
  </ClickSpark>
);
}

export default App;