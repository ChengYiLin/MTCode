import type { NextPage } from "next";
import Head from "next/head";
import dayjs from "dayjs";
import { RiExternalLinkFill } from "react-icons/ri";
import TimeLine, { EventsData } from "@components/TimeLine";

const Home: NextPage = () => {
    const developmentYears = dayjs().year() - 2020;

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
            {/* Who I am */}
            <section>
                <div className="container mx-auto flex min-h-[calc(100vh-56px)] flex-col md:flex-row 2xl-h:min-h-[80vh]">
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
                            and also have a passion for Modern Web Development
                            like <span className="text-sky-500">
                                React
                            </span> and{" "}
                            <span className="text-purple-500">Redux</span>.
                        </h2>
                        <div className="flex justify-center py-12">
                            <a
                                href="https://docs.google.com/document/d/1qohyj_emtczFoOeUp8N19ltUTxL33TuP/edit?usp=sharing&ouid=113887428276543602688&rtpof=true&sd=true"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="bg-gradient-main flex cursor-pointer items-center rounded-full px-6 py-2 text-white hover:opacity-80">
                                    <span className="pr-2 text-xl">
                                        Hire Me
                                    </span>
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
            {/* About Me */}
            <section className="py-12">
                <div className="container mx-auto">
                    <p className="mb-8 text-center font-carter text-3xl font-extrabold sm:text-4xl">
                        About Me
                    </p>
                    <div className="flex flex-col gap-8 sm:flex-row">
                        <div className="flex-1 ">
                            <div className="mx-auto h-[300px] w-[300px] rounded-xl bg-[url('/images/skillsStack.jpeg')] bg-cover sm:h-[400px] sm:w-[400px]" />
                        </div>
                        <div className="flex-1 px-8">
                            <p className="bg-gradient-secondary mb-4 inline-block bg-clip-text text-3xl font-black leading-10">
                                Martin Lin
                            </p>
                            <p className="mb-4 2xl:text-xl ">
                                I&apos;m a Frontend Developer based in Taiwan
                                and have {developmentYears} years of experiences
                                writing Web apps. I love solving problems by
                                simplifying complexity and putting those ideas
                                into practice, and enjoy every stage of creating
                                digital products that are wanted by users, easy
                                to use but also visually top notch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Experience */}
            <section className="py-12">
                <div className="container mx-auto xl:max-w-[1200px]">
                    <p className="mb-8 text-center font-carter text-3xl font-extrabold sm:text-4xl">
                        Experiences
                    </p>
                    <TimeLine timeEvents={EventsData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
