import { Dialog } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useRecoilState } from "recoil"
import DrawerMotion from "./DrawerMotion"
import { isDrawerOpen } from "./isDrawerOpen"



export const Drawer = () => {
    const [open, setOpen] = useRecoilState(isDrawerOpen)
    return (
        <>
            <DrawerMotion open={open} setOpen={setOpen}>

                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="h-10 w-10 text-purple-300"
                            ><XCircleIcon />
                            </button>
                        </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">

                            <div className=' text-white m-2 rounded-full bg-purple-300 p-1 bg-opacity-50 flex justify-center place-items-cente'>
                                <Image src="/unicorn.png" height={130} width={130} alt={""}
                                    className="" />
                            </div>
                            <div className="h-full bg-slate-50" />

                        </div>
                        {/* /End replace */}
                    </div>
                </div>

            </DrawerMotion>
        </>
    )
}