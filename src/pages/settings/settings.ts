import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AppVersion, Brightness } from 'ionic-native';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})

export class SettingsPage {

    public appVersion:any = {};
    public brightnessValue:number = 1;

    constructor(public navCtrl:NavController) {

        let self = this;

        AppVersion.getAppName().then(function (name) {
            self.appVersion.appName = name;
        });

        AppVersion.getVersionCode().then(function (version) {
            self.appVersion.versionCode = version
        });
    }

    fnChangeBrightness() {
        Brightness.setBrightness(this.brightnessValue);
    }
}
