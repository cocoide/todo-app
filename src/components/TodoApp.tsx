import { FC, useState } from "react"
import { PlusCircleIcon } from '@heroicons/react/24/outline'

type Todo = {
    value: string
}
export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}
                className="flex flex-raw">

                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="outline-purple-200"
                />
                <PlusCircleIcon className="h-6 w-6 ml-1 text-purple-300">
                    <input
                        type="submit"
                        value=""
                        onSubmit={(e) => e.preventDefault()}
                    />
                </PlusCircleIcon>
            </form>
        </div>
    )
}