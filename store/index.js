import { create } from "zustand";
import { createContext, useContext } from "react";

export const Context = createContext();

export const Provider = Context.Provider;

export const useStore = (...args) => {
  const useStore = useContext(Context);
  return useStore(...args);
};

let store = {
  portfolioProjects: [],
  setPortfolioProjects: (portfolioProjects) => set((state) => ({ ...state, portfolioProjects })),
};

export const initStore = (initialData = {}) => {
  const createStore = () =>
    create((set, get) => ({
      ...store,
      ...initialData,
    }));

  return createStore;
};
