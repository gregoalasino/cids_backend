import {initializeApp} from "./app";
import {connectDatabase} from "./db";

async function main() {
    try {
        await connectDatabase()
        initializeApp()
    } catch (e) {
        console.log(e)
    }
}

main()