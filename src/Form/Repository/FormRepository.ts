import { GetAllFirstDao, GetAllSecondDao, AddFirstDao, AddSecondDao } from '../Dao/FormDao';
import { useFirstModuleStore, useSecondModuleStore } from '../../State/zustand';
import { FirstType, SecondType } from '../../Types';

export function getAllFirstItems() {
    return GetAllFirstDao();
}

export function getAllSecondItems() {
    return GetAllSecondDao();
}

export function addFirstItem(item: FirstType, allItems: FirstType[]) {
  const exist= allItems
  const updatedItems = [...exist, item];
  AddFirstDao(updatedItems);
  useFirstModuleStore.getState().setFirstItems(updatedItems);
}

export function addSecondItem(item: SecondType, allItems: SecondType[]) {
  const exist= allItems
  const updatedItems = [...exist, item];
  AddSecondDao(updatedItems);
  useSecondModuleStore.getState().setSecondItems(updatedItems);
}
