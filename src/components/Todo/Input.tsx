import { FC } from 'react';

export const TodoInput: FC = () => {
    return (
        <div className='m-4 flex items-center'>
            <input
                placeholder='Add new Task'
                type='text'
                className='mr-4 w-full appearance-none rounded border py-2 px-3 shadow'
            />
            <button className='rounded border-2 p-2 text-gray-500'>Add</button>
        </div>
    );
};