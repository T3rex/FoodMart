import { createContext } from "react"

const UserContext = createContext({
    username: "random",
    pass: "pass"
})

export default UserContext;