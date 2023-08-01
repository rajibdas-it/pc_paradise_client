import { useGetCategoriesQuery } from "@/redux/api/apiSlice";
import Link from "next/link";
import NavItem from "../NavItem";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data } = useGetCategoriesQuery();
  const { data: session } = useSession();

  return (
    <div className=" bg-primary text-black">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-[360px] text-white"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Components</summary>
                  <ul className="p-2">
                    {data?.data.map((item) => (
                      <NavItem key={item?._id} item={item} />
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/product">Products</Link>
              </li>
              <div className="flex flex-col mt-5">
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="btn bg-gradient-to-t from-purple-600 to-blue-600 outline outline-offset-0 text-white"
                  >
                    Signout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="btn bg-gradient-to-t from-purple-600 to-blue-600 outline outline-offset-0 text-white"
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
          <Link
            href="/"
            className="text-lg uppercase sm:text-2xl font-bold bg-gradient-to-t from-purple-700 to-orange-600 text-transparent bg-clip-text"
          >
            pc Paradise
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Components</summary>
                <ul className="p-2 bg-slate-500 z-20 w-full">
                  {data?.data.map((item) => (
                    <NavItem key={item?._id} item={item} />
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/build_pc"
            className="btn bg-gradient-to-t from-purple-600 to-blue-600 outline outline-offset-0 text-white"
          >
            PC Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
