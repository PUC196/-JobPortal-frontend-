import { Button, Divider } from "@mantine/core";
import { IconArrowLeft, IconBrandSafari } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignUpLogin/Login";
import SignUp from "../Components/SignUpLogin/SignUp";

const SignUpPage =()=>{
    const location=useLocation();
    const navigate=useNavigate();
    return (
        
        
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden ">
            <Button className="!absolute left-5 z-10" color="bright-sun.4" my="md" onClick={()=>navigate("/HomePage")} leftSection={<IconArrowLeft size={20}/>}  variant="light" >Home</Button>
            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?' -translate-x-1/2':'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconBrandSafari className="h-20 w-20" stroke={1.8} />
                    <div className="text-6xl font-semibold">jobNimbus</div>
                </div>
                <div className="text-2xl text-mine-shaft-200 font-semibold">find the made for you</div>
                </div>
                <SignUp/>
            </div>
        </div>
    )
};
export default SignUpPage;