import NavigationTopBar from "@/shared/NavigationTopBar";

export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavigationTopBar/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li><a>Menu Item 1</a></li>
          <li><a>Menu Item 2</a></li>
        </ul>
      </div>
    </div>
  );
}
