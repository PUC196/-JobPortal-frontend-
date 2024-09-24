import { Tabs } from "@mantine/core";
import Card from "./Card";
import { jobList } from "../../Data/JobsData";

const JobHistory=(props:any)=>{
    return (
        <div className="">
            <div className="text-2xl font-semibold m-5 ">Jobs</div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="applied">
                    <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="applied">
                    <div className="mt-10 flex flex-wrap-reverse gap-10 justify-center">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} applied={props.applied} />)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved">
                    <div className="mt-10 flex flex-wrap-reverse gap-10 justify-center">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} saved={true}/>)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                    <div className="mt-10 flex flex-wrap-reverse gap-10 justify-center">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} offered={props.offered} />)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="interviewing">
                    <div className="mt-10 flex flex-wrap-reverse gap-10 justify-center">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} interviewing  />)
                        }
                    </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}
export default JobHistory; 