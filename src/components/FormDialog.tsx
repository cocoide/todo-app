import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';


type Props = {
    text: string
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormDialog = (props: Props) => {


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                props.onSubmit()
            }}
            className="flex flex-raw bg-white h-10 rounded-md">




            <input
                type="text"
                value={props.text}
                placeholder="INPUT NEW TASK"
                onChange={props.onChange}
                className="outline-purple-200 text-center flex-1"
            />
        </form>
    )
};