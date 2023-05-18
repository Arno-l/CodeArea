import React, { useState, useEffect } from "react";
import { RegistrationFormProps } from "../interfaces/FormProps";
import { motion } from "framer-motion";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister, handleLoginClick, setDirectionState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    setDirectionState("left")
  },[])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Effectuez ici les opérations de validation et de soumission du formulaire d'inscription
    onRegister(email, password, passwordConfirm);
  };

  return (
    <>
      <motion.form onSubmit={handleSubmit}>
        <div className="w-full mb-12 flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-semibold">Inscription</h1>
          <h3 className="text-medium text-white">Bienvenue sur CodeArea</h3>
        </div>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-6 py-1.5 px-3 w-full text-lg text-white border border-2 border-gray-400 hover:border-primary rounded-full outline-none caret-primary bg-transparent"
        />
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 py-1.5 px-3 w-full text-lg text-white border border-2 border-gray-400 hover:border-primary rounded-full outline-none caret-primary bg-transparent"
        />
        <input
          type="password"
          id="passwordConfirm"
          placeholder="Confirmer mot de passe"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          className=" py-1.5 px-3 w-full text-lg text-white border border-2 border-gray-400 hover:border-primary rounded-full outline-none caret-primary bg-transparent"
        />
        <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="mt-8 p-2 text-xl text-white border border-1 border-b-2 rounded-lg hover:border-primary "
            >
              <h3>S&apos;inscrire</h3>
            </button>
            <div className="mt-6 flex justify-center items-center">
              <h3 className="text-white">Vous êtes déjà inscrit ?</h3>
              <button
                onClick={handleLoginClick}
                className="ml-4 text-primary font-medium hover:underline focus:outline-none"
              >
                <h3>Connexion</h3>
              </button>
            </div>
          </div>
      </motion.form>
    </>
  );
};

export default RegistrationForm;
