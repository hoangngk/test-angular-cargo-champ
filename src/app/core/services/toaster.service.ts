import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ToasterService {

    constructor(private ts: ToasterService) {
    }

    success(msg:string) {
        this.ts.success(msg);
    }

    eroor(msg:string) {
        this.ts.eroor(msg);
    }

    info(msg:string) {
        this.ts.info(msg);
    }

}
