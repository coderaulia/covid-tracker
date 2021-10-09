import React, { Component } from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Section from "../parts/Section";

export default class Vaksin extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<Section
					title='Coming Soon!'
					data='Saat ini masih dalam proses pengembangan, kami belum menemukan API mengenai data vaksin di Indonesia.'></Section>
				<Footer></Footer>
			</>
		);
	}
}
