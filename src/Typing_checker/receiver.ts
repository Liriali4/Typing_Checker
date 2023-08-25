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

    switch (typeOfData) {
        case TypesEnum.First:
            return await sendToFirstModule(data);
        case TypesEnum.Second:
            return await sendToSecondModule(data);
        case TypesEnum.Third:
            return await sendToThirdModule(data);
        default:
            throw new Error('Tipo de objeto não reconhecido.');
    }

}

/*

export async function sendToFirstModule(data: any) {
    // Implemente a lógica para processar os dados e gerar a mensagem   
    const generatedResponse = generateResponse(data);
    return generatedResponse;
}

function generateResponse(data: any): string {
    // Implemente a lógica para gerar a resposta com base nos dados
    return `Resposta gerada no Primeiro Módulo: ${JSON.stringify(data)}`;
}

*/

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
