import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card =(props:any)=>{
    return (
        <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] transition duration-300 ease-in-out !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300 ">{props.company} &#x2022; {props.applicants} Applicants</div>
                    </div>
                </div>
                {props.saved?<IconBookmarkFilled className="text-bright-sun-400 cursor-pointer"/>:<IconBookmark className="text-mine-shaft-300 cursor-pointer"/>}
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs ">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.description}
                </Text>
            <Divider size="sm"color="mine-shaft.7" />
            <div className="flex justify-between"> 
                <div className="font-semibold text-mine-shaft-200">
                    &#8377;{props.package}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <IconClockHour3 className="h-5 w-5" stroke={1.5}/> { props.applied || props.interviewing ? "Applied" :props.offered?"Interviewed":"Posted" } {props.postedDaysAgo} days ago
                </div>
            </div>
            {(props.offered || props.interviewing) && <Divider size="sm"color="mine-shaft.7" />}
            {
                props.offered &&<div className="flex gap-2 justify-around">
                    <Button color="bright-sun.4" variant="outline"px={35}>Accept</Button>
                    <Button color="bright-sun.4" variant="light" px={35} >Reject</Button>
                </div>
            }
            {
               props.interviewing && <div className="flex gap-1 text-sm items-center">
                <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5}/>Sun, 25 August &bull;<span className="text-mine-shaft-400">10:00</span> 
            </div>
            }
        </Link>
    )
}
export default Card;