import React from "react"
import Header from "../components/Header"
import Image from "next/image"
import FullLogo from "../assets/full_logo.png"
import { app } from "../firebase/config"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"

const Register = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        console.log(res.user)
        sessionStorage.setItem("token", res.user.accessToken)
    }

    const googleSignUp = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            console.log(res.user)
            sessionStorage.setItem("token", res.user.accessToken)
            router.push("/")
        })
    }
    return (
        <>
            
            <div className="min-h-screen w-screen">
                <div className="flex flex-col items-center justify-center p-4 mb-10 text-center">
                    <Image src={FullLogo} alt="" className="w-200" />
                    <h6 className="font-semibold, text-gray-500">A Guest Book For Planet Earth</h6>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex flex-col w-72 items-center gap-4">
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                        />
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                        />
                        <button onClick={signUp} type="button" className=" text-white bg-sky-500 hover:bg-sky-500/80 font-medium rounded-lg text-sm px-5 py-3 mb-2">
                            Register
                        </button>
                        <button onClick={googleSignUp} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                            </svg>
                            Sign in with Google
                        </button>
                        <div className="text-center">
                            <Link href="/signin">
                                <p>Not your first time here?</p>
                                <p className=" text-sky-600 hover:text-sky-500/80">Please sign in.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
