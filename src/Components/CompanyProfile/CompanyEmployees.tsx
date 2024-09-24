
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const ComapanyEmployees=()=>{
    return(
        <div className="mt-10 flex flex-wrap-reverse gap-12">
        {
            talents.map((talent, index) => index<6 &&  <TalentCard key={index} {...talent}/>)    
        }
        
    </div>
    )
}
export default ComapanyEmployees;