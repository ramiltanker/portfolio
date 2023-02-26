import React, { createContext, FC } from "react";

interface ILanguageProvider {
  children: React.ReactNode;
}

const useValue = () => {
  const [language, setLanguage] = React.useState<"ru" | "en">("ru");

  return {
    language,
    setLanguage,
  };
};

export const LanguageContext = createContext({} as ReturnType<typeof useValue>);

export const LanguageProvider: FC<ILanguageProvider> = ({ children }) => {
  return (
    <LanguageContext.Provider value={useValue()}>
      {children}
    </LanguageContext.Provider>
  );
};
