
import Companies from "../Components/LandingPage/Companies";
import JobCategory from "../Components/LandingPage/JobCategory";
import Working from "../Components/LandingPage/Working";
import Subscribe from "../Components/LandingPage/Subscribe";
import Testimonials from "../Components/LandingPage/Testimonials";
import DreamJob from "../Components/LandingPage/DreamJob";

const HomePage =()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    
    );
}
export default HomePage; 