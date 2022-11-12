import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useSetRecoilState } from "recoil"
import { Drawer } from "../Drawer/Drawer"
import { isDrawerOpen } from "../Drawer/isDrawerOpen"

export const Header = () => {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)


    return (
        <>
            <div className="flex justify-between  place-items-center bg-opacity-70 bg-white m-4  rounded-3xl mb-10">
                <button className="rounded-full">
                    <AdjustmentsHorizontalIcon
                        onClick={() => OpenDrawer(true)}
                        className='h-10 w-10 text-purple-300 m-3' />
                </button>
                <h1 className=" text-3xl p-1 font-bold text-purple-300
            shadow-purple-300/200"
                >To Do List</h1>
                <div className='h-12 w-12  text-white m-2 rounded-full bg-purple-300 p-1 bg-opacity-50 flex justify-center place-items-cente'>
                    <Image src="/unicorn.png" height={40} width={40} alt={""} />
                </div>
            </div>
            <Drawer />
        </>
    )
}