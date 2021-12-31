import type { NextPage } from 'next';
import HeaderLayout from '../layout/HeaderLayout';

const Home: NextPage = () => {
    return (
        <HeaderLayout>
            <section id="Section1" className="h-screen bg-emerald-600">
                <p>Section 1</p>
            </section>
            <section id="Section2" className="h-screen bg-emerald-400">
                <p>Section 2</p>
            </section>
            <section id="Section3" className="h-screen bg-emerald-200">
                <p>Section 3</p>
            </section>
        </HeaderLayout>
    );
};

export default Home;
