import { FC, useState } from "react"
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { toUnicode } from "punycode"
type Todo = {
    value: string
    readonly id: number
}
//readonly 識別子を一意に保つ
export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])

    const handleOnSubmit = (
        e: React.FormEvent<HTMLFormElement | HTMLInputElement>
    ) => {
        // TODOが未入力なら、TODOを新規作成
        if (!text) return
        const newTodo: Todo = {
            value: text,
            id: new Date().getTime(),
        }
        // 以下のスプレッド構文の詳細
        //  const copyTodos = todos.slice();
        // copyTodos.unshift(newTodo);
        //  setTodos(copyTodos);
        setTodos([newTodo, ...todos])
        //入力をクリア
        setText("")
    }
    const handleOnEdit = (id: number, value: string) => {
        /**
         * 『ディープ・コピー』
         * 以下と同義
         * const deepCopy = todos.map((todo) => ({
         *   value: todo.value,
         *   id: todo.id,
         * }));
         */
        const deepCopy = todos.map((todo) => ({ ...todo }));
        // ディープコピーされた配列に Array.map() を適用
        const newTodos = deepCopy.map((todo) => {
            if (todo.id === id) {
                todo.value = value;
            }
            return todo;
        });
        // todos ステート配列をチェック（あとでコメントアウト）
        console.log('=== Original todos ===');
        todos.map((todo) => console.log(`id: ${todo.id}, value: ${todo.value}`));
        setTodos(newTodos);
    };

    return (
        <div className="">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleOnSubmit(e)
                }}
                className="flex flex-raw bg-white h-10">

                <input
                    type="text"
                    placeholder="NEW TODO ++"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="outline-purple-200 text-center flex-1"
                />
                {/* <PlusCircleIcon className="h-6 w-6 ml-1 text-purple-300" /> */}
                <input
                    type="submit"
                    value="◉"
                    onSubmit={(e) => e.preventDefault()}
                    className="text-purple-300 h-10 w-10" />
            </form>

            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}
                        className="bg-white my-2 h-10 text-center text-slate-600 flex place-items-center"
                    ><input
                            type="text"
                            value={todo.value}
                            onChange={(e) => handleOnEdit(todo.id, e.target.value)}
                            className="h-10 w-full pl-3 outline-purple-200"
                        />
                    </li>
                })}
            </ul>
        </div >
    )
}