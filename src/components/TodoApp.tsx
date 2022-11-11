import { FC, useState } from "react"
import { ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxXMarkIcon, SwatchIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { FormDialog } from "./FormDialog"
import { TodoItem } from "./TodoItem"


export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [filter, setFilter] = useState<Filter>("all");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

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


    // 追加したTodoのプロパティを変化させる関数を
    // 『ジェネリティクス』を利用して共通なものへ
    const handleOnTodo = <T extends Todo, U extends keyof Todo, V extends T[U]>(
        obj: T,
        key: U,
        value: V
    ) => {
        /**
         * 『ディープ・コピー』以下と同義
         * const deepCopy = todos.map((todo) => ({
         *   value: todo.value,
         *   id: todo.id,
         * }));
         */
        const deepCopy = todos.map((todo) => ({ ...todo }));
        // ディープコピーされた配列に Array.map() を適用
        const newTodos = deepCopy.map((todo) => {
            if (todo.id === obj.id) {
                todo[key] = value;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    const handleOnEmpty = () => {
        const newTodos = todos.filter((todo) => !todo.removed);
        setTodos(newTodos);
    };

    return (
        <div>
            <FormDialog
                text={text}
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
            />

            <TodoItem todos={todos} filter={filter} onTodo={handleOnTodo} />

        </div >
    )
}