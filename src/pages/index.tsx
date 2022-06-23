import type { NextPage } from "next";

import Wave from "@asset/images/wave.svg";
import { Fragment } from "react";

const Home: NextPage = () => {
    return (
        <Fragment>
            {/* Who I am */}
            <div className="relative h-75vh max-h-[800px] bg-gradient-to-b from-white to-emerald-100 p-4 dark:from-gray-800 dark:to-cyan-800">
                <div className="container mx-auto flex h-full items-center bg-cover bg-right-bottom bg-no-repeat py-32 sm:px-16">
                    <div className="max-w-[500px]">
                        <div className="px-4 dark:text-white">
                            <h1 className="text-4xl sm:text-7xl">
                                <span className="mb-8 block">Hello!</span>
                                I&apos;m{" "}
                                <span className="text-gradient-color font-bold">
                                    Martin
                                </span>
                                ,
                            </h1>
                            <p className="mt-4 text-3xl">
                                a Frontend Engineer from Taiwan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <Wave />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
