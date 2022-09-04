import { FC } from "react";
import dayjs from "dayjs";
import parse from "html-react-parser";

export { default as EventsData } from "./constant";

export interface ITimeEvent {
    title: string;
    time: Date;
    organization: string;
    organizationLink: string;
    organizationImage: string;
    themeColor: string;
    eventDetail: string[];
}

interface Props {
    timeEvents: ITimeEvent[];
}

const TimeLine: FC<Props> = ({ timeEvents }) => {
    if (timeEvents.length === 0) {
        return <></>;
    }

    return (
        <div>
            <ol className="relative flex flex-col items-start p-8 pb-2 sm:items-center">
                {/* Time Line */}
                <div className="position-center left-0 z-0 ml-8 h-[95%] w-2 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 sm:left-1/2 sm:ml-0" />
                {/* Time Events */}
                {Array.isArray(timeEvents) &&
                    timeEvents.map((timeEvent, index) => {
                        const isEven = index % 2 === 0;

                        const eventPosition = isEven
                            ? "justify-start"
                            : "justify-start sm:justify-end";

                        const borderPosition = isEven
                            ? "border-l-4 sm:border-r-4 sm:border-l-0"
                            : "border-l-4";

                        return (
                            <li
                                key={`${timeEvent.title}_${index}`}
                                className={`relative ml-8 mb-8 flex w-full sm:ml-0 ${eventPosition}`}
                            >
                                <div
                                    className={`w-11/12 rounded-lg bg-slate-200 py-6 px-4 sm:w-5/12 ${borderPosition}`}
                                    style={{
                                        borderColor: `${timeEvent.themeColor}`,
                                    }}
                                >
                                    <div className="grid-row-2 grid grid-cols-[1fr_64px]">
                                        <h3 className="mb-2 text-xl font-extrabold lg:text-2xl">
                                            {timeEvent.title}
                                        </h3>
                                        <div
                                            className="row-span-2 h-16 w-16 justify-self-end rounded-full bg-cover"
                                            style={{
                                                backgroundImage: `url(${timeEvent.organizationImage})`,
                                            }}
                                        ></div>
                                        <h4 className="my-2 text-sm text-slate-500 lg:text-base">
                                            {timeEvent.organization} -{" "}
                                            {dayjs(timeEvent.time).format(
                                                "YYYY.MM"
                                            )}
                                        </h4>
                                    </div>
                                    <ul className="list-disc pl-4">
                                        {timeEvent.eventDetail.map(
                                            (eventDetail, index) => (
                                                <li
                                                    className="mb-2"
                                                    key={`${timeEvent.organization}_${index}`}
                                                >
                                                    {parse(eventDetail)}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div
                                    className={`position-center -left-8 h-8 w-8 rounded-full sm:left-1/2`}
                                    style={{
                                        backgroundColor: `${timeEvent.themeColor}`,
                                    }}
                                >
                                    <div className="position-center h-3 w-3 rounded-full bg-white" />
                                </div>
                            </li>
                        );
                    })}
            </ol>
        </div>
    );
};

export default TimeLine;
