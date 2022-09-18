import type { FC } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dayjs from "dayjs";
import { RiExternalLinkFill } from "react-icons/ri";
import Icons from "@components/Icons";
import TimeLine, { EventsData } from "@components/TimeLine";

const HeroSection: FC = () => (
    <section>
        <div className="container mx-auto flex min-h-[calc(100vh-216px)] flex-col md:flex-row 2xl-h:min-h-[80vh]">
            <div className="flex-1 self-center">
                <h1 className="py-12 text-center text-4xl font-extrabold sm:text-6xl">
                    Frontend Developer
                </h1>
                <h2 className="mx-auto max-w-xl px-4 text-center text-lg lg:text-xl">
                    Hi, my name is{" "}
                    <span className="bg-gradient-secondary bg-clip-text text-2xl font-extrabold">
                        Martin.
                    </span>
                    <br />
                    I&apos;m a frontend developer based in Taiwan
                    <br />
                    and also have a passion for Modern Web Development like{" "}
                    <span className="text-sky-500">React</span> and{" "}
                    <span className="text-purple-500">Redux</span>.
                </h2>
                <div className="flex justify-center py-12">
                    <a
                        href="https://docs.google.com/document/d/1qohyj_emtczFoOeUp8N19ltUTxL33TuP/edit?usp=sharing&ouid=113887428276543602688&rtpof=true&sd=true"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="bg-gradient-main flex cursor-pointer items-center rounded-full px-6 py-2 text-white hover:opacity-80">
                            <span className="pr-2 text-xl">Hire Me</span>
                            <RiExternalLinkFill
                                size="1.5rem"
                                className="fill-white"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex-1 self-center justify-self-center">
                <div className="mx-auto mb-8 h-[375px] w-[300px] rounded-tl-full bg-gradient-to-r from-sky-500 to-pink-500 lg:h-[500px] lg:w-[400px]">
                    <div className="h-full w-full bg-[url('/images/selfie.png')] bg-cover" />
                </div>
            </div>
        </div>
    </section>
);

const AboutMeSection: FC = () => {
    const developmentYears = dayjs().year() - 2020;

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <p className="mb-8 text-center font-carter text-3xl font-extrabold sm:text-4xl">
                    About Me
                </p>
                <div className="flex flex-col items-center gap-8 sm:flex-row">
                    <div className="flex-1 ">
                        <div className="mx-auto h-[300px] w-[300px] rounded-xl bg-[url('/images/skillsStack.jpeg')] bg-cover sm:h-[400px] sm:w-[400px]" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between px-8">
                        <div>
                            <p className="bg-gradient-secondary mb-4 inline-block bg-clip-text text-4xl font-black leading-10">
                                Martin Lin
                            </p>
                            <p className="mb-4 2xl:text-xl ">
                                I&apos;m a Frontend Developer based in Taiwan
                                and have {developmentYears} years of experiences
                                writing Web apps. I love solving problems by
                                simplifying complexity and putting those ideas
                                into practice. Enjoy the process of creating web
                                pages with great user experience and visually
                                top notch. Currently I work with{" "}
                                <span className="font-extrabold text-sky-500">
                                    React
                                </span>{" "}
                                Ecosystem, using my favorite tools below to
                                building fantastic projects.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-black leading-10 text-zinc-500">
                                Current Favorite Tech Stack
                            </p>
                            <ul className="flex flex-wrap gap-4 text-4xl md:text-5xl">
                                <li>
                                    <Icons.javascript.icon className="text-yellow-400" />
                                </li>
                                <li>
                                    <Icons.typescript.icon className="text-blue-400" />
                                </li>
                                <li>
                                    <Icons.react.icon className="text-sky-400" />
                                </li>
                                <li>
                                    <Icons.nextjs.icon className="text-black" />
                                </li>
                                <li>
                                    <Icons.tailwind.icon className="text-sky-300" />
                                </li>
                                <li>
                                    <Icons.webpack.icon className="text-blue-400" />
                                </li>
                                <li>
                                    <Icons.nodejs.icon className="text-green-400" />
                                </li>
                                <li>
                                    <Icons.aws.icon className="text-zinc-700" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceSection: FC = () => (
    <section className="py-12">
        <div className="container mx-auto xl:max-w-[1200px]">
            <p className="mb-8 text-center font-carter text-3xl font-extrabold sm:text-4xl">
                Experiences
            </p>
            <TimeLine timeEvents={EventsData} />
        </div>
    </section>
);

const HomePage: NextPage = () => {
    return (
        <div
            className="bg-cover"
            style={{
                backgroundImage: 'url("/images/heroBackground.svg")',
            }}
        >
            <Head>
                <title>Martin Code</title>
            </Head>
            <HeroSection />
            <AboutMeSection />
            <ExperienceSection />
        </div>
    );
};

export default HomePage;
