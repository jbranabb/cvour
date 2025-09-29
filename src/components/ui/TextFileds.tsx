import React from 'react'
interface params {
    placeholder:string
    name:string
    title:string
    className?: string

}
export default function TextFileds(param : params) {
    return (<div className="p-2">
        <div className="font-bold p-0.5">{param.title}</div>
        <input type="text"
            placeholder={param.placeholder}
            name={param.name}
            className={`p-2 rounded-sm 
            focus:outline-none
            focus:bg-white/20
            bg-white/15 font-medium w-[90%] ${param.className}`}
        />
    </div>
    )
}
