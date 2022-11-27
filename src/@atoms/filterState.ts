import { atom } from 'recoil'

export const filterState = atom<Filter>({
  key: "filterState",
  default: "all"
})