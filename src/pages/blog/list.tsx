import type { NextPage } from "next";
import Link from "next/link";

const Blog: NextPage = () => {
    return (
        <div>
            <h1 className="bg-green-200 p-32 text-5xl">Blog List</h1>
            <ul className="list-disc">
                <li>
                    <Link href={"/blog/Post1"}>Post 1</Link>
                </li>
                <li>
                    <Link href={"/blog/Post2"}>Post 2</Link>
                </li>
                <li>
                    <Link href={"/blog/Post3"}>Post 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Blog;
