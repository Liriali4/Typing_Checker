import { create } from "zustand";

type State<T> = {
  delivery: any[];
  dispatch: (item: T) => void;
};

export const UseGenericStore = <T extends { id: number }>() =>
  create<State<T>>((set) => ({
    delivery: [],
    dispatch: (item) =>
      set((state) => ({ delivery: [...state.delivery, item] }))
  }));
