import SearchIcon from "@/assets/icons/search.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="relative grow shrink-0 basis-0 w-fit">
      <input
        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl border border-solid bg-blend-normal bg-slate-100 border-neutral-300 text-neutral-800"
        placeholder="Search"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
    </div>
  );
};

export default SearchBar;
