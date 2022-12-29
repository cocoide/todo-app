import { Dialog } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useRecoilState } from "recoil"
import DrawerMotion from "./DrawerMotion"
import { isDrawerOpen } from "../../@atoms/isDrawerOpen"
import { filterState } from '../../@atoms/filterState'



export const Drawer = () => {
    const [open, setOpen] = useRecoilState(isDrawerOpen)
    const [filter, setFilter] = useRecoilState(filterState)
    const handleOnSort = (filter: Filter) => {
        setFilter(filter);
    };

    return (
        <>
            <DrawerMotion open={open} setOpen={setOpen}>

                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium text-gray-900">

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="h-12 w-12 text-purple-300"
                            ><XCircleIcon />
                            </button>

                        </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">


                        <div className="absolute inset-0 px-4 sm:px-6">

                            <div className=' text-white m-2 p-1 bg-opacity-50 flex justify-center place-items-cente'>
                                <Image src="/unicorn.png" height={130} width={130} alt={""}
                                    className="" />
                            </div>

                            <div className="" />
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }} >

                                <button onClick={() => {
                                    handleOnSort("all");
                                    setOpen(false);
                                }}
                                    className="bg-purple-300 h-10 w-full rounded-md text-white">
                                    全て
                                </button>

                                <button onClick={() => {
                                    handleOnSort("checked");
                                    setOpen(false);
                                }}
                                    className="bg-purple-200 h-10 w-full rounded-md text-white mt-3">
                                    完了した
                                </button>

                                <button onClick={() => {
                                    handleOnSort("unchecked");
                                    setOpen(false);
                                }}
                                    className="bg-slate-300 h-10 w-full rounded-md text-white mt-3">
                                    未完了
                                </button>

                                <button onClick={() => {
                                    handleOnSort("removed");
                                    setOpen(false);
                                }}
                                    className="bg-slate-300 h-10 w-full rounded-md text-white mt-3">
                                    ゴミ箱
                                </button>

                            </form>

                        </div>


                    </div>
                </div>

            </DrawerMotion>
        </>
    )
}