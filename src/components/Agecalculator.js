import React from 'react';
import { useEffect, useState } from "react";


const Agecalculator = () =>{

    const[birthdate, setBirthdate]= useState('');
    const[age, setAge] = useState(0);

    const calculateAge =() =>{
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age= today.getFullYear()- birthdateDate.getFullYear();
        const monthDiff = today.getMonth()- birthdateDate.getMonth();
        if(monthDiff < 0 || (monthDiff==0 && today.getDate()< birthdateDate.getDate()))
        {
            age--;
        }
        setAge(age);
    }
    return (
        <form>
            <div>
            <input type='date' value = {birthdate} onChange= {e =>setBirthdate(e.target.value)}/>
            </div>

        
        <div>
        <button id="bt1" type="submit" onClick={calculateAge}>Calculate Age</button>
        </div>

        <h2 >You are {age>0 ?  `${age}` : ''} years old</h2> 
        
        
    </form>
    );
};

export default Agecalculator;