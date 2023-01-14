export interface ButtonProps {

    label?: string;
    onClick?: ()=> void;
    variant: "normal" | "outline" 
    className?: string;

}