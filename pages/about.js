import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const About = () => {
  const team = [
    {
      name: "Gaurav Kumar",
      title: "Mobile Developer",
      imageURL:
        "https://imeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgaurav.ae130d44.jpg&w=3840&q=75",
    },
    {
      name: "Krishna",
      title: "Backend Developer",
      imageURL:
        "https://imeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkrishna_image.fa2b4099.jpg&w=3840&q=75",
    },
    {
      name: "Sagar Chaudhary",
      title: "Java Developer",
      imageURL:
        "https://imeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsagar.afdd539a.jpg&w=3840&q=75",
    },
  ];
  const layerEffect = (e, layer) => {
    const speed = layer.getAttribute("speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };
  const heroMoveHandler = (e) => {
    [...document.querySelectorAll(".heroHovEffect")].map((layer) => {
      layerEffect(e, layer);
    });
  };
  return (
    <>
      <h2 className="text-center text-6xl py-4">About</h2>
      <div className="flex" onMouseMove={heroMoveHandler}>
        <div className="w-[50%] flex flex-col items-center  py-[12%] ">
          <h2 className="text-5xl  heroHovEffect" speed={3}>
            Divya Senger
          </h2>
          <p className="my-[2%] text-xl max-w-md heroHovEffect" speed={3}>
            Head of iMeet Foundation
          </p>
          <div className="flex justify-between">
            {Array(4)
              .fill(null)
              .map((item) => {
                return (
                  <Link
                    className="bg-[#4A86FF22] mx-2 w-10 h-10 hover:bg-[#EF3959dd] text-center py-2 rounded-full shadow-[0px_0px_15px_2px_#EF3959]  heroHovEffect flex items-center justify-center"
                    speed={2}
                    href={""}
                  >
                    <BsGithub size={30} />
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <p className="w-[70%] text-center text-2xl heroHovEffect" speed={2}>
            Warm Greeting to you! from iMeet team members , iMeet is one of the
            best opportunity for you to grow up your skills , knowledge and you
            will also got some experience for further jobs .If you are a
            technical student , then iMeet is best for you. You wil also get
            certified after the completion of this course.
          </p>
        </div>
      </div>
      <div className="flex pt-[5%]" onMouseMove={heroMoveHandler}>
        <div className="w-[50%] flex flex-col pl-[10%]  ">
          <h1 className="text-5xl  heroHovEffect" speed={4}>
            Our Mission
          </h1>
          <p className="my-[2%] text-xl max-w-md heroHovEffect" speed={3}>
            Our Mission is to create a world where Guaranteed websites are
            accessible to all. To get a job, you need experience. But to gain
            experience, you need a job.
            <br />
            So , we’re here to provide you a job like experience with real world
            project like Building Static Version of Zomato Like Website Using
            HTML, Styling it etc. Our Team
          </p>
        </div>
        <div className="w-[50%] relative">
          <div
            className="w-52 h-52 rounded-full border border-red-300 shadow-[4px_4px_7px_3px_#EF395944] absolute top-[10%] left-[45%] bg-[#ffffffdf] flex flex-col
           justify-center items-center heroHovEffect"
            speed="4"
          >
            <h3 className="text-3xl font-semibold text-center">
              No <br /> Experience
            </h3>
          </div>

          <div
            className="w-36 h-36 rounded-full bg-[#ffffffcc] shadow-[-4px_4px_20px_3px_#4A86FF44] absolute left-[20%] top-[70%] flex flex-col justify-center items-center heroHovEffect"
            speed="3"
          >
            <h3 className="text-3xl font-semibold text-center">
              No <br /> Job
            </h3>
          </div>
        </div>
      </div>
      <div className="pt-[12%]" onMouseMove={heroMoveHandler}>
        <h2 className="text-5xl text-center  heroHovEffect" speed={2}>
          Our Team
        </h2>
        <div className="w-auto flex justify-between px-[10%] py-[5%]  ">
          {team.map((mem) => {
            return (
              <div
                className="w-[28%] shadow-[4px_4px_20px_1px_#EF395944] h-[60vh] bg-[#ffffff77] heroHovEffect flex flex-col items-center justify-center"
                speed={2}
              >
                <Image
                  src={mem.imageURL}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <h3 className="text-2xl font-semibold">{mem.name}</h3>
                <p>{mem.title}</p>
                <div className="flex justify-between mt-8">
                  {Array(3)
                    .fill(null)
                    .map((item) => {
                      return (
                        <Link
                          className="bg-[#4A86FF22] mx-2 w-10 h-10 hover:bg-[#EF3959dd] text-center py-2 rounded-full shadow-[0px_0px_15px_2px_#EF3959] flex items-center justify-center"
                          href={""}
                        >
                          <BsGithub size={30} />
                        </Link>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
