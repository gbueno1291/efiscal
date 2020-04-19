import { __decorate } from "tslib";
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';
// Notifications Routing
import { NotificationsRoutingModule } from './notifications-routing.module';
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NotificationsRoutingModule,
                AlertModule.forRoot(),
                ModalModule.forRoot()
            ],
            declarations: [
                AlertsComponent,
                BadgesComponent,
                ModalsComponent
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());
export { NotificationsModule };
//# sourceMappingURL=notifications.module.js.map