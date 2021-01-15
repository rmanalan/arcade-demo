import { HiMenu } from "react-icons/hi";

export function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://avatars.slack-edge.com/2020-12-18/1600540936833_4fa67c449d2b0ed57761_88.png"
                alt=""
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                id="main-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Open main menu</span>
                <HiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
            Product
          </a>

          <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
            Features
          </a>

          <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
            Marketplace
          </a>

          <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
            Company
          </a>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
            >
              Log in
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
