import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TeamRoutes } from './team/index';
import { TodolistRoutes } from './todolist/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TeamRoutes,
    ...TodolistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
