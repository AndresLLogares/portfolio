import type { NextPage } from "next";
import { Zoom } from "react-awesome-reveal";
import styles from "../../styles/footer.module.scss";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { TextDocument } from "@styled-icons/entypo/TextDocument";
const Footer: NextPage = () => {

    return (
        <main className={styles.containerFooter}>
            <Zoom className={styles.slide}>
                <div className={styles.main}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Contáctame</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.firstColumn}>
                            <a
                                style={{ textDecoration: "none" }}
                                className={styles.Links}
                                target="_blank"
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/14j_L3Ucm5B86edNt1bCtXBLjizdObNdH/view?usp=sharing"
                            >
                                <TextDocument className={styles.icons} />
                                CV en Ingles
                            </a>
                            <a
                                style={{ textDecoration: "none" }}
                                className={styles.Links}
                                target="_blank"
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/1KEnZ29HX2MwP-7MF9SJ6D_xuEHxiXrKt/view?usp=sharing"
                            >
                                <TextDocument className={styles.icons} />
                                CV en Español
                            </a>
                            <a
                                className={styles.Links}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                                href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
                            >
                                <Linkedin className={styles.icons} /> Linkedin
                            </a>
                        </div>
                        <div className={styles.secondColumn}>
                            <p className={styles.Links}>
                                <Email className={styles.icons} />
                                Andresl940@hotmail.com
                            </p>
                            <a
                                className={styles.Links}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                                href="https://github.com/AndresLLogares"
                            >
                                <Github className={styles.icons} /> Github
                            </a>
                            <a
                                className={styles.Links}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                                href="https://wa.me/5491136005563"
                            >
                                <Phone className={styles.icons} /> +54 9 1136005563
                            </a>
                        </div>
                    </div>
                </div>
            </Zoom>
        </main>
    )
}

export default Footer;