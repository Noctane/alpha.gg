import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex columns-3 items-end justify-between p-2 sm:w-full xl:w-3/5">
      <div className="flex gap-4">
        <Link href="/">
          <a className="text-sm text-slate-500 hover:text-slate-200">Home</a>
        </Link>
        <Link href="/leaderboards">
          <a className="text-sm text-slate-500 hover:text-slate-200">
            Classement
          </a>
        </Link>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Noctane/alpha.gg"
        className="text-sm text-slate-500 hover:text-slate-200"
      >
        Github
      </a>
    </div>
  );
}
