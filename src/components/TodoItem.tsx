import { ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline"

type Props = {
    todos: Todo[]
    filter: Filter

    onTodo: <T extends Todo, K extends keyof Todo, U extends T[K]>(
        obj: T,
        key: K,
        value: U
    ) => void
}

export const TodoItem = (props: Props) => {
    const filteredTodos = props.todos.filter((todo) => {
        // filter ステートの値に応じて異なる内容の配列を返す
        switch (props.filter) {
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

        <ul>
            {filteredTodos.map((todo) => {
                return <li key={todo.id}

                    className="my-3 text-center text-slate-600 flex place-items-center
                    "
                ><input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => props.onTodo(todo, "checked", !todo.checked)}
                        className="m-3 accent-purple-300 h-7"
                    /><input
                        type="text"
                        disabled={todo.checked || todo.removed}
                        value={todo.value}
                        onChange={(e) => props.onTodo(todo, "value", e.target.value)}
                        className="h-10 w-full pl-3 outline-purple-200 drop-shadow rounded-md"
                    /><button onClick={() => props.onTodo(todo, "removed", !todo.removed)}
                        className="p-2">{todo.removed ? <ArchiveBoxXMarkIcon className="h-6 w-6 text-purple-300" />
                            : <ArchiveBoxIcon className="h-6 w-6 text-purple-300" />}</button>
                </li>
            })}
        </ul>
    )

}