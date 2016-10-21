import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import { Contacts } from 'ionic-native';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})

export class ContactPage {

    public newcontact:any = {
        displayName: '',
        nickname: '',
        phnumber: '',
        phtype: ''
    };

    constructor(public navCtrl:NavController) {
    }

    fnAddContact(newct) {
        /*var contact = Contacts.create();
        contact.displayName = newct.displayName;
        contact.nickname = newct.nickname;

        let contactfield = new ContactField();
        contactfield.type = newct.phtype;
        contactfield.value = newct.phnumber;
        contactfield.pref = true;

        var numbersection = [];
        numbersection.push(contactfield);
        contact.phoneNumbers = numbersection;

        contact.save().then((contact) => {
            alert('saved');
        }, (error) => {
            alert(error);
        })*/

    }

}
