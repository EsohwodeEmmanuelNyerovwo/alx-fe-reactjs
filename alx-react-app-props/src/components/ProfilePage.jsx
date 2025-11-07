import { useContext } from "react"
import UserContext from "./UserContext"

function ProfilePage() {
    const userData = useContext(UserContext);
    return (
        <>
            <p>Name:{userData.name}</p>
            <p>Email:{userData.email}</p>
        </>
    )

}
export default ProfilePage