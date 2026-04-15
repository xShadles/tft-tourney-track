import IconButtons from "../props/IconButton";


const Home = () => {

    return (<div className="flex-col h-screen">
      <div className=" bg-[url('https://shorturl.at/82Lq0')] bg-cover w-screen h-6/10 p-10 text-center">
        <div className="text-white-600 m-30 text-9xl">
          <h1 className="font-bold text-shadow-lg">TORNEYFINDERTACTICS</h1>
          <p className="text-lg">Keep track of tft tornaments here</p>
        </div>
        <button className="mx-20 px-12 py-5 font-bold text-lg bg-white cursor-pointer text-orange-950 rounded-xl border-2 border-orange-950 hover:bg-orange-950 hover:text-orange-500 hover:border-orange-500 focus:outline-2 focus:outline-offset-2 transition">
          FIND TOURNAMENT
        </button>
        <button className="mx-20 px-12 py-5 font-bold text-lg bg-orange-950/10 cursor-pointer text-orange-500 rounded-xl border-2 border-orange-500 hover:bg-orange-950 focus:outline-2 focus:outline-offset-2 transition ">
          WATCH LIVE STEAM
        </button>
      </div>

      <div className="bg-orange-950/50 w-screen h-4/10 flex items-center justify-center px-6">
        <div className="p-10">
          <h4>Torney Fight Tactics</h4>
          <p className="text-gray-500">A tournament managemnt platform for Team Fight Tactics Esports competitons</p>
            <IconButtons>
            </IconButtons>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
    </div>        
    );
};

export default Home