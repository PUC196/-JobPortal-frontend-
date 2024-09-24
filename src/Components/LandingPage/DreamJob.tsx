
import { TextInput, Avatar } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";
const DreamJob =()=> {
    return(
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%]">
                <div className='text-7xl font-bold leading-tight text-mine-shaft-50 [&>span]:text-bright-sun-400'>Find your <span>Dream Job</span> with us</div>
                <div className="mt-5 text-lg text-mine-shaft-200">Good life begins with good company. Start explore thousands 
                    of jobs in one place.</div>
                <div className='mt-7 flex gap-3 '>
                    <TextInput className='bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-50 [&_input]:!text-mine-shaft-100'
                        variant="unstyled"
                        label="Job Title"
                    
                        placeholder="Software Engineer"
                    />
                    <TextInput className='bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-50 [&_input]:!text-mine-shaft-100'
                        variant="unstyled"
                        label="Job Type"
                   
                        placeholder="Fulltime"
                    />
                    <div className="flex items-center bg-bright-sun-400 rounded-lg justify-center p-2 px-3.5 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-12 w-12 text-mine-shaft-50"/>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[100%] items-center justify-center ' >
                    <img src="/Boy.png" alt="boy" className='w-[40rem]'/>
                    <div className=' absolute right-[calc(40%+10px)] top-[38%] gap-3 flex-col border-bright-sun-400 border rounded-lg p-3 backdrop-blur-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg '>
                                <img src='Google.png'/>
                            </div>
                            <div className='text-sm text-mine-shaft-100'>
                                <div>Software Engineer</div>
                                <div className='text-mine-shaft-200 text-xs'>New York</div>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-around mt-3 text-mine-shaft-200 text-xs'>
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                    <div className=' absolute right-[calc(11%+10px)] top-[55%] border-bright-sun-400 border rounded-lg p-3 backdrop-blur-lg'>
                        <div className='text-center mb-1 text-sm text-mine-shaft-100'>
                            10K+ got job
                        </div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DreamJob;