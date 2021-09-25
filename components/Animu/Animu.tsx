import type { NextPage } from "next";
import { Zoom } from "react-awesome-reveal";
import styles from "../../styles/Projects.module.scss";

const Animu: NextPage = () => {

    return (
        <main className={styles.containerAnimu}>
            <Zoom className={styles.slide}>
                <div className={styles.alignButton}>
                    <a
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                        href="https://animuportfolio.netlify.app/Animu"
                        className={styles.buttonLink}>
                        Ir a la página
                    </a>
                </div>
            </Zoom>
        </main>
    )
}

export default Animu;