import { FC } from 'react';
import { Todo } from '../../recoil/states';
import { TodoItem } from './Item';

type Props = {
    todos: Todo[];
};

export const TodoList: FC<Props> = ({ todos }) => {
    return (
        <div>
            <ul className='divide-y divide-gray-300'>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};