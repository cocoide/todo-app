import { atom } from 'recoil';


const initialTodo: Todo[]=[];

export const todoState=atom({
    key: "todoState",
    default: initialTodo,
})