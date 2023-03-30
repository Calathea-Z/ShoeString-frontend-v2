import Head from "next/head"
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"
import { app } from "../firebase/config"
import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>ShoeString</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Feed />
            <Modal />
        </div>
    )
}
