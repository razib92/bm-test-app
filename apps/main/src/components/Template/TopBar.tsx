export type TopBarProps = {
  title: string;
};

export const TopBar = ({ title }: TopBarProps) => (
  <nav className="fixed w-full h-16 z-20 top-0 px-5 bg-blue-400 text-white flex items-center text-xl lg:text-2xl font-semibold">
    {title}
  </nav>
);
