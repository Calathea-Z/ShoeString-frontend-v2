import { initializeApp, getApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

const app = !getApps().length ? initializeApp(config) : getApp()
const auth = getAuth(app)
export { auth, app }
