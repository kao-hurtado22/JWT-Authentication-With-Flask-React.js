const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null,

		},
		actions: {
			//Fetch POST usuario ------------------------>>>>>>>>>>>>>>>>>>>>>
			setRegistro: (registro) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(registro);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow",
				};

				fetch(
					"https://3001-4geeksacademy-reactflask-j7ddulb4pgy.ws-us30.gitpod.io/api/registro",
					requestOptions
				)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.log("error", error));
			},

			tokenSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				console.log("aplicación recién cargada, sincronizando el token de almacenamiento de la sesión");
				if (token && token != "" && token != undefined) setStore({ token: token })
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("logout");
				setStore({ token: null })
				//console.log(store.token);
			},
			/* ------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
			privateMessage: () => {
				const store = getStore();
				var requestOptions = {
					method: 'GET',
					headers: { Authorization: "Bearer" + " " + store.token },
					redirect: 'follow'
				};

				fetch("https://3001-4geeksacademy-reactflask-j7ddulb4pgy.ws-us30.gitpod.io/api/private", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ message: result.message }))
					.catch(error => console.log('error', error));
			},


			//Fetch POST token ------------------------>>>>>>>>>>>>>>>>>>>>>
			setLogin: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password,
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow",
				};

				fetch(
					"https://3001-4geeksacademy-reactflask-j7ddulb4pgy.ws-us30.gitpod.io/api/token",
					requestOptions
				)
					.then((response) => {
						if (response.status == 200) return response.json();
						else alert("hay un error");
						return false;
					})

					.then((result) => {
						console.log("Esto viene del backend", result);
						sessionStorage.setItem("token", result.access_token);
						setStore({ token: result.access_token })
						return true;
					})
					.catch((error) => console.log("error", error));
			},
		},
	};
};

export default getState;
