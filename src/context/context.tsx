import { createContext, useContext, useState, ReactNode, FC, SetStateAction } from 'react';

interface GlobalContextType {
  paragraphId: number | null;
  updateParagraphId: (newValue: number | null) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [paragraphId, setParagraphId] = useState<number | null>(null);

  const updateParagraphId = (newValue: number | null) => {
    setParagraphId(newValue);
  };

  return (
    <GlobalContext.Provider value={{ paragraphId, updateParagraphId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
