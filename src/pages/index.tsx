import type { NextPage } from "next";
import Layout from "@components/layout/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            {/* Who I am */}
            <div className="p-4 h-75vh max-h-[800px] bg-gradient-to-b from-white to-emerald-300 dark:from-gray-800 dark:to-cyan-800">
                <div className="container mx-auto h-full flex items-center">
                    <div>
                        <div className="dark:text-white">
                            <p>Hi !</p>
                            <h1>You can call me Martin</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
