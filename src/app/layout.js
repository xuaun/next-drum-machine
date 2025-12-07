import React from "react";

import SoundProvider from "../components/SoundProvider";
import Header from "../components/Header";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundProvider>
      </body>
    </html>
  );
}

export default RootLayout;
