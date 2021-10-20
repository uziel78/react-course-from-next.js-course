import MainNavigation from "./MainNavigation";
import layoutStyles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={layoutStyles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
