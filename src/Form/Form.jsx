import React from "react";
import { useNavigate } from "react-router-dom";
function Form(){
    const navigate=useNavigate();
    const [formData,setFormData]=React.useState({
        name:'',
        email:''
    })

    const handelchanges=(e)=>{
        const{name,value}=e.target;
        setFormData(
            {
                ...formData,
                [name]:value
                //name=name value
                //email=email value
            }
        );
    }

    const handleSubmit=(e)=>{
        console.log(formData)
        fetch('http://localhost:5000/api/hi1',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
    }

    function buttonclicked(){
        handleSubmit();
        alert("registered")
        navigate('/displayimages')
    }

    return(
        <div>
            <form>
                <lable>Name</lable>
                <input type="text" name="name" value={formData.name} onChange={handelchanges}/><br/>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handelchanges}/><br/>
                <button onClick={buttonclicked}>SUBMIT</button>
            </form>
        </div>
    );
}
export default Form;