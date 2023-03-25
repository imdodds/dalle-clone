import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* Left */}
      <div className="flex space-x-2 items-center">
        <Image
          src='https://links.papareact.com/4t3'
          alt='logo'
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by Dall·E 2, ChatGPT, and Microsoft Azure
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex text-xs md:text-base items-center text-gray-500">
        <Link
          href='https://github.com/imdodds/dalle-clone'
          className="px-2 font-light text-right"
        >
          Github Repo
        </Link>
      </div>
    </header>
  )
}

export default Header
