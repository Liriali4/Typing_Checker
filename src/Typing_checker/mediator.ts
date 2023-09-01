
type MediatorData<T> = {
    data: any;
};

enum TypesEnum {
    First = 'FirstType',
    Second = 'SecondType',
}

export async function MediatorAsync(data: any) {
    const response = await sendToModule(data);
    console.log('estou no mediatorasync', response);
    return response;
}

async function sendToModule(data: any) {
    
    const typeOfData = inferTypeFromData(data);

    const sms = `sendToModule ${data}`
    return sms
}

function inferTypeFromData(data: any): TypesEnum {

    if (data.hasOwnProperty('name') && data.hasOwnProperty('age')) {
        return TypesEnum.First;
    } else if (data.hasOwnProperty('color') && data.hasOwnProperty('Weight')) {
        return TypesEnum.Second;
    } else {
        throw new Error('Não foi possível inferir o tipo com base nos dados.');
    }
}


/* 
*/