import { ReactNode } from "react";

export interface MainLayoutProps {
    flexdir: "flex-col" | "flex-row";
    children: ReactNode;
}
export interface LayoutProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;


}