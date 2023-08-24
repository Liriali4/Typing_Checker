import create from 'zustand';
import { FirstType, SecondType, ThirdType } from '../Types';
import { getAllFirstItems, getAllSecondItems, getAllThirdItems } from '../Form/Repository/FormRepository';

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

type ThirdModuleStore = {
  thirdItems: ThirdType[];
  addThirdItem: (item: ThirdType) => void;
  setThirdItems: (items: ThirdType[]) => void;
  getThirdItems: () => void;
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

export const useThirdModuleStore = create<ThirdModuleStore>((set) => ({
  thirdItems: [],
  addThirdItem: (item) =>
    set((state) => ({
      thirdItems: [...state.thirdItems, item],
    })),
  setThirdItems: (items) =>
    set((state) => ({
      thirdItems: items,
    })),
  getThirdItems: () => {
    set({
      thirdItems: getAllThirdItems()
    });
  }
}));
