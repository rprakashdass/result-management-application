/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// import { useNavigate } from "react-router-dom"


export default function SubjectList(){
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState({
        title: "",
        department: "",
        studentsCount: "",
    })

    const onChange = (e) => {setSubjects(
       { ...subjects, [e.target.name] : e.target.value}
    )}

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/api/subjects", subjects)
            .then( (res) => {
                 setSubjects({
                        title: "",
                        department: "",
                        studentsCount: "",
                    })
                })
            .catch((err) => {
                    console.log("Error in CreateSubjects!");
            })
        navigate('show');
    }
    const formStyle = {
        position: "absolute",
        backgroundColor: "grey",
        top: "auto",
        left: "50%",
        right: "50%"
    }
    

    return(
        <div style={formStyle}>
            <form onSubmit={onSubmit}>
                <label>Enter Title</label><br/>
                <input name="title" type="text" onChange={onChange} value={subjects.title}/><br/>
                <label>Enter department</label><br/>
                <input name="department" type="text" onChange={onChange} value={subjects.department}/><br/>
                <label>Enter studentsCount</label><br/>
                <input name="studentsCount" type="number" onChange={onChange} value={subjects.studentsCount}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}