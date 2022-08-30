import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { RiExternalLinkFill } from "react-icons/ri";

const Home: NextPage = () => {
    return (
        <Fragment>
            {/* Who I am */}
            <section>
                <div className="container mx-auto flex min-h-[calc(100vh-64px)] flex-col md:flex-row">
                    <div className="flex-1 self-center">
                        <h1 className="py-12 text-center text-4xl font-extrabold sm:text-6xl">
                            Frontend Engineer
                        </h1>
                        <h2 className="mx-auto max-w-xl px-4 text-center text-lg lg:text-xl">
                            Hi, my name is{" "}
                            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent">
                                Martin.
                            </span>
                            <br />
                            I&apos;m a frontend engineer from Taiwan
                            <br />
                            and also have a passion for Modern Web Development
                            like <span className="text-sky-500">
                                React
                            </span> and{" "}
                            <span className="text-purple-500">Redux</span>.
                        </h2>
                        <div className="flex justify-center py-12 ">
                            <Link href="/about">
                                <div className="bg-gradient-main flex cursor-pointer items-center rounded-full px-6 py-2 text-white hover:opacity-80">
                                    <span className="pr-2 text-xl">
                                        About Me
                                    </span>
                                    <RiExternalLinkFill
                                        size="1.5rem"
                                        className="fill-white"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 self-center justify-self-center">
                        <div className="mx-auto mb-8 h-[375px] w-[300px] rounded-tl-full bg-gradient-to-r from-sky-500 to-pink-500 lg:h-[500px] lg:w-[400px]">
                            <div className="h-full w-full bg-[url('/images/selfie.png')] bg-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
