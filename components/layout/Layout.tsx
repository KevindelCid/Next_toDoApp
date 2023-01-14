import { LayoutProps } from "../../types/layoutTypes"


export const Layout = ({children, className, onClick}:LayoutProps) => {
  return (
    <div className={`${className}`} onClick={onClick && onClick}>{children}</div>
  )
}
