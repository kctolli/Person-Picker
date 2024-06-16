import { createContext, useContext } from "react";

export const Context = createContext({} as any);
export const ContextProvider = Context.Provider;
export const useContextService = () => useContext(Context);
