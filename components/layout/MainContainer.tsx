import { MainLayoutProps } from "../../types/layoutTypes"


export const MainContainer = ({flexdir = "flex-col", children}:MainLayoutProps) => {
  return (
    <div
      className="flex justify-center"
    >
      <div className={`flex items-start w-full tablet:w-[640px] laptop:w-[1024px] desktop:w-[1280px] ${flexdir}`}>
        {children}
      </div>
        
    </div>
  )
}
