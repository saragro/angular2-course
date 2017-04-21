import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ForumComponent } from "../components/forum.component";
import { ClusterListComponent } from "../components/cluster-list.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [ForumComponent, ClusterListComponent],
    providers: [],
    bootstrap: [ForumComponent]
})
export class AppModule {
}