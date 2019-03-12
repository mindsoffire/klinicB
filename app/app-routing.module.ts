import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { PluginComponent } from "./plugin/plugin.component";


const routes: Routes = [
    { path: "", redirectTo: "/plugin", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "detail/:id", component: DetailComponent },
    { path: "plugin", component: PluginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
export const appComponents = [
    HomeComponent, DetailComponent,
    PluginComponent
]
