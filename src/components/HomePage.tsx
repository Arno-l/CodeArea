import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const HomePage: React.FC = () => {
  const [formState, setFormState] = useState("none");
  const [directionState, setDirectionState] = useState("right");

  const handleLogin = (email: string, password: string) => {
    // Effectuez ici les opérations de validation et de soumission du formulaire
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  const handleRegister = (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    // Effectuez ici les actions d'inscription appropriées
    console.log("Inscription réussie !");
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  const handleLoginClick = () => {
    setFormState("login");
  };

  const removeForm = () => {
    setFormState("none");
  }

  return (
    <div className="h-screen w-full">
      <div className="w-full h-1/4 flex justify-center items-center">
        <Image
          src="/images/CodeArea.png"
          className="w-1/5 h-auto"
          width={750}
          height={750}
          alt="app logo"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className=" mt-8 text-3xl font-medium text-white">
          Connectez-vous, codez ensemble, collaborez efficacement.
        </h1>
        {formState === "none" && (
          <motion.button
            onClick={handleLoginClick}
            className="mt-28 text-3xl text-white border border-2 border-b-4 rounded-lg p-4 hover:border-primary"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Démarrer
          </motion.button>
        )}

        {formState === "login" && (
          <motion.div
            initial={{ opacity: 0, x: directionState === "right" ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-8 w-1/2 flex justify-center items-center border border-1 border-gray-700 rounded-xl"
          >
            <LoginForm
              onLogin={handleLogin}
              showRegistrationForm={() => setFormState("registration")}
              removeForm={removeForm}
            />
          </motion.div>
        )}

        {formState === "registration" && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-8 w-1/2 flex justify-center items-center border border-1 border-gray-700 rounded-xl"
          >
            <RegistrationForm
              onRegister={handleRegister}
              handleLoginClick={handleLoginClick}
              setDirectionState={setDirectionState}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
