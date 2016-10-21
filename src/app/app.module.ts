import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { DialPage } from '../pages/dial/dial';
import { SettingsPage } from '../pages/settings/settings';
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactPage } from '../pages/contacts/contact/contact';

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        CameraPage,
        DialPage,
        SettingsPage,
        ContactsPage,
        ContactPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        CameraPage,
        DialPage,
        SettingsPage,
        ContactsPage,
        ContactPage
    ],
    providers: []
})
export class AppModule {
}
