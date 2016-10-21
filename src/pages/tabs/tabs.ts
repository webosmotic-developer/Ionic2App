import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { CameraPage } from '../camera/camera';
import { DialPage } from '../dial/dial';
import { SettingsPage } from '../settings/settings';
import { ContactsPage } from '../contacts/contacts';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root:any = CameraPage;
    tab2Root:any = DialPage;
    tab3Root:any = ContactsPage;
    tab4Root:any = SettingsPage;
    tab5Root:any;

    isExitBtnShow:boolean = false;

    constructor(private platform:Platform) {
        if (this.platform.is('android')) {
            this.isExitBtnShow = true;
        }
    }

    fnExit(){
        this.platform.exitApp();
    }
}
