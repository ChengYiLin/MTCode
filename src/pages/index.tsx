import type { NextPage } from "next";
import { Fragment } from "react";

const Home: NextPage = () => {
    return (
        <Fragment>
            {/* Who I am */}
            <section className="h-[70vh] min-h-[] bg-gradient-to-br from-indigo-200 via-sky-200 to-teal-100">
                <div className="container mx-auto py-6">
                    <div className="px-8">
                        <h1 className="p-6 text-center text-6xl font-extrabold italic">
                            Frontend
                            <br />
                            Engineer
                        </h1>
                        <h2 className="pt-4 text-lg">
                            Hi, I am <b className="text-rose-600">Martin</b>, a
                            Frontend Engineer from{" "}
                            <b className="text-green-600">Taiwan</b>.
                        </h2>
                        <p>
                            I work with <b className="text-blue-600">React</b>{" "}
                            Ecosystem, and I am passionate about building
                            performant Web app.
                        </p>
                    </div>
                    <div className="p-8">hello</div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
