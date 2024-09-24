import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents=()=>{
    return(
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Taletns</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap-reverse gap-8 justify-center">
                {
                    talents.map((talent, index) =>  <TalentCard key={index} {...talent}/>)    
                }
                
            </div>
            
        </div>
    )
}
export default Talents;