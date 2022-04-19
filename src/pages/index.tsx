import type { NextPage } from "next";
import Layout from "@components/layout/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <h1 className="text-cyan-500">This is Content</h1>
        </Layout>
    );
};

export default Home;
