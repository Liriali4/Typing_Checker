export enum TypesEnum {
    First = 'FirstType',
    Second = 'SecondType',
    Third = 'third',
}

export function MediatorReceiver(obj: TypesEnum.First | TypesEnum.Second | TypesEnum.Third) {
    switch (obj) {
        case TypesEnum.First:
            return 'Primeiro módulo';
        case TypesEnum.Second:
            return 'Segundo módulo';
        case TypesEnum.Third:
            return 'Terceiro módulo';
        default:
            throw new Error('Tipo de objeto não reconhecido.');
    }
}

export async function MediatorAsync(obj: TypesEnum.First | TypesEnum.Second | TypesEnum.Third, data: any) {
    const moduleMessage = MediatorReceiver(obj); // Obter a mensagem do módulo correspondente
    const response = await sendToModule(obj, data); // Enviar os dados para o módulo correspondente
    return `Módulo: ${moduleMessage}, Resposta: ${response}`;
}

async function sendToModule(obj: TypesEnum.First | TypesEnum.Second | TypesEnum.Third, data: any) {
    return new Promise<string>((resolve, reject) => {
        // Simulação de envio para o módulo correspondente
        setTimeout(() => {
            resolve(`Dados ${data} recebidos pelo ${obj}`);
        }, 1000);
    });
}

/* type Resposta = any;

const moduloPrimeiroTipo = {
    processar: (obj: TypesEnum.First): Resposta => {
        // Lógica para processar o objeto do primeiro tipo
        return {};
    },
};

const moduloSegundoTipo = {
    processar: (obj: TypesEnum.Second): Resposta => {
        // Lógica para processar o objeto do segundo tipo
        return {};
    },
};

const moduloTerceiroTipo = {
    processar: (obj: TypesEnum.Third): Resposta => {
        // Lógica para processar o objeto do terceiro tipo
        return {};
    },
};


export function processarObjeto(obj: TypesEnum.First | TypesEnum.Second | TypesEnum.Third):
    Resposta {
    switch (obj) {
        case TypesEnum.First:
            return moduloPrimeiroTipo.processar(obj as TypesEnum.First);
        case TypesEnum.Second:
            return moduloSegundoTipo.processar(obj as TypesEnum.Second);
        case TypesEnum.Third:
            return moduloTerceiroTipo.processar(obj as TypesEnum.Third);
        default:
            throw new Error('Tipo de objeto não reconhecido.');
    }
}
 */