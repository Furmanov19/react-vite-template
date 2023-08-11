import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "20px",
        width: "100vw",
      }}
    >
      <p>I'm default layout</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        {children ?? null}
      </div>
    </div>
  );
}

export default DefaultLayout;
