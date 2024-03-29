import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const ITEMS = [
    {
        href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Docs",
        descpription: "Find in-depth information about Next.js features and&nbsp;API."
    },

    {
        href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Learn",
        descpription: "learn about Next.js in an interactive course with&nbsp;quizzes!"
    },

    {
        href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Templates",
        descpription: "Discover and deploy boilerplate example Next.jsprojects."
    },

    {
        href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Deploy",
        descpription: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
    },
]

export function Links() {
    return (
    <div className={styles.grid}>
        {ITEMS.map(item => {
            return (
                <a
                href={item.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
            <h2>
                {item.title} <span>-&gt;</span>
            </h2>
            <p>
                {item.descpription}
            </p>
            </a>
            )
        })}
    </div>
    );
}