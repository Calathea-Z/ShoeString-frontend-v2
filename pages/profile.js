import React, { useState } from "react"
import { updateEmail, updatePassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase/config"

const Profile = () => {
    const [username, setUserName] = useState(null)
    const [photoURL, setPhotoURL] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [newUserPassword, setNewUserPassword] = useState(null)
    const [formData, setFormData] = useState("")
    const [systemMsg, setSystemMsg] = useState(null)

    const user = auth.currentUser
    if (user !== null) {
        setUserName(user.uid)
        setPhotoURL(user.photoURL)
        setUserEmail(user.email)
    }

    const updateUserProfile = async () => {
        await updateProfile(auth.currentUser, {
            displayName: username,
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
    }
    const updateUserPassword = async () => {
        try {
            await updatePassword(auth.currentUser, newUserPassword)
            console.log(`password updated for ${currentUser}`)
        } catch (err) {
            console.error(err)
            setSystemMsg(err)
        }
    }

    const updateUserEmail = async () => {
        await updateEmail(auth.currentUser, "user@example.com")
            .then(() => {
                setSystemMsg("Profile updated.")
            })
            .catch((error) => {
                // An error occurred
                console.error(error)
                setSystemMsg(error.message)
                // ...
            })
    }

    // form submit handler
    const handleClick = () => {
        res = formData
        console.log()
    }
    return (
        <div className="h-full w-auto">
            <div className="flex flex-cols p-6">
                {/* current profile */}
                <div className="shadow-xl drop-shadow-xl rounded-lg m-auto py-4">
                    <p>{username}</p>
                    <p>{userEmail}</p>
                </div>
                {/* new profile */}
                <div className="shadow-xl drop-shadow-xl rounded-lg m-auto py-4">
                    <h2>Update Profile</h2>
                    <div className="flex flex-col w-72 items-center gap-4">
                        {systemMsg && <p className="text-red-500">{systemMsg}</p>}
                        {/* update user email */}
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="update email address"
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                            value={userEmail}
                            type="email"
                        />
                        <button onClick={updateUserEmail} type="button" className=" text-white bg-sky-500 hover:bg-sky-500/80 font-medium rounded-lg text-sm px-5 py-3 mb-2">
                            Update Email
                        </button>
                        {/* update user password */}
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="new password"
                            onChange={(e) => {
                                setNewUserPassword(e.target.value)
                            }}
                            value={newUserPassword}
                            type="email"
                        />
                        <button onClick={updateUserPassword} type="button" className=" text-white bg-sky-500 hover:bg-sky-500/80 font-medium rounded-lg text-sm px-5 py-3 mb-2">
                            Update Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
