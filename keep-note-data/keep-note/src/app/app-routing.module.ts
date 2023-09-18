import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NoteViewComponent } from "./note-view/note-view.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [ {
    path: "home",
    component:DashBoardComponent
},
{
    path: "note-detail/:id",
    component: NoteDetailComponent
},
{
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
},
{
    path: "**",
    component: PageNotFoundComponent
}]

 ;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }