import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    console.log("este es tu token" + " " + store.token);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email, password);
        actions.setLogin(email, password);//.then(() => { history.push('/')})
    };

    if (store.token && store.token != "" && store.token != undefined) history.push("/");
    return (
        <div className="container bg-secondary p-4 mt-4 shadow-sm">
            <form className="form">
                <h2 className="text-center mt-4">Login</h2>
                {/* un renderizado condicioanl */}
                {store.token && store.token != "" && store.token != undefined ? (
                    "tu estas logeado con este token " + " " + store.token
                ) : (
                    <div className="container w-50">
                        <div className="row">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="row">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="row mt-3">
                            <button
                                type="submit"
                                className="btn btn-dark btn-sm m-auto w-25"
                                onClick={handleClick}
                            >
                                Send
                            </button>
                            <p className="bg-warning text-center mt-5">Ingresa "test" para ambos inputs, login de prueba</p>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};
