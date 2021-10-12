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
import Animu from "../components/Animu/Animu";
import Clothbea from "../components/Clothbea/Clothbea";
import PinkBio from "../components/PinkBio/PinkBio";
import NextLingo from "../components/NextLingo/NextLingo";
import Footer from "../components/Footer/Footer";
const HomeSpanish: NextPage = () => {

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
                        <h4 className={styles.h4Title}>Bienvenido a mi portfolio</h4>
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
                            <Image className="Me" src={Me} alt="" width={500} height={500} />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.textBox}>
                                Andres Logares nació en Buenos Aires, Argentina y a los 17 años se decidió a estudiar gastronomía y así lo hizo
                                en el I.A.G.(Instituto Argentino de Gastronomía), durante 2 años mientras trabajaba en la cadena de supermercados
                                DISCO. Antes de terminar la carrera había realizado algunas pasantías en restaurantes pero su salto lo dio llevando
                                personalmente su CV a los distintos hoteles de Buenos Aires, así fue como el Hotel Continental le dio
                                la oportunidad de empezar como pasante y estaría durante 10 años llegando a ser el Chef Pastelero del mismo y el cual le
                                dio la oportunidad de conocer varios paises de Latinoamérica como México o Chile.
                            </p>
                            <p className={styles.textBox}>
                                Luego de ese tiempo en el hotel decidió que ya había terminado su ciclo en el mismo y estuvo un tiempo
                                viajando y con pequeños proyectos personales hasta que finalmente se decidió por referencia de un amigo el introducirse
                                al mundo de la programación a través del Bootcamp de ¨SoyHenry¨, hay descubrió un mundo fascinante en el cual podía
                                crear cosas fascinantes de la nada y poder aplicar toda su creatividad que había tenido en la gastronomía. Desde ese
                                momento no ha parado de investigar y realizar proyectos con distintas tecnologías para poder superarse así mismo y poder
                                aportar con lo que pueda a los demás.
                            </p>
                        </div>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Tecnologías</p>
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
                        <p className={styles.pSub}>Proyectos</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.pSub}>Animú</p>
                    </div>
                </Zoom>
                <Zoom className={styles.slide}>
                    <div className={styles.divSubTitle}>
                        <p className={styles.textBox}>Esta página fue creada usando React y Redux en la parte de front, mientras que se usó
                            Express y MongoDB en
                            el back. Se realizó consumiendo la API de Jikan. La realicé más que nada para practicar el uso de Api externas y
                            la creación de usuarios,
                            también el uso de mongoDB como base de datos. En la misma se pueden ver los animes de temporada actual,
                            como también buscar de varios años atrás, exactamente hasta 1975. Buscar por categorías, crear usuario, agregar
                            favoritos, etc.</p>
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
                        <p className={styles.textBox}>Esta pagina es un E-Commerce el cual realice en solitario utilizando React
                            y Redux para desarrollar el Front End y en el Back End se utilizo Express, Node y MongoDB, si bien no es un
                            sitio muy grande tiene varias funcionalidades, se pueden realizar compras de productos a través del medio de pago
                            Stripe, adherir productos a una wishlist, en la parte de administrador se pueden crear productos, editar los mismos,
                            crear categorías, entre otras funciones, espero que lo visiten.</p>
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
                        <p className={styles.textBox}>En este caso hice una red social por recomendación de algunos
                            contactos en discord, en la misma aplique todos los conocimientos adquiridos durante los proyectos que estuve
                            haciendo este tiempo, en la misma se pueden hacer varias cosas como crear un perfil, añadir amigos, enviar mensajes,
                            subir imágenes, crear posts, etc, varias cosas que se pueden hacer en cualquier red social, también utilice algunas
                            APIs externas para poner un poco mas de contenido. Espero que la disfruten.</p>
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
                        <p className={styles.textBox}>Este proyecto es una pequeña app de traducción usando
                            algunos ejercicios básicos de Duolingo para practicar Next.js. Espero que la disfruten.</p>
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

export default HomeSpanish;