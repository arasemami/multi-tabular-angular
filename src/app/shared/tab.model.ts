import { Type } from '@angular/core';

export class Tab {

    constructor(public tabName: string,
                public componentType: Type<any>,
                public inputs?: any,
                public outputs?: any) {  }
}
