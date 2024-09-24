import Profile from "../Components/Profile/Profile";
import { profile } from "../Data/TalentData";

const ProfilePage =()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <div className="gap-5"></div>
            <Profile {...profile}/>
        </div>
    )
};
export default ProfilePage;