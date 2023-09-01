import { UseGenericStore } from "../State/dispatcher";

type MediatorData = {
    type: TypesEnum;
    data: any;
};

export enum TypesEnum {
    First = 'FirstType',
    Second = 'SecondType',
}

export async function MediatorAsync(obj: any) {
    const response = await sendToModule(obj);
    console.log('estou no mediatorasync', response);
    return response;
}

async function sendToModule({ type, data }: MediatorData) {
    const taskStore = UseGenericStore<MediatorData>()();

    taskStore.dispatch({ type, data });

    const typeToFunctionMap: Record<TypesEnum, (data: any) => Promise<string>> = {
        [TypesEnum.First]: sendToFirstModule,
        [TypesEnum.Second]: sendToSecondModule,
    };

    const selectedFunction = typeToFunctionMap[type];

    if (selectedFunction) {
        try {
            return await selectedFunction(data);
        } catch (error) {
            throw new Error(`Erro ao chamar função do módulo: ${error}`);
        }
    } else {
        throw new Error('Tipo de objeto não reconhecido.');
    }
}

export async function sendToFirstModule(data: any) {
    return new Promise<string>((resolve, reject) => {
        if (data.name && data.age !== undefined) {
            resolve(`Dados ${JSON.stringify(data)} recebidos pelo primeiro Módulo`);
        } else {
            reject(new Error('Dados inválidos para o primeiro módulo.'));
        }
    });
}

export async function sendToSecondModule(data: any) {
    return new Promise<string>((resolve, reject) => {
        if (data.color && data.Weight !== undefined) {
            resolve(`Dados ${JSON.stringify(data)} recebidos pelo Segundo Módulo`);
        } else {
            reject(new Error('Dados inválidos para o segundo módulo.'));
        }
    });
}
