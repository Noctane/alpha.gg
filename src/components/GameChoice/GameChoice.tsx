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
          className={`block cursor-pointer rounded border border-gray-500 px-4 py-2 hover:border-green-500 hover:bg-green-500 ${
            game === "worldle"
              ? "border-green-500 bg-green-500"
              : "bg-transparent"
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
          className={`block cursor-pointer rounded border border-gray-500 px-4 py-2 hover:border-yellow-500 hover:bg-yellow-500 ${
            game === "sutom"
              ? "border-yellow-500 bg-yellow-500"
              : "bg-transparent"
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
