/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'SUMMARY',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.DashboardComponent,
    },
    {
        path: 'tickets/reports',
        data: {
            title: 'Dashboard Tickets',
            breadcrumbs: [
                {
                    text: 'Tickets',
                    link: '/dashboard',
                },
                {
                    text: 'REPORTS',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.ReportsComponent,
    },
    {
        path: 'tickets/details',
        data: {
            title: 'Dashboard Tickets',
            breadcrumbs: [
                {
                    text: 'Tickets',
                    link: '/dashboard',
                },
                {
                    text: 'DETAIL',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.DetailsComponent,
    },
    {
        path: 'tickets/new-ticket',
        data: {
            title: 'Dashboard Tickets',
            breadcrumbs: [
                {
                    text: 'Tickets',
                    link: '/dashboard',
                },
                {
                    text: 'NEW TICKET',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.NewTicketComponent,
    },
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
