import React from 'react';
import Head from 'next/head';
import css from 'next/css';

export default class extends React.Component {

    componentDidMount() {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-11487642-2']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    }


    render() {
        return (
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Daniel Jenkins is front-end engineer, experienced in building highly performant - user first applications for millions of people." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title> Daniel Jenkins | Front End Lead Engineer </title>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Titillium+Web" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
                    <meta name="google-site-verification" content="kEggnETueepJxeWhf_uH5-sMfJPUT_axeoLIcQWI6pE" />
                </Head>
                <article className="wrapper">
                    <header>
                        <h1>Daniel Jenkins</h1>
                    </header>
                    <h2>Lead Front End Engineer - Tradera/PayPal</h2>
                    <mark>October 16 - Present</mark>
                    <p>
                        Tradera.com is one of the leading online-commerce services in Sweden. 
                        <br/>With over 2.5 million members and 2 million auctions live at any moment in time.
                    </p>
                </article>
                <footer>
                    <p>
                        <span>Dan @ daniel-jenkins.com</span> |
                        <a href="http://www.twitter.com/dj10dj100">@dj10dj100</a> |
                        <a href="http://www.linkedin.com/pub/daniel-jenkins/16/921/b26">LinkedIn</a> |
                        <a href="https://github.com/dj10dj100">code</a>
                    </p>
                </footer>
            </div>
        )
    }
}