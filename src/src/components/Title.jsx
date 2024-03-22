import styles from "@/src/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Title(props) {
    console.log(props.title);

    return (
        <div className={styles.center}>
            <h1>{props.title} Page</h1>
        </div>
    )
}