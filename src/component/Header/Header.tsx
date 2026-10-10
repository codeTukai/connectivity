import {
  Search,
  House,
  Users,
  BriefcaseBusiness,
  MessageCircle,
  Bell,
  UserRound,
} from "lucide-react";

const NavItem = [
  { label: "Home", Icon: House },
  { label: "My Connection", Icon: Users },
  { label: "Jobs", Icon: BriefcaseBusiness },
  { label: "Messaging", Icon: MessageCircle },
  { label: "Notifications", Icon: Bell },
  { label: "Profile", Icon: UserRound },
];
function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-3">
          <a
            href="/"
            className="shrink-0 rounded bg-[#05432e] px-1.5 py-0.5 text-3xl font-bold text-white"
          >
            socialC
          </a>
          <div className="flex max-w-xs flex-1 items-center gap-2 rounded-md bg-[#EDF3F8] px-3 py-2">
            <Search size={19} />
            <input
              type="text"
              placeholder="search"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <nav className="ml-10 flex items-center gap-5">
            {NavItem.map(({ label, Icon }) => (
              <button
               key={label} 
               type="button"
               className="flex flex-col items-center gap-1 text-gray-700 hover:text-black transition-all"
               >
                <Icon size={22} strokeWidth={1.7} />
                <span className="whitespace-nowrap text-xs">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
