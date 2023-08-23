import { GetAllFirstDao, GetAllSecondDao, GetAllThirdDao, AddFirstDao, AddSecondDao, AddThirdDao } from '../Dao/FormDao';
import { useFirstModuleStore, useSecondModuleStore, useThirdModuleStore } from '../../State/zustand';
import { FirstType, SecondType, ThirdType } from '../../Types';

export function getAllFirstItems() {
    return GetAllFirstDao();
}

export function getAllSecondItems() {
    return GetAllSecondDao();
}

export function getAllThirdItems() {
    return GetAllThirdDao();
}
export function addFirstItem(item: FirstType, allItems: FirstType[]) {
  const updatedItems = [...allItems, item];
  AddFirstDao(updatedItems);
  useFirstModuleStore.getState().setFirstItems(updatedItems);
}

export function addSecondItem(item: SecondType, allItems: SecondType[]) {
  const updatedItems = [...allItems, item];
  AddSecondDao(updatedItems);
  useSecondModuleStore.getState().setSecondItems(updatedItems);
}

export function addThirdItem(item: ThirdType, allItems: ThirdType[]) {
  const updatedItems = [...allItems, item];
  AddThirdDao(updatedItems);
  useThirdModuleStore.getState().setThirdItems(updatedItems);
}