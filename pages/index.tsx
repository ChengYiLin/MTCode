import type { NextPage } from 'next';
import HeaderLayout from '../src/layout/HeaderLayout';

const Home: NextPage = () => {
    return (
        <HeaderLayout>
            <section
                id="Section1"
                className="h-screen box-border py-16 flex justify-center items-center"
            >
                <div className="text-white text-center">
                    <p className="text-3xl leading-relaxed ">嗨 !</p>
                    <h1 className="text-5xl leading-relaxed ">
                        You can call me Martin
                    </h1>
                </div>
            </section>
            <section id="Section2" className="h-screen">
                <p>Section 2</p>
            </section>
            <section id="Section3" className="h-screen">
                <p>Section 3</p>
            </section>
        </HeaderLayout>
    );
};

export default Home;
