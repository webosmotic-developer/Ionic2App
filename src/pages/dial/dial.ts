import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CallNumber } from 'ionic-native';

@Component({
    selector: 'page-dial',
    templateUrl: 'dial.html'
})

export class DialPage {

    public mobileNo:number = null;

    constructor(public navCtrl:NavController) {
    }

    fnCallNumber() {
        CallNumber.callNumber(this.mobileNo.toString(), true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }

}
