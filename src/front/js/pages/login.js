import React from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = evento => { console.log(evento); }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>


                {/* <div className="login-form">
                        <div className="control-group">
                            <label htmlFor="exampleInputEmail1" className="form-label-name">
                                Correo
                            </label>
                            <input
                                type="text"
                                className="login-field"
                                defaultValue=""
                                placeholder="ejemplo@gmail.com"
                                id="login-name"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "El correo es requerido"
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "El formato no es correcto"
                                    }
                                })}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                            <label className="login-field-icon fui-user" htmlFor="login-name" />
                        </div>
                        <div className="control-group">
                            <label htmlFor="exampleInputPassword1" className="form-label-pass">
                                Password
                            </label>
                            <input
                                type="password"
                                className="login-field"
                                defaultValue=""
                                placeholder="Password"
                                id="login-pass"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "El campo es requerido"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "La contraseña debe tener al menos 6 caracteres"
                                    }
                                })}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                            <label className="login-field-icon fui-lock" htmlFor="login-pass" />
                        </div> */}
                <button className="btn btn-primary btn-large btn-block" href="#">
                    Iniciar Sesión
                </button>
                <a className="login-link" href="#">
                    ¿Aún no tienes tu cuenta?
                </a>
                <a className="registrate" href="#">
                    ¡Registrate!
                </a>
            </div>
            {/* </div> */}

        </form >

    );
};