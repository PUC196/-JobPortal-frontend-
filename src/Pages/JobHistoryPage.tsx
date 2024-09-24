import { Divider } from "@mantine/core";
import JobHistory from "../Components/JobHistory/JobHistory";

const JobHistoryPage=()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <Divider size="xs"/>
            <div className=" my-5 ">
                <JobHistory applied="true" offered="true"/>
            </div>
        </div>
    )
}
export default JobHistoryPage; 