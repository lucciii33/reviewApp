import React, { useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import { object } from "prop-types";
import { element } from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Information = () => {
	// var location = useLocation();
	// console.log(location)

	const { store, actions } = useContext(Context);
	const params = useParams()

	const [sendReview, setSendReview] = useState({ rest_name: "", review: "", rating: "" });
	const handleChange = e => {
		setSendReview({ ...sendReview, [e.target.name]: e.target.value });

	};


	useEffect(() => {
		const info = store.rests.find((item) => {
			console.log(item)
			if (item.id == params.id) {
				return item
			}
		})
		setData(info)
	}, [store.rests])
	console.log(params.id)
	const [data, setData] = useState({})
	console.log(data)

	useEffect(() => {
		actions.getReviewId(data.id)
	}, [])
	// const { image, name, address } = useParams();

	return (
		<div className="jumbotron">
			<div className="card" style={{ width: '18rem' }}>
				<img src={data?.rest_image} class="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">{data?.rest_name}</p>
					<p className="card-text">{data?.rest_address}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>

			<div>
				<h3>Leave us a review</h3>
				<input placeholder="restaurant name"
					value={sendReview.rest_name}
					name="rest_name"
					onChange={handleChange} />
				<input placeholder="review"
					value={sendReview.review}
					name="review"
					onChange={handleChange} />
				<input placeholder="rating"
					value={sendReview.rating}
					name="rating"
					onChange={handleChange} />
				<button onClick={() => actions.postReviewId(sendReview.rest_name, sendReview.review, sendReview.rating, data.id)}>send review</button>
			</div>

			<div>
				{store.reviewId.map((review) => {
					return (
						<div>
							<h1>{review.review}</h1>
						</div>
					)
				})}
			</div>
		</div >
	);
};

Information.propTypes = {
	match: PropTypes.object
};
