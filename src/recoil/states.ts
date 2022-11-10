import { atom } from "recoil";

export type Todo= {
  id: string
  title: string
  text: string
  isDone: boolean
}
  
  /**
   * @description
   * ToDo項目をRecoilで保持
   **/
const todoListState = atom<Todo[]>({
    key: 'todoListState',
    default: [],
});

export { todoListState }