import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";

export interface IPostPageProps {
    title: string;
    date: string;
    tags: string[];
    bannerImage: string;
    author: string;
    content: string;
}

const Post: NextPage<IPostPageProps> = (props) => {
    const { title, date, tags, bannerImage, author, content } = props;
    console.log(props);

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-2xl">{title}</h1>
            <p>author : {author}</p>
            <p>date : {date}</p>
            <p>tags: {tags}</p>
            <p>banner Image : {bannerImage}</p>
            <div>
                <p className="text-xl">Content</p>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const postDir = join(process.cwd(), "src/content/blog");
    const postFiles = readdirSync(postDir).map((fileName) => ({
        params: {
            postName: fileName.replace(".mdx", ""),
        },
    }));

    return {
        paths: postFiles,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postName = params?.postName as string;
    const postPath = join(process.cwd(), "src/content/blog", `${postName}.mdx`);
    const postFile = readFileSync(postPath, "utf-8");

    const { content, data } = matter(postFile);

    return {
        props: {
            content,
            ...data,
        },
    };
};

export default Post;
