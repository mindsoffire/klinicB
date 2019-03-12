import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule, appComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DataService } from "./data/data";
import { AuthService } from "./services/auth.service";

// import * as mobileStorage from 'nativescript-localstorage';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, ...appComponents
    ],
    providers: [
        DataService,
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
