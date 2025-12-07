"use client";
import React from "react";

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };
  return (
    <SoundContext value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext>
  );
}

export default SoundProvider;
