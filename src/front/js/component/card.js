import React from "react";
import { Link, useParams, } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = ({ data }) => {
	const params = useParams();
	console.log(data)
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={data.data.rest_image} class="card-img-top" alt="ss" />
				<div className="card-body">
					<h5 className="card-title">{data.data.rest_name}</h5>
					<p className="card-text">{data.data.rest_address}</p>

					<Link to={{ pathname: "information/" + data.data.id, state: { ...data } }} className="text-decoration-none">
						<button className="button-24 ">
							See Instructions
						</button>
					</Link>

				</div>
			</div>

			{/* <div>
				{store.rests.map((rest) => {
					<div class="card" style="width: 18rem;">
						<img src={rest.rest_image} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">{data.rest_name}</h5>
							<p class="card-text">{data.rest_address}</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				}
				)}
			</div> */}
		</div>
	)
};

Card.propTypes = {
	match: PropTypes.object
};