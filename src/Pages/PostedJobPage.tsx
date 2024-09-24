import { Divider } from "@mantine/core";
import Postedjob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";

const PostedJobPage=()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <Divider size="xs"/>
            <div className="flex gap-5 ">
                <Postedjob/>
                <PostedJobDesc/>
            </div>
        </div>
    )
}
export default PostedJobPage; 