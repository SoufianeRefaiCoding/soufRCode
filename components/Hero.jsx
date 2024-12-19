import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video>

      {/* Overlay (Optional, for better contrast with text) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[2]" />
    </div>
  );
};

export default Hero;
