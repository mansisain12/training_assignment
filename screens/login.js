import React from "react";
import Userform from "./userform";

const Login = () => {
    return(
        <Userform

        input={ {borderWidth:1,borderRadius:20,marginHorizontal:"5%",borderColor:"rgb(113,189,72)"}}
        header={{ flex:1,justifyContent:"center",}}
        button={{flex:0.4,alignItems:"center",justifyContent:"space-around" }}
        press={{backgroundColor:"rgb(113,189,72)",height:"75%",padding:"1.5%",}}
        modal={{height:"50%",margin:30,marginTop:250}}
        child={{backgroundColor:"lightgreen",height:"100%",borderRadius:20,borderWidth:10,}}
        headline={{fontSize:25,fontWeight:"900",textAlign:"center",
        marginBottom:"2%",color:"rgb(113,189,72)"}}

        place1={"Full Name"}
        place2={"Email"}
        place3={"Password"}
        place4={"Confirm Password"}
        place5={"Address"}
        place6={"Phone No."}

        modaldata={"please ckeck filled information...."}
       


        

            
        />
    )
}

export default Login;