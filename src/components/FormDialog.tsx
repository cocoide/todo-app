import { PlusCircleIcon } from "@heroicons/react/24/outline";

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
            className="flex flex-raw bg-white h-10">
            <input
                type="text"
                value={props.text}
                placeholder="+ NEW TODO"
                onChange={props.onChange}
                className="outline-purple-200 text-center flex-1"
            />
            <button
                type="submit"
                onSubmit={props.onSubmit}
                className="text-purple-300">
                <PlusCircleIcon className="w-6 h-6 text-purple-300 m-2" />
            </button>
        </form>
    )
};