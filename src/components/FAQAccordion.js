import React, {useState} from "react";


export default function FAQAccordion(props) {
    const [open, setOpen] = useState(false);

    function handleClick(){
        setOpen(!open)
    }

    return (
        <div className="w-full">
            <div className="flex justify-between items-center px-8 py-4 cursor-pointer" onClick={handleClick}>
                <p>{props.question}</p>
                {!open ? <i className="fa-solid fa-plus" /> : <i className="fa-solid fa-minus" />}
            </div>
            <div className={`${open ? '' : 'hidden'} px-8 py-2`}>
                <p>{props.answer}</p>
            </div>
        </div>
    )
}