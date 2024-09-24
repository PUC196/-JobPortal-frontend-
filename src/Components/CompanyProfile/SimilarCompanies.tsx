import { similar } from "../../Data/Company";
import ComapanyCard from "./CompanyCard";

const SimilarCompanies=()=>{
    return(
        <div className="w-1/4">
            <div className="text-xl font-semibold mb-5">similar Companaies</div>
            <div className="flex flex-col flex-wrap gap-5">
                {
                    similar.map((company, index)=><ComapanyCard key={index} {...company}/>)
                }
            </div>
        </div>
    );
};
export default SimilarCompanies;