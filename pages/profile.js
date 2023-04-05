import React, { useState } from "react"
import { updateEmail, updatePassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase/config"

const Profile = () => {
    const [userName, setUserName] = useState(null)
    const [photoURL, setPhotoURL] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [formData, setFormData] = useState("")
    const [systemMsg, setSystemMsg] = useState(null)

    const user = auth.currentUser
    if (user !== null) {
        setUserName(user.username)
        setPhotoURL(user.photoURL)
        setUserEmail(user.email)
    }

    updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: photoURL,
    })
        .then(() => {
            setSystemMsg("Profile updated.")
        })
        .catch((error) => {
            // An error occurred
            console.error(error)
            setSystemMsg(error.message)
        })

    updateEmail(auth.currentUser, "user@example.com")
        .then(() => {
            // Email updated!
            // ...
        })
        .catch((error) => {
            // An error occurred
            // ...
        })

    // form submit handler
    const handleClick = () => {
        res = formData
        console.log()
    }
    return (
        <div className="h-full w-auto">
            <div className="shadow-xl drop-shadow-xl rounded-lg m-auto py-4">
                <div className="p-4"></div>
            </div>
        </div>
    )
}

export default Profile
