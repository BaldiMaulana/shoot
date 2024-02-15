'use client';
import React,{useState} from "react";
import Style from '@/app/pages/target.module.css'

function Page({onNameChange}) {
    const question = " Will you be my lover ? "

    const [name , setName] = useState('')
    const [showOptions , setShowOptions] = useState(false);
    const [nameToDisplay,setNameToDisplay]= useState('')
    const [pick , setPick] = useState (false)
    const [isVisible,setIsVisible]=useState(true)


    const handleChange = (e) =>{
        setName(e.target.value);
    }

    const handleSummit = () =>{
        if(!name.trim()){
            alert('Please input your name!');
            return
        }else{
            onNameChange(name)
            setShowOptions(true)
            setNameToDisplay(name.toUpperCase() + question)
            setName('')
        }
    }


    const handleKey = (e) =>{
        if(e.key === 'Enter'){
            if(!name.trim()){
                alert('Please input your name!');
                return
            }else{
                onNameChange(name)
                setShowOptions(true)
                setNameToDisplay(name.toUpperCase() + question)
                setName('')
            }
        }
    }    

    const handlePick = () =>{
        setPick(true)
    }

    const handleNo = () =>{
        setIsVisible(false)
    }

    const date = new Date().toDateString()
    return(
    <div className={`sm:grid mt-2  rounded-xl ${Style.glass}`}>
            <h1 className="text-center ">Write your name!</h1>
        <div className="sm:grid lg:flex justify-center gap-1">
        <input 
        type="text"
        placeholder="Fill in your name here :  " 
        value={name}
        onChange={handleChange}
        onKeyPress={handleKey}
        className="pl-2 border-4 w-full border-black rounded-xl text-black flex justify-center sm:text-xs lg:text-lg"
        />
        <button 
        className="bg-black text-white p-2 rounded-xl "
        onClick={handleSummit}
        >🚀</button>
        </div>


        
        <div className="grid justify-center text-center">
            <h1>{nameToDisplay}</h1>
            {pick && (
                <div>
                    <h1 className="text-center">Our anniversary date: {date}</h1>
                </div>
            )}
        {showOptions && (
            <div className="flex justify-center mt-4">
                <button 
                onClick={handlePick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 ">Yes</button>
                {isVisible &&(
                <button 
                id="no"
                onClick={handleNo}
                className="bg-red-500 text-white px-4 py-2 rounded-lg">No</button>
                )}
            </div>
            )}

        </div>
    </div>
    )
}

export default Page