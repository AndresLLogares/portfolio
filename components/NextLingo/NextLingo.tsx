import type { NextPage } from "next";
import { Zoom } from "react-awesome-reveal";
import styles from "../../styles/Projects.module.scss";

const NextLingo: NextPage = () => {

    return (
        <main className={styles.containerNextLingo}>
            <Zoom className={styles.slide}>
                <div className={styles.alignButton}>
                    <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                        href="https://nextlingo.vercel.app/"
                        className={styles.buttonLink}>
                        Ir a la página
                    </a>
                </div>
            </Zoom>
        </main>
    )
}

export default NextLingo;