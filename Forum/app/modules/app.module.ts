import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ForumComponent } from "../components/forum.component";
import { ClusterListComponent } from "../components/cluster-list.component";
import { TabViewModule } from 'primeng/primeng';
import { ClustersService } from "../services/clusters.service";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule, TabViewModule, HttpModule],
    declarations: [ForumComponent, ClusterListComponent],
    providers: [ClustersService],
    bootstrap: [ForumComponent]
})
export class AppModule {
}