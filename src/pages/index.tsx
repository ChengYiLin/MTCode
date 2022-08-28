import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import Arrow from "@public/icons/arrow.svg";

const Home: NextPage = () => {
    return (
        <Fragment>
            {/* Who I am */}
            <section className="bg-slate-200">
                <div className="container mx-auto flex min-h-[calc(100vh-64px)] flex-col md:flex-row">
                    <div className="item flex-1 self-center">
                        <h1 className="py-12 text-center text-4xl font-extrabold">
                            Frontend Engineer
                        </h1>
                        <h2 className="text-center">
                            <span className="text-xl">
                                Hi, I&apos;m{" "}
                                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent">
                                    Martin
                                </span>
                                ,
                                <br />a Frontend Engineer From Taiwan.
                                <br />I have 2 years of experience in Web
                                development,
                                <br />
                                and work with popular frameworks like React.
                            </span>
                        </h2>
                        <div className="flex justify-center py-12">
                            <Link href="/about">
                                <div className="bg-gradient-main flex cursor-pointer items-center rounded-full px-6 text-white">
                                    <span className="px-4">Contact Me</span>
                                    <Arrow className="fill-white" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
