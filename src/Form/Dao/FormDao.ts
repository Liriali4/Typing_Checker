import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import { FirstType, SecondType, ThirdType } from "../../Types";

export function GetAllFirstDao() {
    const data = getData(StorageEnum.First);
    return data ? data : [];
}

export function GetAllSecondDao() {
    const data = getData(StorageEnum.Second);
    return data ? data : [];
}

export function GetAllThirdDao() {
    const data = getData(StorageEnum.Third);
    return data ? data : [];
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
