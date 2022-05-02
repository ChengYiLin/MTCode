import type { NextPage } from "next";
import Layout from "@components/layout/Layout";
import Wave from "@asset/images/wave.svg";

const Home: NextPage = () => {
    return (
        <Layout>
            {/* Who I am */}
            <div className="relative p-4 h-75vh max-h-[800px] bg-gradient-to-b from-white to-emerald-100 dark:from-gray-800 dark:to-cyan-800">
                <div className="container mx-auto sm:px-16 py-32 h-full flex items-center sm:bg-hero-pattern bg-right-bottom bg-contain bg-no-repeat">
                    <div className="max-w-[500px] select-none">
                        <div className="px-4 dark:text-white">
                            <h1 className="text-6xl sm:text-7xl">
                                <span className="block mb-8">Hello!</span>
                                I&apos;m{" "}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-emerald-400 dark:to-cyan-500">
                                    Martin
                                </span>
                                ,
                            </h1>
                            <p className="text-3xl mt-4">
                                a Frontend Engineer from Taiwan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <Wave />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
