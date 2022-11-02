interface GameChoiceProps {
  game: string;
  onGameChoice: (game: string) => void;
}

export default function GameChoice({ game, onGameChoice }: GameChoiceProps) {
  return (
    <div className="flex justify-around">
      <div className="mx-2 block">
        <label
          htmlFor="worldle"
          className={`block cursor-pointer rounded px-4 py-2 hover:bg-green-500 ${
            game === "worldle" ? " bg-green-500" : "bg-slate-700"
          }`}
        >
          <input
            className="appearance-none"
            type="radio"
            name="worldle"
            id="worldle"
            value="worldle"
            onChange={() => onGameChoice("worldle")}
            checked={game === "worldle"}
          />
          Worldle
        </label>
      </div>
      <div className="mx-2 block">
        <label
          htmlFor="sutom"
          className={`block cursor-pointer rounded  px-4 py-2 hover:bg-yellow-500 ${
            game === "sutom" ? "bg-yellow-500" : "bg-slate-700"
          }`}
        >
          <input
            type="radio"
            name="sutom"
            id="sutom"
            value="sutom"
            className="appearance-none"
            onChange={() => onGameChoice("sutom")}
            checked={game === "sutom"}
          />
          Sutom
        </label>
      </div>
    </div>
  );
}
