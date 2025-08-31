import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const finalPath = `M 10 100 Q 500 100 790 100`;
  const string = useRef();
  const typewriter = useRef();

  useGSAP(() => {
    gsap.to(typewriter.current, {
      opacity: 0,
      yoyo: true,
      duration: 0.3,
      repeat: -1,
      ease: "steps(2)",
    });
  });

  const mouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    gsap.to(string.current, {
      attr: { d: `M 10 100 Q ${x} ${y} 790 100` },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const mouseLeave = () => {
    gsap.to(string.current, {
      attr: { d: finalPath },
      duration: 0.8,
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-50 py-50">
        <div className="flex">
          <h1 className="text-[70px] text1">hello world</h1>
          <p className="text-[70px] text1">.</p>
          <p className="text-[70px] text1">.</p>
          <span className="flex">
            <div ref={typewriter} className="type mx-2"></div>
          </span>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          magnam non. Adipisci doloribus similique delectus nesciunt libero
          iste, dolores odio reiciendis maxime earum voluptatem enim odit
          veritatis sint quo itaque?
        </p>
        <svg
          width="800"
          height="400"
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
        >
          <path
            ref={string}
            d="M 10 100 Q 500 100 790 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
