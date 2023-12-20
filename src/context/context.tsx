import {createContext, useContext, useState, ReactNode, FC, SetStateAction, useEffect} from 'react';

interface GlobalContextType {
  paragraphId: number | null;
  updateParagraphId: (newValue: number | null) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

interface WindowDimensions {
  width: number
  height: number
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

const getWindowDimensions = (): WindowDimensions => {
  if (typeof window === 'undefined') return { width: 0, height: 0 }
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}
export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  )
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimensions
}