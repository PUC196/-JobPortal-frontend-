import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { profile } from "../Data/TalentData";
import Profile from "../Components/TalentProfile/Profile";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";

const TalentProfilePage =()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className=" inline-block"to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light" >Back</Button>
            </Link>

            <div className="flex gap-5 my-5">
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
        </div>
    )
};
export default TalentProfilePage;


