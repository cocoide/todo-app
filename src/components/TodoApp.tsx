import { FC, useState } from "react"

export const TodoApp: FC = () => {
    const [text, setText] = useState("")
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>

                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input
                    type="submit"
                    value="ADD"
                    onSubmit={(e) => e.preventDefault()}
                />
            </form>
        </div>
    )
}