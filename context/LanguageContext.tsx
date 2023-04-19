import React, { createContext, useState } from "react";

type LanguageContextType = {
  english: boolean;
  setEnglish: (english: boolean) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  english: false,
  setEnglish: () => {},
});

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}: LanguageProviderProps) => {
  const [english, setEnglish] = useState<boolean>(true);

  return (
    <LanguageContext.Provider value={{ english, setEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};
