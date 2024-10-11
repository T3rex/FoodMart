import { Outlet } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/UserContext";



const About  = () =>{

    const {username,pass} = useContext(userContext);
    

    return(
        <>
        <h1>I am about page</h1>
        <h2>{username}</h2>
        <h2>{pass}</h2>
        <Outlet/>        
        </>
    )
}

export default About;