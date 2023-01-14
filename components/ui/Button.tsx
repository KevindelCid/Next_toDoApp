
import { ClassType } from 'react'
import { ButtonProps } from '../../types'




export const Button = ({label, onClick, variant, className}:ButtonProps) => {

  const selectedStyle = ():string=>{

    if(variant === "outline")
    return "bg-black text-skyBlueWhite hover:bg-blueDark border-[1px] border-skyBlueWhite"
    else if(variant === "normal")
    return "bg-blueDark text-white border-[1px] border-blueDark border-skyBlueWhite  hover:bg-black"
    else return ""
 
  }


  return (
    <button 
        onClick={onClick} 
        className={`py-4 px-6 text-mediumMobile rounded-lg transition ease-in ${selectedStyle()}`}
        >{label}</button>
  )
}
