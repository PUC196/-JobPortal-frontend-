import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../../Data/PostedJob";

const  Postedjob =()=>{

    return (
        <div className="w-1/6 mb-5">
            <div className="text-2xl font-semibold m-5 ">Jobs</div>
            <div>
            <Tabs autoContrast variant="pills" defaultValue="active">
                <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900">
                    <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                    <Tabs.Tab value="draft">drafts [1]</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active">
                    <div className="flex flex-col gap-5 mt-5">
                        {
                            activeJobs.map((item, index)=> <PostedJobCard key={index} {...item}/>) 

                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="draft">
                    s
                </Tabs.Panel>
            </Tabs>
            </div>
        
        </div>
    )
}
export default Postedjob;