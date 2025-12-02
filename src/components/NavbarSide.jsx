export default function NavbarSide({ links, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full  w-[250px] z-[220] shadow-2xl p-3 flex flex-col gap-6 ">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links */}
        <div className="flex flex-col gap-2 bg-[#0f172a] backdrop-blur-md p-4 rounded-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 bg-[#182237] hover:text-white text-lg font-medium transition-colors border border-white/10 p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
