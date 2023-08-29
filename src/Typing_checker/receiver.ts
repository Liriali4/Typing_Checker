import { UseGenericStore } from "../State/dispatcher";

export enum TypesEnum {
    First = 'FirstType',
    Second = 'SecondType',
    Third = 'third',
}

export async function MediatorAsync(obj: TypesEnum.First | TypesEnum.Second | TypesEnum.Third, data: any) {
    const response = await sendToModule(obj, data);
    console.log('estou no mediatorasync', response)
    return response;
}

async function sendToModule(typeOfData: TypesEnum.First | TypesEnum.Second | TypesEnum.Third, data: any) {

    const taskStore = UseGenericStore<any>()();
    
    switch (typeOfData) {
        case TypesEnum.First:
            taskStore.dispatch(data)
            /* const firstModuleDispatch = useFirstModuleStore.getState().addFirstItem; */
            return await sendToFirstModule(data);
        case TypesEnum.Second:
            taskStore.dispatch(data)
          /*   const secondModuleDispatch = useSecondModuleStore.getState().addSecondItem; */
            return await sendToSecondModule(data);
        case TypesEnum.Third:
            taskStore.dispatch(data)
            /* const thirdModuleDispatch = useThirdModuleStore.getState().addThirdItem; */
            return await sendToThirdModule(data);
        default:
            throw new Error('Tipo de objeto não reconhecido.');
    }

}


export async function sendToFirstModule(data: any) {
    return new Promise<string>((resolve, reject) => {
            resolve(`Dados ${JSON.stringify(data)} recebidos pelo primeiro Módulo`);
    });
}

export async function sendToSecondModule(data: any) {
    return new Promise<string>((resolve, reject) => {
            resolve(`Dados ${JSON.stringify(data)} recebidos pelo Segundo Módulo`);
    });
}

export async function sendToThirdModule(data: any) {
    return new Promise<string>((resolve, reject) => {
            resolve(`Dados ${JSON.stringify(data)} recebidos pelo Terceiro Módulo`);
    });
}
