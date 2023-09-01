import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import { FirstType, SecondType } from "../../Types";

export function GetAllFirstDao() {
    const data = getData(StorageEnum.First);
    return data ? data : [];
}

export function GetAllSecondDao() {
    const data = getData(StorageEnum.Second);
    return data ? data : [];
}

export function AddFirstDao(updatedObject: FirstType[]) {
    saveData(StorageEnum.First, updatedObject);
}

export function AddSecondDao(updatedObject: SecondType[]) {
    saveData(StorageEnum.Second, updatedObject);
}

