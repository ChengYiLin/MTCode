import { FC } from "react";
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer: FC = () => {
    return (
        <footer className="dark:bg-dark bg-light">
            <div className="container mx-auto p-8 text-center text-slate-500">
                <p>Reach Me Out</p>
                <nav className="flex list-none justify-center gap-4 py-3 text-2xl">
                    <li>
                        <a
                            href={"https://github.com/ChengYiLin"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoGithub className="cursor-pointer hover:text-slate-800" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:cheng.yi.lin.217@gmail.com?subject=Hi Martin">
                            <IoMail className="cursor-pointer hover:text-rose-500" />
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://www.linkedin.com/in/cheng-yi-lin/"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoLinkedin className="cursor-pointer hover:text-blue-400" />
                        </a>
                    </li>
                </nav>
                <p>© Cheng Yi Lin 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
