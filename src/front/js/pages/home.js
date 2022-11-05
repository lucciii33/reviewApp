import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { Card } from "../component/card";
import PropTypes from "prop-types";

export const Home = ({ data }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// var data = store.rests
	useEffect(() => {

	}, [])
	// console.log(data)

	return (
		<div className="text-center mt-5">
			<h1>pick a restaurante to review</h1>

			{store.rests
				? store.rests.map((data, index) => (
					<Card
						data={{
							data,
							// name: item.rest_name,
							// address: item.rest_address,
							// image: item.rest_image,
							// id: item.id
						}}
						key={index}
					/>
				))
				: "loading"}
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};