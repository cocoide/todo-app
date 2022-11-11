type Todo = {
    value: string
    readonly id: number // readonly 識別子を一意に保つ
    checked: boolean
    removed: boolean
}
type Filter = "all" | "checked" | "unchecked" | "removed";