import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IPostPageProps } from "./[postName]";
interface IPostData extends Omit<IPostPageProps, "content"> {
    link: string;
}

interface IBlogListProps {
    postsData: IPostData[];
}

const BlogList: NextPage<IBlogListProps> = ({ postsData }) => {
    console.log(postsData);

    return (
        <div className="min-h-[calc(100vh-216px)]">
            <Head>
                <title>Blog - Martin Code</title>
            </Head>
            <div className="bg-gradient-to-b from-cyan-500 to-blue-500 py-16">
                <div className="container mx-auto px-6 sm:px-0">
                    <h1 className="inline-block border-b-4 border-white  text-5xl font-extrabold leading-relaxed text-white">
                        Blog
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-6 py-8 sm:px-0">
                {postsData.map((postInfo) => (
                    <div key={postInfo.link}>
                        <Link href={`/blog/${postInfo.link}`}>
                            {postInfo.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const postDir = join(process.cwd(), "src/content/blog");

    const postsData = readdirSync(postDir).map((fileName) => {
        const postPath = join(process.cwd(), "src/content/blog", fileName);
        const postFile = readFileSync(postPath, "utf-8");
        const { data } = matter(postFile);

        return {
            link: fileName.replace(".mdx", ""),
            ...data,
        };
    });

    return {
        props: {
            postsData,
        },
    };
};

export default BlogList;
