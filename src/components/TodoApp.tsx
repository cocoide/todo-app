import { FC, useState } from "react"
import { ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxXMarkIcon, SwatchIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { FormDialog } from "./FormDialog"


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

    const filteredTodos = todos.filter((todo) => {
        // filter ステートの値に応じて異なる内容の配列を返す
        switch (filter) {
            case 'all':
                // 削除されていないもの全て
                return !todo.removed;
            case 'checked':
                // 完了済 **かつ** 削除されていないもの
                return todo.checked && !todo.removed;
            case 'unchecked':
                // 未完了 **かつ** 削除されていないもの
                return !todo.checked && !todo.removed;
            case 'removed':
                // 削除済みのもの
                return todo.removed;
            default:
                return todo;
        }
    });


    return (
        <div>
            <FormDialog
                text={text}
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
            />
            <select defaultValue="all"
                onChange={(e) => setFilter(e.target.value as Filter)}
                className="w-20 mt-3 h-7">
                <option value="all">全て</option>
                <option value="unchecked">未完了</option>
                <option value="checked">完了済</option>
                <option value="removed">削除済</option>
            </select>

            <ul>
                {filteredTodos.map((todo) => {
                    return <li key={todo.id}

                        className="bg-white my-3 h-10 text-center text-slate-600 flex place-items-center"
                    ><input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => handleOnTodo(todo, "checked", !todo.checked)}
                            className="m-3"
                        /><input
                            type="text"
                            disabled={todo.checked || todo.removed}
                            value={todo.value}
                            onChange={(e) => handleOnTodo(todo, "value", e.target.value)}
                            className="h-10 w-full pl-3 outline-purple-200"
                        /><button onClick={() => handleOnTodo(todo, "removed", !todo.removed)}
                            className="p-2">{todo.removed ? <ArchiveBoxXMarkIcon className="h-6 w-6 text-purple-300" />
                                : <ArchiveBoxIcon className="h-6 w-6 text-purple-300" />}</button>
                    </li>
                })}
            </ul>
        </div >
    )
}