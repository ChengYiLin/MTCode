import { ITimeEvent } from ".";

// TODO: Change to use API
const TIME_EVENTS: ITimeEvent[] = [
    {
        title: "Frontend Engineer",
        time: new Date("2020-09-21"),
        organization: "91APP",
        organizationImage: "/images/91app.jpg",
        organizationLink: "https://www.91app.com/",
        themeColor: "red",
        eventDetail: [
            "Chaired the Inventory Management System provided to the chain stores like <a className='text-orange-500' href='https://shop.cosmed.com.tw/' target='_blank'>Cosmed</a> in Taiwan.",
            "Established the <a className='bg-gradient-secondary bg-clip-text' href='https://github.com/ChengYiLin/Generate-PDF-from-React-SSR' target='_blank'>PDF Generated Service</a> through React Server Side Render.",
            "Developed and Maintain the Reusable UI components Library for company systems.",
        ],
    },
    {
        title: "Frontend Trainee",
        time: new Date("2020-03-21"),
        organization: "AppWorks School",
        organizationLink: "https://school.appworks.tw/",
        organizationImage: "/images/AppWorksSchool.jpg",
        themeColor: "orange",
        eventDetail: [
            "Developed the <a className='bg-gradient-secondary bg-clip-text' href='https://shop.cosmed.com.tw/' target='_blank'>Full-stack Chat Application</a> by React and Django from scratch.",
            "Built an  <a className='bg-gradient-secondary bg-clip-text' href='https://chengyilin.github.io/STYLiSH/' target='_blank'>RWD E-commerce Website</a> using HTML5, CSS, and Vanilla JS.",
        ],
    },
];

export default TIME_EVENTS;
