import { FC, useState } from "react"
import { PlusCircleIcon } from '@heroicons/react/24/outline'

type Todo = {
    value: string
}
export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])
    const handleOnSubmit = () => {
        // TODOが未入力なら、TODOを新規作成
        if (!text) return
        const newTodo: Todo = {
            value: text
        }
        // 以下のスプレッド構文の詳細
        //  const copyTodos = todos.slice();
        // copyTodos.unshift(newTodo);
        //  setTodos(copyTodos);
        setTodos([newTodo, ...todos])
        //入力をクリア
        setText("")
    }

    return (
        <div className="rounded shadow-inner">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleOnSubmit()
                }}
                className="flex flex-raw bg-white h-10">

                <input
                    type="text"
                    placeholder="NEW TODO ++ "
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="outline-purple-200 text-center"
                />
                {/* <PlusCircleIcon className="h-6 w-6 ml-1 text-purple-300" /> */}
                <input
                    type="submit"
                    value="◉"
                    onSubmit={(e) => e.preventDefault()}
                    className="text-purple-300 h-10 w-10" />
            </form>
        </div >
    )
}