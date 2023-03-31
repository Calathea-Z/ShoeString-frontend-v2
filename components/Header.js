import Image from "next/image"
import { BsSearch } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import FullLogo from "../assets/full_logo.png"
import BootsLogo from "../assets/boots_logo.png"
import ProfilePic from "../assets/profile2.png"
import { SlMenu } from "react-icons/sl"
import { MdOutlineEmail } from "react-icons/md"
import { SlPeople } from "react-icons/sl"
import { BsPlusCircle } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/router"

function Header({ children }) {
    const auth = getAuth()
    const router = useRouter()
    const [open, setOpen] = useRecoilState(modalState)
    const [userEmail, setUserEmail] = useState("")
    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("Logged in as:", user.email)
                setUserEmail(user.email)
            } else {
                setUserEmail(null)
                console.log("Not logged in")
            }
        })
        return unsubscribe
    }, [])

    const logout = async () => {
        try {
            await auth.signOut()
            setUserEmail(null)
            console.log("Logged out")
            sessionStorage.removeItem("token")
            router.push("/signin")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            {/* -----------Header Left */}
            {/* Logo for Small Screens */}
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Link href="/">
                        <Image src={FullLogo} alt="Shoestring full logo" className="cursor-pointer" fill style={{ objectFit: "contain", width: "100%" }} />
                    </Link>
                </div>
                {/* Logo for Larger Screens */}
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Link href="/">
                        <Image src={BootsLogo} alt="Shoestring icon logo" fill style={{ objectFit: "contain", width: "100%" }} />
                    </Link>
                </div>

                {/* -----------HeaderMiddle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <BsSearch className="h-5 w-5 text-gray-500" />
                        </div>

                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* -----------HeaderRight*/}
                <div className="flex items-center justify-end space-x-4">
                    {userEmail ? (
                        <div className="flex">
                            <button onClick={logout} className=" text-white bg-purple-500 hover:bg-purple-500/80 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2">
                                Log Out
                            </button>

                            <p className="text-gray-500 text-sm font-medium">{userEmail}</p>
                        </div>
                    ) : (
                        <Link href="/signin">
                            <button className=" text-white bg-purple-500 hover:bg-purple-500/80 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2">Sign In</button>{" "}
                        </Link>
                    )}
                    <AiFillHome className="navBtn" />
                    <SlMenu className="h-6 md:hidden" />
                    <BsPlusCircle className="navBtn" onClick={() => setOpen(true)} />
                    <MdOutlineEmail className="navBtn" />
                    <SlPeople className="navBtn" />
                    <Image src={ProfilePic} alt="profile" className="h-10 w-10 rounded-full cursor-pointer" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Header
