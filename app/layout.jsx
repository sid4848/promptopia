import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metdata = {
  title: "Promptopia",
  description: "Discover $ Share AI prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html long="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
