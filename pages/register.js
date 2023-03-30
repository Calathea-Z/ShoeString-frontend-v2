import React from "react"
import Header from "../components/Header"
import Image from "next/image"
import FullLogo from "../assets/full_logo.png"
import { app } from "../firebase/config"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"

const Register = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log(res.user)
                sessionStorage.setItem("token", res.user.accessToken)
                router.push("/")
            })
            .catch((err) => {
                console.error(err)
            })
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
            <Header />
            <div className="min-h-screen w-screen">
                <div className="flex flex-col items-center justify-center p-4 mb-10 text-center">
                    <Image src={FullLogo} alt="" className="w-200" />
                    <h6 className="font-semibold, text-gray-500">A Guest Book For Planet Earth</h6>
                    <div className="mt-36 flex gap-5 ">
                        <button className="p-3 bg-sky-500 rounded-lg text-white">Log in</button>
                        <button className="p-3 bg-sky-500 rounded-lg text-white">Register</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Register
