import { FC, useState } from "react"
import { TodoItem } from "./TodoItem"
import { useRecoilState } from 'recoil';
import { todoState } from '../@atoms/todoState';
import { filterState } from '../@atoms/filterState';



export const TodoApp: FC = () => {
    const [todos, setTodos] = useRecoilState<Todo[]>(todoState)
    const [filter, setFilter] = useRecoilState<Filter>(filterState);


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

            <TodoItem todos={todos} filter={filter} onTodo={handleOnTodo} />

        </div >
    )
}