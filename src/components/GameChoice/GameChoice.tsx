interface GameChoiceProps {
  game: string | undefined;
  onGameChoice: (game: string) => void;
}

export default function GameChoice({ game, onGameChoice }: GameChoiceProps) {
  return (
    <div className="flex justify-around">
      <div className="mx-2 block">
        <label
          htmlFor="worldle"
          className={`block cursor-pointer rounded border bg-slate-700 px-4 py-2 hover:border hover:border-green-500 ${
            game === "worldle"
              ? "border border-green-500"
              : "border-transparent"
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
          className={`block cursor-pointer rounded border bg-slate-700 px-4 py-2 hover:border hover:border-yellow-500 ${
            game === "sutom" ? "border border-yellow-500" : "border-transparent"
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
