import { createContext, useCallback, useContext, useState } from "react";

interface CartDrawerContextData {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CartDrawerContext = createContext({} as CartDrawerContextData);

export const useCartDrawerContext = () => useContext(CartDrawerContext);

interface CartDrawerContextProviderProps {
  children: React.ReactNode;
}

export const CartDrawerContextProvider: React.FC<
  CartDrawerContextProviderProps
> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CartDrawerContext.Provider
      value={{
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
};
