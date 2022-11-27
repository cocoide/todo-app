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
            <div className="flex justify-between  place-items-center bg-white m-4  rounded-3xl mb-10">
                <button className="rounded-full">
                    <Bars4Icon
                        className='10 w-10 text-purple-300 m-3'
                        onClick={() => OpenDrawer(true)}
                    />
                </button>
                <h1 className=" text-3xl p-1 font-bold text-purple-300
            shadow-purple-300/200"
                >To Do List</h1>
                <div className='h-12 w-12  text-white m-2 rounded-full bg-purple-300 p-1 bg-opacity-50 flex justify-center place-items-cente'>
                    <Image src="/unicorn.png" height={30} width={40} alt={""} />
                </div>
            </div>
            <Drawer />
        </>
    )
}