import Head from "next/head"
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        let token = sessionStorage.getItem("token")
        if (!token) {
            router.push("/signin")
        }
    }, [])
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>ShoeString</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Feed />
            <Modal />
        </div>
    )
}
