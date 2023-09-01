const storage = window.localStorage;

export enum StorageEnum {
	First = 'first',
	Second = 'second',
}

export function saveData(key: string, data: any) {
	storage.setItem(key, JSON.stringify(data));
}

export function getData(key: string) {
	const data = storage.getItem(key);
	if (data !== null) {
		if (data !== 'undefined') {
			//if (data.length > 2) {
			return JSON.parse(data);
			//}
		}
	}

	return null;
}

export function editData(key: string, id: number, updatedData: any) {
    const existingData = getData(key) || [];
    const updatedDataList = existingData.map((item: any) =>
        item.id === id ? { ...item, ...updatedData } : item
    );
    saveData(key, updatedDataList);
}


export function deleteData(key: string) {
	storage.removeItem(key);
}

export function deleteAll() {
	storage.clear()
}