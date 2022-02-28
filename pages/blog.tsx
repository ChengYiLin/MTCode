import type { NextPage } from 'next';
import HeaderLayout from '../src/layout/HeaderLayout';

const Blog: NextPage = () => {
    return (
        <HeaderLayout>
            <p className="text-white">Test</p>
        </HeaderLayout>
    );
};

export default Blog;
