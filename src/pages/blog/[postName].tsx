import type { NextPage } from "next";
import { useRouter } from "next/router";

const Post: NextPage = () => {
    const router = useRouter();
    const { postName } = router.query;

    return <h1 className="bg-yellow-200 p-32 text-5xl">Blog - {postName}</h1>;
};

export default Post;
