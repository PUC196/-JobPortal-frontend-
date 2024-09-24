import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";


const Jobs=()=>{
    return(
        <div className="p-7">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap-reverse gap-10 justify-center">
                {
                    jobList.map((job, index) => <JobCard key={index} {...job} />)
                }
            </div>
            
        </div>
    )
}
export default Jobs;