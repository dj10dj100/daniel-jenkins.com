/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
				<article className="wrapper">
					<header>
						<h1>Daniel Jenkins</h1>
					</header>
					<h2>Lead Front End Engineer - Tradera/PayPal</h2>
					<mark>October 16 - Present</mark>
					<p>
						Tradera.com is one of the leading online-commerce services in Sweden, serving over 2.5m members & 2m auctions daily.
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

export default App;
