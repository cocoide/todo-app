import { Dialog } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useRecoilState, useSetRecoilState } from "recoil"
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
                            <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                        </div>
                        {/* /End replace */}
                    </div>
                </div>

            </DrawerMotion>
        </>
    )
}