import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-around px-4 py-8">
      <Logo />
      <Navigation />
      <div className="flex flex-grow flex-col items-center justify-around rounded-lg border border-slate-700 bg-slate-800 px-6 pt-16 pb-6 shadow-md sm:w-full xl:w-3/5">
        {children}
      </div>
    </main>
  );
}
