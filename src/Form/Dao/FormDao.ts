import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import { FirstType, SecondType, ThirdType } from "../../Types";

export function GetAllFirstDao() {
    return getData(StorageEnum.First)
}
export function GetAllSecondDao() {
    return getData(StorageEnum.Second)
}
export function GetAllThirdDao() {
    return getData(StorageEnum.Third)
}

export function AddFirstDao(updatedObject: FirstType[]) {
    saveData(StorageEnum.First, updatedObject);
}

export function AddSecondDao(updatedObject: SecondType[]) {
    saveData(StorageEnum.Second, updatedObject);
}

export function AddThirdDao(updatedObject: ThirdType[]) {
    saveData(StorageEnum.Third, updatedObject);
}
