import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Zoom } from "react-awesome-reveal";
import styles from "../styles/HomePage.module.scss";
import Me from "../images/CV2.webp";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact"
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Express } from "@styled-icons/simple-icons/Express";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Apollographql } from "@styled-icons/simple-icons/Apollographql";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Scrumalliance } from "@styled-icons/simple-icons/Scrumalliance";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import Animu from "../components/Animu/AnimuEnglish";
import Clothbea from "../components/Clothbea/ClothbeaEnglish";
import PinkBio from "../components/PinkBio/PinkBioEnglish";
import NextLingo from "../components/NextLingo/NextLingoEnglish";
import Footer from "../components/Footer/FooterEnglish";
const HomeEnglish: NextPage = () => {

    return (
        <main className={styles.container}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Created by Andres Logares" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <Zoom className={styles.slide}>
                    <div className={styles.divTitle}>
                        <h4 className={styles.h4Title}>Welcome to my portfolio</h4>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Bio</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.upSeparete}>
                        <div className={styles.divImage}>
                            <Image className="Me" src={Me} alt="" width={500} height={470} />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.textBox}>
                                Andres Logares was born in Buenos Aires, Argentina and at 17 he decided to study gastronomy and that is how he
                                began to study at the I.A.G. (Argentine Institute of Gastronomy), for 2 years while working in DISCO supermarkets.
                                Before finishing his degree he had done some internships in restaurants but his great opportunity was to personally
                                give his CV to the different hotels in Buenos Aires, that is how the Hotel Continental gave him
                                the opportunity to start as an intern and where he would be for 10 years becoming the hotel´s Pastry Chef and which
                                gave him the opportunity to know several Latin American countries such as Mexico or Chile.
                            </p>
                            <p className={styles.textBox}>
                                After that time in the hotel, he decided that he had already finished his cycle there and spent some time traveling and
                                with small personal projects until finally he decided by reference of a friend to introduce himself to the world of
                                programming through the Bootcamp of ¨SoyHenry¨, there he discovered a fascinating world in which he could create
                                fascinating things from nothing and be able to apply all his creativity that he had had in gastronomy. From that
                                time he has not stopped researching and carrying out projects with different technologies in order to improve himself
                                and be able to contribute what he can to others.
                            </p>
                        </div>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Technologies</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.buttonsBox}>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <LogoReact className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                React
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Javascript className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Javascript
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Express className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Express
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Postgresql className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Sequelize
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Redux className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Redux
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Html5 className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                HTML
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Css3 className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                CSS
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Graphql className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                GraphQl
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Apollographql className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Apollo
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Mongodb className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                MongoDB
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Nodejs className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Node
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Scrumalliance className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Scrum
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Nextdotjs className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Next.js
                            </button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <span className={styles.mas}>
                                <Typescript className={styles.logosHome} />
                            </span>
                            <button type="button" name="Hover">
                                Typescript
                            </button>
                        </div>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Projects</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Animú</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.textBox}>
                            This page was created using React and Redux on the front end,
                            while Express and MongoDB were used on the back end. It was made
                            using the Jikan API. I made it mostly to practice the use of
                            external Api and the creation of users, also the use of mongoDB as
                            a database. .In this page you can see the anime of the current
                            season, as well as search from several years ago, exactly until
                            1975. Search by categories, create users, add favorites, etc.
                        </p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <Animu />
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Clothbea</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.textBox}>
                            This website is an E-Commerce which I made alone using React and
                            Redux to develop the Front End and in the Back End Express, Node
                            and MongoDB were used, although it is not a very big site it has
                            various functionalities, you can make purchases of products
                            through Stripe payment method, add products to a wishlist, in the
                            administrator section you can create products, edit them, create
                            categories, and many other functions, I hope you visit it.
                        </p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <Clothbea />
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>PinkBio</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.textBox}>
                            This time I made a social network by recommendation of some
                            contacts in discord, in it I applied all the knowledge acquired
                            during the projects I was doing this time, in it you can do
                            several things like create a profile, add friends, send messages,
                            upload images, create posts, etc, several things that can be done
                            in any social network, also use some external APIs to put a little
                            more content. I hope you enjoy it.
                        </p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <PinkBio />
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>NextLingo</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.textBox}>
                            This project is a small translation app using some basic exercises
                            from Duolingo to practice Next.js. I hope you enjoy it.
                        </p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <NextLingo />
                </Zoom>
                <Zoom className={styles.slide} data-parallax="0">
                    <Footer />
                </Zoom>
            </div >
        </main >
    )
}

export default HomeEnglish;