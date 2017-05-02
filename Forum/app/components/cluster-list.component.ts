import { Component, OnInit } from "@angular/core";
import { Cluster } from "../models/cluster.model";
import { ClustersService } from "../services/clusters.service";

@Component({
    selector: 'cluster-list',
    templateUrl: './app/components/cluster-list.component.html',
    styleUrls: ['./app/components/cluster-list.component.css'],
})
export class ClusterListComponent implements OnInit {
    clusters: Cluster[];

    constructor(private clustersService: ClustersService) {

    }

    ngOnInit() {
        this.clustersService.getClusters().subscribe(
            clusters => {
                this.clusters = clusters;
                console.log(clusters);
            }
        );
    }


}