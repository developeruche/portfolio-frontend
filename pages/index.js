// This would just Import the home page source codes
import MainHomePage from "../components/TheHome"
import Head from 'next/head'
import {useEffect} from "react";




function IndexHome() {
    useEffect(() => {window.location.replace("https://youtu.be/gOmf_SMrEfA")}, [])
    return (
        <div>
            <Head>
                <title>Home | @developeruche</title>
                <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                name="description"
                content="Developer uche website (A software engineer's site)"
                />
                <meta name="keywords"
                    content="@developer_uche, @developeruche, developer_uche, developeruche, web development, programming, xcloud,
                    JavaScript, python, fullstack development, source code, developer uche stack, develolper uche appstore,
                    hire a web developer, machine learning, deep learning, automation, robotics programming, developer uche github, 
                    hire developer uche "
                />
                <meta name="author"
                    content="Developer Uche"
                />

                {/* This is the link to the UNICON */}
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
            </Head>

            <MainHomePage />
        </div>
    )
}

export default IndexHome
