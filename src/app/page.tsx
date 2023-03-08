import Image from 'next/image';
import { BsFillFilePersonFill, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="mx-auto max-w-screen-xl px-4 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:px-16">
          <div className="py-16 text-center lg:col-span-5">
            <h1 className="text-5xl font-extrabold italic leading-normal lg:text-7xl lg:leading-tight">
              Martin Lin
              <br />
              林政儀
            </h1>
            <h2 className="mx-auto max-w-xs py-12 text-lg">
              <span className="relative mr-2 inline-block px-1 text-xl before:absolute before:-inset-1 before:block before:-skew-y-12 before:bg-secondary">
                <span className="relative"> Hi !</span>
              </span>
              我是來自台灣的軟體工程師
              <br />
              熱衷於網頁的前後端開發
              <br />
              熟悉 JavaScript 及 React 生態系
            </h2>
            <div className="mx-auto flex max-w-xs items-center justify-between rounded-full border-2 border-black p-2 dark:border-slate-300">
              <div className="relative">
                <div className="relative h-16 w-16 overflow-clip rounded-full bg-primary">
                  <Image
                    src="/assets/selfie/selfie_128.png"
                    alt="Martin Lin 林政儀 - Software Engineer"
                    fill
                    className="translate-x-1 translate-y-1"
                  />
                </div>
                <div className="absolute top-12 right-0 z-[1] h-4 w-4">
                  <div className="absolute z-[1] h-3 w-3 rounded-full bg-green-300"></div>
                  <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-500"></div>
                </div>
              </div>
              <nav className="flex gap-6 px-4">
                <a
                  className="cursor-pointer text-2xl hover:text-slate-600"
                  target="_blank"
                  href="https://github.com/ChengYiLin"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <BsGithub />
                </a>
                <a
                  className="cursor-pointer text-2xl hover:text-sky-600"
                  target="_blank"
                  href="https://www.linkedin.com/in/cheng-yi-lin/"
                  rel="noreferrer"
                  aria-label="Linkedin"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="cursor-pointer text-2xl hover:text-rose-600"
                  target="_blank"
                  href="https://docs.google.com/document/d/1qohyj_emtczFoOeUp8N19ltUTxL33TuP/edit?usp=sharing&ouid=113887428276543602688&rtpof=true&sd=true"
                  rel="noreferrer"
                  aria-label="Resume"
                >
                  <BsFillFilePersonFill />
                </a>
              </nav>
            </div>
          </div>
          <div className="pt-0 pb-16 lg:col-span-5 lg:col-start-8 lg:py-8">
            <div className="bg-gradient relative mx-auto aspect-square w-80 overflow-clip rounded-r-3xl rounded-tl-[40%] shadow-[12px_12px_0] shadow-amber-300 dark:shadow-rose-600 lg:w-10/12 ">
              <Image
                src="/assets/selfie/selfie_360.png"
                alt="Martin Lin 林政儀 - Software Engineer"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
