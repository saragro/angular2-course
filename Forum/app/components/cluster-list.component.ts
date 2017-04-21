import { Component } from "@angular/core";
import { Cluster } from "../models/cluster.model"

@Component({
    selector: 'cluster-list',
    templateUrl: './app/components/cluster-list.component.html',
})
export class ClusterListComponent {
    clusters: Cluster[] = [
        { id: 1, header: 'q1', createDate: new Date(), updateDate: new Date(), createUser: 'abc', messagesCount: 1, rank: 8 },
        { id: 2, header: 'q2', createDate: new Date(), updateDate: new Date(), createUser: 'asdf', messagesCount: 5, rank: 0 },
        { id: 3, header: 'q3', createDate: new Date(), updateDate: new Date(), createUser: 'sdf', messagesCount: 1, rank: 7 },
        { id: 4, header: 'q4', createDate: new Date(), updateDate: new Date(), createUser: 'gfhf', messagesCount: 4, rank: -5 },
        { id: 5, header: 'q5', createDate: new Date(), updateDate: new Date(), createUser: 'erte', messagesCount: 13, rank: 1 },
    ];

}