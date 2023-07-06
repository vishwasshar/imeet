import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoFirebase,
} from "react-icons/bi";
import Faq from "@/components/Faq";

const Index = () => {
  const layerEffect = (e, layer) => {
    const speed = layer.getAttribute("speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };
  const moveHandler = (e) => {
    [...document.querySelectorAll(".hovEffect")].map((layer) => {
      layerEffect(e, layer);
    });
  };


  const faq = [
    {
      que: "Why take up a Full Stack Development",
      ans: "Full Stack Development is one of the most in-demand job roles for all companies today. There are over 55,000+ job openings for various roles in the field of Full Stack Development.",
    },
    {
      que: "How much time will I spend each week on my Full Stack Developer course?",
      ans: "Full Stack Development is a vast field with a lot of new concepts to learn. In order to master the various concepts and tools, we recommend our learners to spend at least 3 hours on a daily basis. However, since we have recorded sessions included with your course, you can choose how and when you want to study.",
    },
    {
      que: "Why take up a Full Stack Development",
      ans: "Full Stack Development is one of the most in-demand job roles for all companies today. There are over 55,000+ job openings for various roles in the field of Full Stack Development.",
    },
    {
      que: "Why take up a Full Stack Development",
      ans: "Full Stack Development is one of the most in-demand job roles for all companies today. There are over 55,000+ job openings for various roles in the field of Full Stack Development.",
    },
    {
      que: "Why take up a Full Stack Development",
      ans: "Full Stack Development is one of the most in-demand job roles for all companies today. There are over 55,000+ job openings for various roles in the field of Full Stack Development.",
    },
  ];

  return (
    <div onMouseMove={moveHandler}>
      <div className="flex" >
        <div className="w-[50%] flex flex-col pl-[10%] py-[12%] ">
          <h1 className="text-5xl  hovEffect" speed={4}>
            Boost Up Your <br /> Skill
          </h1>
          <p className="my-[7%] text-xl max-w-md hovEffect" speed={3}>
            Get started with your IT career with new technologies
          </p>
          <Link
            className="bg-[#EF3959] w-24 hover:bg-[#EF3959dd] text-center py-2 rounded-full shadow-[0px_0px_10px_2px_#EF3959] text-white hovEffect"
            speed={2}
            href={""}
          >
            Join Us
          </Link>
        </div>
        <div className="w-[50%] relative">
          <div
            className="w-52 h-52 rounded-full border border-red-300 shadow-[4px_4px_7px_3px_#EF395944] absolute top-[10%] left-[35%] bg-[#ffffffdf] flex flex-col
           justify-center items-center hovEffect"
            speed="4"
          >
            <h3 className="text-4xl font-semibold">500+</h3>
            <p className=" text-xl">Students</p>
          </div>
          <div
            className="w-52 h-52 rounded-full border border-red-400 -z-10 absolute top-[35%] left-[50%] flex flex-col justify-center items-center hovEffect"
            speed="5"
          >
            <h3 className="text-4xl font-semibold">40+</h3>
            <p className=" text-xl">Live Projects</p>
          </div>
          <div
            className="w-36 h-36 rounded-full bg-[#ffffffcc] shadow-[-4px_4px_20px_3px_#4A86FF44] absolute left-[13%] top-[40%] flex flex-col justify-center items-center hovEffect"
            speed="3"
          >
            <h3 className="text-3xl font-semibold">10+</h3>
            <p className=" text-lg">Mentors</p>
          </div>
          <div
            className="w-44 h-44 rounded-full bg-[#ffffffcc] border border-blue-100 shadow-[4px_4px_7px_3px_#4A86FF44] absolute top-[60%] left-[35%] flex flex-col justify-center items-center hovEffect"
            speed="3"
          >
            <h3 className="text-4xl font-semibold ">20+</h3>
            <p className=" text-xl">Services</p>
          </div>
        </div>
      </div>
      <div
        className="mx-[25%] py-4 px-[10%] my-10 gborder hovEffect"
        speed={3}
      >
        <h5 className="text-center my-5">Technologies used</h5>
        <div className="flex justify-between">
          <BiLogoReact size={45} />
          <BiLogoMongodb size={45} />
          <BiLogoTailwindCss size={45} />
          <BiLogoTypescript size={45} />
          <BiLogoFirebase size={45} className="text-white" />
        </div>
      </div>
      <div className="flex pt-[5%]">
        <div className="w-[50%] relative">
          <div
            className="w-52 h-52 rounded-full shadow-[4px_4px_10px_3px_#A4C2FF44] absolute top-[8%] left-[35%] bg-[#A4C2FFbb] flex flex-col
           justify-center items-center hovEffect"
            speed={3}
          >
            <p className=" text-xl text-center font-semibold">
              Strength in Unity, Success.
            </p>
          </div>
          <div
            className="w-48 h-48 rounded-full bg-[#ffffffbb] absolute top-[35%] left-[17%] flex flex-col justify-center items-center z-10 hovEffect"
            speed={5}
          >
            <p className=" text-md text-center font-semibold">
              Together We Achieve More.
            </p>
          </div>
          <div
            className="w-36 h-36 p-5 rounded-full bg-[#ffffff55] shadow-[4px_4px_20px_3px_#4A86FF44] absolute left-[65%] top-[43%] flex flex-col justify-center items-center hovEffect"
            speed={4}
          >
            <p className=" text-md text-center font-semibold">
              Collaborate, Innovate, Succeed.
            </p>
          </div>
          <div
            className="w-44 h-44 p-3 rounded-full bg-[#4A86FFcc] shadow-[4px_4px_7px_3px_#4A86FF44] absolute top-[62%] left-[35%] flex flex-col justify-center items-center hovEffect"
            speed={7}
          >
            <p className=" text-xl text-center font-semibold">
              Unleashing Team Excellence.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-end pr-[10%] py-[8%]">
          <h1 className="text-4xl hovEffect " speed={4}>
            Projects with Team
          </h1>
          <p
            className="my-[2%] text-lg max-w-sm hovEffect text-right"
            speed={3}
          >
            Effective team management is crucial for achieving organizational
            success. It involves guiding and motivating individuals towards a
            common goal while fostering collaboration and productivity. A
            skilled team manager ensures clear communication, delegates tasks
            efficiently, and provides support and guidance to team members.
          </p>
          <Link
            className="bg-[#EF3959] w-24 text-center py-2 rounded-full shadow-[0px_0px_10px_2px_#EF3959] text-white hovEffect hover:bg-[#EF3959dd]"
            speed={3}
            href={""}
          >
            Join Us
          </Link>
        </div>
      </div>
      <div className="flex pt-[8%] pb-[4%]" >
        <div className="w-[50%] flex flex-col pl-[10%] ">
          <h2 className="text-4xl max-w-lg hovEffect" speed={4}>
            Get certified to gain exciting career opportunities
          </h2>
          <p className="mt-[2%] text-lg max-w-lg hovEffect" speed={3}>
            Add the certification to your resume and open doors to new
            opportunities in the roles of:
          </p>
          <ul className="text-xl hovEffect " speed={2}>
            <li>
              <span className="text-[#EF3959] text-2xl">• </span>Full Stack
              Developer
            </li>
            <li>
              {" "}
              <span className="text-[#EF3959] text-2xl">• </span>UI Developer
            </li>
            <li>
              <span className="text-[#EF3959] text-2xl">• </span>Frontend
              Developer
            </li>
            <li>
              <span className="text-[#EF3959] text-2xl">• </span>Software
              Developer
            </li>
            <li>
              <span className="text-[#EF3959] text-2xl">• </span>React Developer
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center items-center py-10">
          <Image
            src={"/certificate.png"}
            width={450}
            height={350}
            className="hovEffect"
            speed={5}
          />
        </div>
      </div>
      <div className="flex pb-[3%]" >
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[100%] h-[60%] relative">
            <div
              className="w-40 h-40 rounded-full border bg-red-400 shadow-[4px_4px_7px_3px_#EF395944] absolute top-[10%] left-[55%] z-10 bg-[#ffffffcc] flex flex-col
           justify-center items-center hovEffect"
              speed="4"
            >
              <p className=" text-xl text-center font-semibold">
                Ask a question.
              </p>
            </div>

            <div
              className="w-36 h-36 rounded-full bg-[#ffffff66] shadow-[-4px_4px_20px_3px_#4A86FF44] absolute left-[20%] top-[45%] flex flex-col justify-center items-center hovEffect"
              speed="3"
            >
              <p className=" text-xl text-center font-semibold">Any Query?</p>
            </div>
          </div>
        </div>
        <div
          className="w-[50%] flex flex-col pl-[10%] hovEffect"
          speed={2}
          id="faq"
        >
          <h2 className="text-3xl mb-2">FAQ</h2>
          <ul className="max-w-[80%]">
            {faq.map((item, i) => {
              return <Faq data={item} key={i} id={i}></Faq>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Index;
