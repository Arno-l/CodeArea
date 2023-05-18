import Layout from "../components/Layout";
import Head from "next/head";
import HomePage from "../components/HomePage";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>CodeArea</title>
        <meta
          name="description"
          content="In progress"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </>
  );
};

export default Home;
