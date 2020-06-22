import { Inject, Injectable, Pipe, PipeTransform } from '@angular/core';
import * as EnumsTokens from './enums.tokens';

@Pipe({
    name: 'enumKey'
})

@Injectable()
export class EnumsKeyPipe implements PipeTransform {
    constructor(@Inject(EnumsTokens.NAMESPACE_NAME) private nameSpaceGlobal: string,
                @Inject(EnumsTokens.SEPARATOR_NAME) private separatorGlobal: string) {
    }

    transform(value: any, {dictName, currentEnum, nameSpace}) {
        const currentNameSpace = nameSpace ? nameSpace : this.nameSpaceGlobal;
        let resultKeyPath = '';
        const key = Object.keys(currentEnum).find(innerKey => currentEnum[innerKey] === value);
        if (currentEnum && key) {
            resultKeyPath =  currentEnum[key];
            // `${currentNameSpace}${this.separatorGlobal}${dictName}.${key}`
        }
        return resultKeyPath;
    }
}
