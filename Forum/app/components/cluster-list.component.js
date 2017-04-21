"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClusterListComponent = (function () {
    function ClusterListComponent() {
        this.clusters = [
            { id: 1, header: 'q1', createDate: new Date(), updateDate: new Date(), createUser: 'abc', messagesCount: 1, rank: 8 },
            { id: 2, header: 'q2', createDate: new Date(), updateDate: new Date(), createUser: 'asdf', messagesCount: 5, rank: 0 },
            { id: 3, header: 'q3', createDate: new Date(), updateDate: new Date(), createUser: 'sdf', messagesCount: 1, rank: 7 },
            { id: 4, header: 'q4', createDate: new Date(), updateDate: new Date(), createUser: 'gfhf', messagesCount: 4, rank: -5 },
            { id: 5, header: 'q5', createDate: new Date(), updateDate: new Date(), createUser: 'erte', messagesCount: 13, rank: 1 },
        ];
    }
    return ClusterListComponent;
}());
ClusterListComponent = __decorate([
    core_1.Component({
        selector: 'cluster-list',
        templateUrl: './app/components/cluster-list.component.html',
    })
], ClusterListComponent);
exports.ClusterListComponent = ClusterListComponent;
//# sourceMappingURL=cluster-list.component.js.map