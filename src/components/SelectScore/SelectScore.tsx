interface SelectScoreProps {
  score: number | undefined;
  handleSelectScore: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectScore({
  score,
  handleSelectScore,
}: SelectScoreProps) {
  return (
    <>
      {Array.from({ length: 7 }, (_, i) => `${i + 1}`).map((idx) => (
        <div className="mx-2 block" key={idx}>
          <label
            htmlFor={idx}
            className={`block cursor-pointer rounded border bg-slate-700 px-4 py-2 hover:border-pink-400 ${
              score === +idx ? "border-pink-400" : "border-transparent"
            }`}
          >
            <input
              type="radio"
              className="appearance-none"
              name={idx}
              id={idx}
              value={+idx}
              checked={score === +idx}
              onChange={handleSelectScore}
            />
            {idx}
          </label>
        </div>
      ))}
    </>
  );
}
