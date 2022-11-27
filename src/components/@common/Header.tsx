import { Bars4Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useSetRecoilState } from "recoil"
import { Drawer } from "../Drawer"
import { isDrawerOpen } from "../../@atoms/isDrawerOpen"
import { } from "@heroicons/react/24/solid"

export const Header = () => {
    const OpenDrawer = useSetRecoilState(isDrawerOpen)


    return (
        <>
            <div className="flex justify-between  place-items-center 
            bg-purple-200 m-4  rounded-3xl mb-10">
                <button className="rounded-full">
                    <Bars4Icon
                        className='10 w-10 text-white m-3'
                        onClick={() => OpenDrawer(true)}
                    />
                </button>
                <h1 className=" text-3xl p-1 font-bold text-white drop-shadow"
                >To Do List</h1>
                <div className='h-12 w-12 m-2 rounded-full  p-1 bg-white flex justify-center place-items-cente'>
                    <Image src="/unicorn.png" height={30} width={40} alt={""} />
                </div>
            </div>
            <Drawer />
        </>
    )
}