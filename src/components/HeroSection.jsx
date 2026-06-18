/* HeroSection.jsx */

export default function HeroSection() {
  return (
    <section
      className="
      relative w-full h-[85vh] md:h-screen"
    >
      <img
        src="/hero.jpg"
       className=" absolute inset-0 w-full h-full object-cover "
      />

      <div
        className=" absolute inset-0 bg-black/30 flex justify-center items-center "
      >
        <div className="text-center">
          <h1
           className=" text-white font-bold text-6xl md:text-[120px] "
          >
            HAPPY
            <br />
            Birthday!
          </h1>
        </div>
      </div>
    </section>
  );
}
