const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			rests: [],

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
		}
	};
};

export default getState;
