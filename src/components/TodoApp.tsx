import { FC, useState } from "react"
import { PlusCircleIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxXMarkIcon, SwatchIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'

type Todo = {
    value: string
    readonly id: number // readonly 識別子を一意に保つ
    checked: boolean
    removed: boolean
}
type Filter = "all" | "checked" | "unchecked" | "removed";

export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [filter, setFilter] = useState<Filter>("all");

    const handleOnSubmit = (
        e: React.FormEvent<HTMLFormElement | HTMLInputElement>
    ) => {
        // TODOが未入力なら、TODOを新規作成
        if (!text) return
        const newTodo: Todo = {
            //newTodoの初期設定
            value: text,
            id: new Date().getTime(),
            checked: false,
            removed: false
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
        todos.map((todo) => console.log(`id: ${todo.id}, value: ${todo.value}`));
        setTodos(newTodos);
    };

    const handleOnCheck = (id: number, checked: boolean) => {
        const deepCopy = todos.map((todo) => ({ ...todo }));

        const newTodos = deepCopy.map((todo) => {
            if (todo.id === id) { todo.checked = !checked }
            return todo;
        });

        setTodos(newTodos);
    };

    const handleOnRemove = (id: number, removed: boolean) => {
        const deepCopy = todos.map((todo) => ({ ...todo }));

        const newTodos = deepCopy.map((todo) => {
            if (todo.id === id) { todo.removed = !removed }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleOnEmpty = () => {
        // シャローコピー
        const newTodos = todos.filter((todo) => !todo.removed);
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
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleOnSubmit(e)
                }}
                className="flex flex-raw bg-white h-10">
                <input
                    type="text"
                    placeholder="+ NEW TODO"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="outline-purple-200 text-center flex-1"
                />

                {filter === 'removed' ? (
                    <button
                        onClick={handleOnEmpty}
                        disabled={todos.filter((todo) => todo.removed).length === 0}>
                        <XCircleIcon className="w-6 h-6 text-purple-300 m-2" />
                    </button>
                ) : (
                    // フィルターが `checked` でなければ入力フォームを表示
                    filter !== 'checked' && (
                        <button
                            type="submit"
                            onSubmit={(e) => e.preventDefault()}
                            className="text-purple-300"><PlusCircleIcon className="h-6 w-6 m-2 text-purple-300" />
                        </button>
                    ))}

            </form>
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
                            onChange={() => handleOnCheck(todo.id, todo.checked)}
                            className="m-3"
                        /><input
                            type="text"
                            disabled={todo.checked || todo.removed}
                            value={todo.value}
                            onChange={(e) => handleOnEdit(todo.id, e.target.value)}
                            className="h-10 w-full pl-3 outline-purple-200"
                        /><button onClick={() => handleOnRemove(todo.id, todo.removed)}
                            className="p-2">{todo.removed ? <ArchiveBoxXMarkIcon className="h-6 w-6 text-purple-300" />
                                : <ArchiveBoxIcon className="h-6 w-6 text-purple-300" />}</button>
                    </li>
                })}
            </ul>
        </div >
    )
}