import { Link } from "react-router-dom";
import Search from "./Search";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col  gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          General
        </Link>
        <Link to="/posts?cat=world" className="underline">
          World
        </Link>
        <Link className="underline" to="/posts?cat=business">
          Business
        </Link>
        <Link to="/posts?cat=technology" className="underline">
          Technology
        </Link>
        <Link to="/posts?cat=entertainment" className="underline">
          Entertainment
        </Link>
        <Link to="/posts?cat=sports" className="underline">
          Sports
        </Link>
        <Link to="/posts?cat=science" className="underline">
          Science
        </Link>
        <Link to="/posts?cat=health" className="underline">
          Health
        </Link>
        <Link to="/posts?cat=nation" className="underline">
          Nation
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
