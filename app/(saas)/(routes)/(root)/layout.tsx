// import FooterView from "../../_views/FooterView";
// import NavbarView from "../../_views/NavbarView";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      {/* <NavbarView /> */}
      <div className="grow">{children}</div>
      {/* <FooterView /> */}
    </div>
  );
}
