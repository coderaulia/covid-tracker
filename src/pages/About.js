import React, { Component } from "react";
import Header from "../parts/Header";
import Section from "../parts/Section";

export default class About extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<Section
					title='Tentang Kami'
					data='Ini adalah aplikasi sederhana yang sedang dalam proses development, anda dapat mengunjunginya melalui link Github kami.'></Section>
			</>
		);
	}
}
