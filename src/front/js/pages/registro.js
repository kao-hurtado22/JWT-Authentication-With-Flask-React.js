import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { useHistory } from "react-router-dom";

export const Registro = () => {
    const { store, actions } = useContext(Context);
    const [registro, setRegistro] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [validation, setValidation] = useState(true);
    //const history = useHistory();

    const handleChange = ({ target: { name, value } }) => {
        setRegistro({ ...registro, [name]: value });
        console.log(registro);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            registro.name !== "" &&
            registro.email !== "" &&
            registro.password !== ""
        ) {

            console.log(registro);
            actions.setRegistro(registro);
            //history.push("/login");
            setRegistro({ name: "", email: "", password: "" });
            setValidation(true);

        } else
            setValidation(false)
    };
    //aca debe ir function de flux



    return (
        <div className="container bg-secondary p-4 mt-4 shadow-sm">

            <form className="form" onSubmit={handleSubmit}>
                <h2 className="text-center mt-4">Registro</h2>
                <div className="container w-50">
                    <div className="row">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={handleChange}
                            value={registro.name}
                        />
                    </div>
                    {!validation && <p className="text-danger text-center">Agregue nombre</p>}
                    <div className="row">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                            value={registro.email}
                        />
                    </div>
                    {!validation && <p className="text-danger text-center">Agregue email</p>}
                    <div className="row">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleChange}
                            value={registro.password}
                        />
                    </div>
                    {!validation && <p className="text-danger text-center">Agregue password</p>}
                    <div className="row mt-3">
                        <button type="submit" className="btn btn-dark btn-sm m-auto w-25">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
