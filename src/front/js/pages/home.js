import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) actions.privateMessage();

	}, [store.token]);

	return (
		<div className="text-center mt-5">
			<h1>HOME</h1>
			{!store.token ? (<div className="alert alert-info">Bienvenid@ a Home</div>) : (<div className="alert alert-success">{store.message}</div>)}


		</div>
	);
};
