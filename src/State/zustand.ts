import create from 'zustand';
import { FirstType, SecondType } from '../Types';
import { getAllFirstItems, getAllSecondItems } from '../Form/Repository/FormRepository';

type FirstModuleStore = {
  firstItems: FirstType[];
  addFirstItem: (item: FirstType) => void;
  setFirstItems: (items: FirstType[]) => void;
  getFirstItems: () => void;
};

type SecondModuleStore = {
  secondItems: SecondType[];
  addSecondItem: (item: SecondType) => void;
  setSecondItems: (items: SecondType[]) => void;
  getSecondItems: () => void;
};


export const useFirstModuleStore = create<FirstModuleStore>((set) => ({
  firstItems: [],
  addFirstItem: (item) =>
    set((state) => ({
      firstItems: [...state.firstItems, item],
    })),
  setFirstItems: (items) =>
    set((state) => ({
      firstItems: items,
    })),
  getFirstItems: () => {
    console.log("Veio buscar FirstModuleStore");
    set({
      firstItems: getAllFirstItems()
    });
  }
}));

export const useSecondModuleStore = create<SecondModuleStore>((set) => ({
  secondItems: [],
  addSecondItem: (item) =>
    set((state) => ({
      secondItems: [...state.secondItems, item],
    })),
  setSecondItems: (items) =>
    set((state) => ({
      secondItems: items,
    })),
  getSecondItems: () => {
    set({
      secondItems: getAllSecondItems()

    });
  }
}));
