import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined,
);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('isLoading:', isLoading);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};