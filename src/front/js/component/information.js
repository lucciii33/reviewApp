import React, { useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import { object } from "prop-types";
import { element } from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Information = ({ data }) => {
	var data = useLocation().state;
	console.log(data)
	const { store, actions } = useContext(Context);
	// const { image, name, address } = useParams();

	return (
		<div className="jumbotron">
			<div class="card" style={{ width: '18rem' }}>
				<img src={data?.rest_image} class="card-img-top" alt="..." />
				<div class="card-body">
					<p class="card-text">{data?.rest_name}</p>
					<p class="card-text">{data?.rest_address}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div >
	);
};

Information.propTypes = {
	match: PropTypes.object
};
