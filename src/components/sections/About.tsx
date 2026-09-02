import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import { Link } from "react-router-dom";
import { User, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="min-h-screen py-8 md:pb-24" id="about">
      <div className="max-w-2xl md:max-w-6xl w-full mx-auto flex flex-col md:justify-between">
        <div className="flex justify-center items-center gap-4 gap">
          <User size={32} className="text-neutral-900 dark:text-white" />
          <p className="text-neutral-900 dark:text-white text-4xl font-bold text-center">
            About Me
          </p>
        </div>
        <div
          className="mx-4 md:mx-6 flex flex-wrap lg:flex-nowrap align-center md:gap-24"
          id="content"
        >
          <CardContainer>
            <CardBody className="bg-neutral-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-8 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="spidey-me.jpg"
                  alt="Spidey"
                  className="object-contain"
                  id="content-2"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <div
            className="gap-2 flex flex-col justify-center"
            id="content-2"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col mx-4">
                <p className="text-neutral-900 dark:text-white text-2xl font-bold">
                  Neal Andrew B. Peteros
                </p>
                <p className="text-neutral-900 dark:text-white text-lg">
                  Full-Stack Web Developer
                </p>
              </div>
              <p className="text-neutral-900 dark:text-white leading-loose text-justify mx-4">
                I'm a full-stack developer from Cebu, Philippines. I am an
                Information Technology undergraduate from the University of
                San Carlos. I have grown a passion for developing dynamic
                and responsive web applications using different technology
                stacks. I excel in technologies such as HTML, CSS,
                JavaScript, React, Node.js, and various other modern
                frameworks and tools.
              </p>
              <Link to={"/resume.pdf"} target="_blank" className="mx-4">
                <button className="bg-red-700 hover:bg-red-900 drop-shadow-[0_0_5px_#B11313AA] w-1/3 rounded-xl py-2 text-white flex gap-2 justify-center items-center font-bold">
                  Resume
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
