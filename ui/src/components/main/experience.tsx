/* eslint-disable consistent-return */
import React from "react";
import { AiFillCode } from "react-icons/ai";
import { GiBookshelf, GiHelicopter, GiUsaFlag } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { classNames } from "../../utils/classNames";
import { useNavState } from "../../utils/zustand/navState";
import { FancyQuote } from "../reusable/quote";
import { SectionTitle } from "../reusable/sectionTitle";

const expItems = [
  {
    company: "Remine Inc.",
    title: "Tech Lead",
    date: "August 2023 - Present",
    description:
      "Lead a small team of engineers to finish the build out of our SSO project. Working with customers and leadership to deliver new features and enhancements. I have maintained my velocity as an individual contributor while also managing the velocity and productivity of my team",
    icon: AiFillCode,
    lineColor: "border-orange-900",
    iconColor: "bg-orange-900",
  },
  {
    company: "Remine Inc.",
    title: "Software Engineer",
    date: "July 2021 - August 2023",
    description:
      "Working primarily with TypeScript, React, Express, and PostgreSQL contributing to a real estate data platform. I am currently working on our SSO gateway and data pipelines for metrics and reporting.",
    icon: AiFillCode,
    lineColor: "border-orange-800",
    iconColor: "bg-gradient-to-b from-orange-900 to-orange-800",
  },
  {
    company: "Souper Bowl of Caring",
    title: "Software Engineer",
    date: "April 2021 - Present",
    description:
      "Non-profit orginization platform to facilitate food donations and campaigns for local food banks. Worked with TypeScript, Next.js, and GraphQL. Built out a new donations page and form UI flow for the website.",
    icon: AiFillCode,
    lineColor: "border-orange-700",
    iconColor: "bg-gradient-to-b from-orange-800 to-orange-700",
  },
  {
    company: "American University",
    title: "Bachelor of Arts, Philosophy",
    date: "Jan 2018 - Jan 2020",
    description:
      "I entered the university as a philosophy major because I wanted to learn how to think better. The thinking tools I gained in philosophy have been invaluable in my career as a software engineer.",
    icon: GiBookshelf,
    lineColor: "border-orange-600",
    iconColor: "bg-gradient-to-b from-orange-700 to-orange-600",
  },
  {
    company: "Metro Aviation",
    title: "Helicopter Mechanic",
    date: "May 2013 - March 2018",
    description:
      "I was a Site Mechanic for EMS helicopters. My responsibilities included maintaining our aircraft, troubleshooting electircal and mechanical issues, and performing routine inspections. I also worked on the maintenance of the ground support equipment and administrative tasks for the site.",
    icon: GiHelicopter,
    lineColor: "border-orange-500",
    iconColor: "bg-gradient-to-b from-orange-600 to-orange-500",
  },
  {
    company: "US Army",
    title: "Helicopter Mechanic",
    date: "November 2001 - December 2011",
    description:
      "I broke stuff and fixed stuff. Then I grew up a little bit and fixed stuff better and broke stuff less. Seriously though, I grew up in the Army and learned to be a leader, a team player, and a problem solver.",
    icon: GiUsaFlag,
    lineColor: "border-orange-400",
    iconColor: "bg-gradient-to-b from-orange-500 to-orange-400",
  },
];

const Experience = () => {
  const { ref: experienceRef, inView } = useInView({
    threshold: 0.4,
  });

  const toggleCurrent = useNavState((state) => state.toggleCurrent);

  React.useEffect(() => {
    toggleCurrent("experience", inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={experienceRef} id="experience" className="my-10 min-h-screen-3/4">
      <SectionTitle text="Experience" />
      <ol className="ml-5 mt-12">
        {expItems.map((item) => (
          <li
            key={item.company}
            className={classNames(item.lineColor, "border-l-2")}
          >
            <div className="md:flex flex-start">
              <div
                className={classNames(
                  item.iconColor,
                  "w-8 h-8 flex items-center justify-center rounded-full -ml-[1.1rem]"
                )}
              >
                <item.icon className="text-neutral-200 w-6 h-6 rounded-full" />
              </div>
              <div className="block p-6 rounded-lg shadow-sm shadow-orange-700 sm:shadow-none bg-neutral-900 max-w-md ml-6 sm:mb-10">
                <div className="flex justify-between items-center">
                  <p className="text-orange-600 text-2xl">{item.company}</p>
                  <p className="text-neutral-200 text-base sm:text-xl">
                    {item.date}
                  </p>
                </div>
                <p className="text-teal-500 text-lg sm:mb-4">{item.title}</p>
                <p className="text-neutral-200 sm:mb-6">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <FancyQuote quoteId={6} />
    </div>
  );
};

export default Experience;
