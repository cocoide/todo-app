import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import useAutoFocus from '../utils/useAutoFocus';


type Props = {
    text: string
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormDialog = (props: Props) => {

    const inputRef = useAutoFocus<HTMLInputElement>();

    return (


        <form
            onSubmit={(e) => {
                e.preventDefault()
                props.onSubmit()
            }}
            className="flex flex-raw bg-white h-10 rounded-md">


            {/* <div>
                <select
                    defaultValue="all"
                    // onChange={(e) => props.setFilter(e.target.value as Filter)}
                    className="text-center h-8 w-8 m-1 p-1 appearance-none bg-slate-100
                ring-1 ring-purple-300 rounded-full"
                >
                    <option value="all">◎</option>
                    <option value="checked">☑</option>
                    <option value="unchecked">↺</option>
                    <option value="removed">🗑</option>
                </select>
            </div> */}

            <input
                type="text"
                value={props.text}
                placeholder="INPUT NEW TASK"
                onChange={props.onChange}
                ref={inputRef}
                className="outline-purple-200 text-center flex-1"
            />
        </form>
    )
};