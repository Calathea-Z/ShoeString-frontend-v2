import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { app, auth } from "../firebase/config"
import { sendPasswordResetEmail } from "firebase/auth"

const passwordReset = () => {
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState(null)
    const [email, setEmail] = useState("")

    const resetPassword = async (email) => {
        try {
            console.log(email)
            await sendPasswordResetEmail(auth, email)
            console.log("Password reset email sent")
            setErrorMsg("Password reset email sent. Please check your email.")
        } catch (err) {
            console.error(err)
            setErrorMsg(err.message)
            console.error(err.message)
        }
    }
    return (
        <div>
            <div>
                <h2>Reset Password</h2>
                <div className="flex flex-col w-72 items-center gap-4">
                    {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        type="email"
                    />
                    <button onClick={resetPassword} type="button" className=" text-white bg-sky-500 hover:bg-sky-500/80 font-medium rounded-lg text-sm px-5 py-3 mb-2">
                        Send Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default passwordReset
