import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AffirmationListComponent} from './page/affirmation/affirmation-list.component';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {UserProfileComponent} from './page/user-profile/user-profile.component';
import {AuthComponent} from './auth/auth/auth.component';
import {AuthGuard} from './_guards/auth.guard';
import {UsersComponent} from './page/users/users.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AffirmationListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: AuthComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}