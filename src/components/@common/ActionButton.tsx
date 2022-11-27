import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ArrowsPointingInIcon, BarsArrowDownIcon, PlusSmallIcon, SquaresPlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { FormDialog } from '../FormDialog';
import { useRecoilState } from 'recoil';
import { inputTextState } from '../../@atoms/inputTextState';
import { todoState } from '../../@atoms/todoState';

export default function ActionButton() {
    let [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useRecoilState(inputTextState)
    const [todos, setTodos] = useRecoilState<Todo[]>(todoState)
    const handleOnSubmit = () => {
        // TODOが未入力なら、TODOを新規作成
        if (!text) return
        const newTodo: Todo = {
            //newTodoの初期設定
            value: text,
            id: new Date().getTime(),
            checked: false,
            removed: false
        }
        setTodos([newTodo, ...todos])
        setText("")
    }


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed bottom-5 right-3 flex items-center justify-center">

                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-white w-auto h-auto p-2 drop-shadow-xl"
                ><PlusSmallIcon
                        className='text-purple-300 h-8 w-8 ' />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-100"
                                enterFrom="opacity-50 scale-0"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden 
                                rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                                    >タスクを入力して下さい
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <FormDialog
                                            text={text}
                                            onChange={handleOnChange}
                                            onSubmit={handleOnSubmit}
                                        />
                                    </div>

                                    <div className="mt-4">

                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                handleOnSubmit();
                                            }}
                                            className="flex justify-between place-items-center">
                                            {/* formで囲まないとonSubmitが起動しない */}
                                            <button onClick={closeModal}
                                            ><ArrowsPointingInIcon className='h-8 w-8  text-purple-300' />
                                            </button>

                                            <button
                                                type='submit'
                                                onSubmit={handleOnSubmit}
                                                onClick={closeModal}
                                                className="rounded-full bg-purple-300 p-2 drop-shadow">
                                                <PlusSmallIcon className='h-8 w-8  text-white' />
                                            </button>

                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
