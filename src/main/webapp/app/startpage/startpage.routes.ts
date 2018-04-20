import { Routes, Route } from '@angular/router';
import { UserRouteAccessService } from '../shared';

import { StartpageComponent } from './startpage.component';
export const startpageRoute: Route = {
    path: 'startpage',
    component: StartpageComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    },
    canActivate: [UserRouteAccessService]
};


const STARTPAGE_ROUTES = [
    startpageRoute,
];

export const startpageState: Routes = [{
    path: '',
    children: STARTPAGE_ROUTES
}];
