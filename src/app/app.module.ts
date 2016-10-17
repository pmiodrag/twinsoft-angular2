import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';
import { TodolistModule } from './todolist/todolist.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HomeModule,
        TeamModule,
        TodolistModule,
        SharedModule.forRoot(),
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    schemas:   [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
