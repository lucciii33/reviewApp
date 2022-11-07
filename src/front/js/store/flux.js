const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			rests: [],
			getReviewId: [],
			reviewId: []

		},
		actions: {
			// Use getActions to call a function within a fuction

			getRests: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/rest")
					const data = await resp.json()
					console.log(data)
					setStore({ rests: data })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getReviewId: (id) => {
				let store = getStore()
				fetch(process.env.BACKEND_URL + `/api/rest/review/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						// "Authorization": `Bearer ${store.loggId?.access_token}`,
					},
				})
					.then((response) => response.json())
					.then((data) => setStore({ reviewId: data }))
					.catch((err) => console.log(err));
			},

			postReviewId: (rest_name, review, rating, id) => {
				let store = getStore()
				fetch(process.env.BACKEND_URL + `/api/rest/review/${id}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// "Authorization": `Bearer ${store.loggId?.access_token}`,
					},
					body: JSON.stringify({ rest_name, review, rating, id })
				})
					.then((response) => response.json())
					.then((data) => setStore({ getReviewId: data }))
					.catch((err) => console.log(err));
			},
		}
	};
};

export default getState;
