import React, { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  const handleAboutClick = () => {
    props.aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectClick = () => {
    props.projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={ref} className="md:px-10 px-7 my-14 bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="text-white">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">
              Olabisi Afolabi
            </h1>
            <p className="md:w-96">
              Web Developer. I create seamless frontend web experiences for
              end-users. This is my home on the internet.
            </p>
            <div className="mt-5">
              <button
                onClick={handleAboutClick}
                className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary"
              >
                About me
              </button>
              <button
                onClick={handleProjectClick}
                className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white "
              >
                Projects
              </button>
            </div>
          </div>
          <div></div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img
              src="./assets/lola.jpeg"
              alt="my_photo"
              className="h-auto max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
});

export default Home;
