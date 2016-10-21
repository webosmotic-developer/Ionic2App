import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Contacts } from 'ionic-native';

import { ContactPage } from '../contacts/contact/contact';

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})

export class ContactsPage {

    public contactToBeFound:string = '';
    public contactsFound:any = [];
    public isSearch:boolean = false;

    constructor(public nav:NavController) {

    }

    fnSave() {
        this.nav.push(ContactPage);
    }

    fnFind(val:string) {
        Contacts.find(['*'], {filter: val}).then((contacts) => {
            this.contactsFound = contacts;
        });

        if (this.contactsFound.length == 0) {
            this.contactsFound.push({displayName: 'No Contacts found'});
        }
        this.isSearch = true;
    }

    ionViewWillEnter() {
        this.fnFind(this.contactToBeFound);
    }
}
