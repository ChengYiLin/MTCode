import Image from "next/image";
import { BsFillFilePersonFill, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="px-4 max-w-screen-xl mx-auto lg:px-16 lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center">
          <div className="py-16 text-center lg:col-span-5">
            <h1 className="text-5xl font-extrabold leading-tight">
              Software Engineer
            </h1>
            <h2 className="max-w-xs mx-auto text-lg py-12">
              Hi, 我是{" "}
              <span className="text-xl font-bold text-primary dark:text-secondary">
                Martin
              </span>
              ,
              <br />
              來自台灣的軟體工程師
              <br />
              熱衷於網頁的前後端開發
              <br />
              熟悉 JavaScript 及 React 生態系
            </h2>
            <div className="max-w-xs mx-auto border-2 border-black dark:border-slate-300 rounded-full p-2 flex justify-between items-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full relative overflow-clip">
                  <Image
                    src="/assets/selfie/selfie_128.png"
                    alt="selfie"
                    fill
                    className="translate-x-1 translate-y-1"
                  />
                </div>
                <div className="absolute w-4 h-4 top-12 right-0 z-[1]">
                  <div className="w-3 h-3 bg-green-300 rounded-full absolute z-[1]"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute animate-ping"></div>
                </div>
              </div>
              <nav className="flex gap-6 px-4">
                <a
                  className="text-2xl cursor-pointer hover:text-slate-600"
                  target="_blank"
                  href="https://github.com/ChengYiLin"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <BsGithub />
                </a>
                <a
                  className="text-2xl cursor-pointer hover:text-sky-600"
                  target="_blank"
                  href="https://www.linkedin.com/in/cheng-yi-lin/"
                  rel="noreferrer"
                  aria-label="Linkedin"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="text-2xl cursor-pointer hover:text-rose-600"
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
          <div className="pt-0 pb-16 lg:py-8 lg:col-start-8 lg:col-span-5">
            <div className="w-80 h-80 mx-auto rounded-tl-[40%] rounded-r-3xl bg-gradient relative overflow-clip shadow-[12px_12px_0] shadow-amber-300 dark:shadow-rose-600">
              <Image
                src="/assets/selfie/selfie_360.png"
                alt="selfie"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
