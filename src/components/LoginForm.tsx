import React, { useState, FormEvent, ChangeEvent } from "react";
import { LoginFormProps } from "../interfaces/FormProps";
import { motion } from "framer-motion";
import Image from "next/image";

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, showRegistrationForm, removeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Effectuez ici les opérations de validation et de soumission du formulaire
    onLogin(email, password);
    // Réinitialisez les valeurs des champs
    setEmail("");
    setPassword("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleRegistrationClick = () => {
    showRegistrationForm();
  };



  return (
    <>
      
        <motion.form onSubmit={handleSubmit} className="w-full">
          <div className="w-full mb-12 flex flex-col justify-center items-center">
            <h1 className="text-2xl text-white font-semibold">Connexion</h1>
            <h3 className="text-medium text-white">Bienvenue sur CodeArea</h3>
          </div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="E-mail"
            onChange={handleInputChange}
            className="mb-6 py-1.5 px-3 w-full text-lg text-white border border-2 border-gray-400 hover:border-primary rounded-full outline-none caret-primary bg-transparent"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Mot de passe"
            className="py-1.5 px-3 w-full text-lg text-white border border-2 border-gray-400 hover:border-primary rounded-full outline-none caret-primary bg-transparent"
            onChange={handleInputChange}
            required
          />
          <button className="w-full flex justify-start">
            <h3 className="mt-6 ml-2 text-primary font-medium hover:underline">Mot de passe oublié ?</h3>
          </button>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="mt-2 p-2 text-xl text-white border border-1 border-b-2 rounded-lg hover:border-primary "
            >
              <h3>Se connecter</h3>
            </button>
            <div className="mt-6 flex justify-center items-center">
              <h3 className="text-white">Vous n&apos;êtes pas encore inscrit ?</h3>
              <button
                onClick={handleRegistrationClick}
                className="ml-4 text-primary font-medium hover:underline focus:outline-none"
              >
                <h3>Inscription</h3>
              </button>
            </div>
            <button onClick={removeForm} className="mt-6 cursor-pointer">
            <Image src="/images/back_logo.png" width={24} height={24} alt="back" />
            </button>
          </div>
        </motion.form>
        

    </>
  );
};

export default LoginForm;
