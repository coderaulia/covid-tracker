import React, { Component } from "react";
import Data from "../parts/Data";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

export default class Home extends Component {
	render() {
		return (
			<>
				<Header></Header>
				<Data></Data>
				<Footer></Footer>
			</>
		);
	}
}
