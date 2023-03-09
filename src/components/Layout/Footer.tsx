import { FC } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from 'react-icons/io5';

const Footer: FC = () => {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-center py-4 text-slate-500">
          <p className="mb-4 text-sm font-bold">Reach me out</p>
          <nav className="flex gap-6 px-4">
            <a
              className="cursor-pointer text-2xl hover:text-slate-800 dark:hover:text-slate-300"
              target="_blank"
              href="https://github.com/ChengYiLin"
              rel="noreferrer"
              aria-label="Github"
            >
              <IoLogoGithub />
            </a>
            <a
              className="cursor-pointer text-2xl hover:text-sky-400"
              target="_blank"
              href="https://www.linkedin.com/in/cheng-yi-lin/"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="cursor-pointer text-2xl hover:text-rose-500"
              target="_blank"
              href="mailto:cheng.yi.lin.217@gmail.com?subject='Hi Martin'"
              rel="noreferrer"
              aria-label="Gmail"
            >
              <IoMailSharp />
            </a>
          </nav>
        </div>

        <p className="text-center text-xs text-slate-500">
          Martin Lin • © 2023 • Personal Website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
