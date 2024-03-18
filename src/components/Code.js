import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Code(props){
    return (
    <>
        <div className={styles.description}>
        <p>
            Get started by editing&nbsp;
            {props.children}
        </p>
        </div>
    </>
    )
}
