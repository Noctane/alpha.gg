import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alpha Gang&Games</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-center text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Alpha Gang&Games
        </h1>
        <h2 className="text-center text-2xl">Choose your game</h2>
        <div className="flex justify-around">
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="worldle" value="worldle" checked />
            <label htmlFor="">Worldle</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="sutom" value="sutom" />
            <label htmlFor="">Sutom</label>
          </div>
        </div>
        <h2 className="text-center text-2xl">
          What&apos;s your name, fellow challenger ?
        </h2>
        <div>
          <select name="playerName" id="playerName">
            <option value="sylvain">Sylvain</option>
            <option value="benoit">Benoît</option>
            <option value="Denis">Denis</option>
            <option value="Youssef">Youssef</option>
            <option value="Bastien">Bastien</option>
            <option value="Alexis V">Alexis V</option>
            <option value="Alexis L">Alexis L</option>
            <option value="Arnaud">Arnaud</option>
            <option value="Johan">Johan</option>
            <option value="Guillaume">Guillaume</option>
          </select>
        </div>
        <h2 className="text-center text-2xl">Did you score well ?</h2>
        <div className="flex justify-around">
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="1" value="1" checked />
            <label htmlFor="1">1</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="2" value="2" />
            <label htmlFor="2">2</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="3" value="3" />
            <label htmlFor="3">3</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="4" value="4" />
            <label htmlFor="4">4</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="5" value="5" />
            <label htmlFor="5">5</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="6" value="6" />
            <label htmlFor="6">6</label>
          </div>
          <div className="mx-2 block border border-gray-500 px-4 py-2">
            <input type="radio" name="7" value="7" />
            <label htmlFor="7">7</label>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
