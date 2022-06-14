import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { YonetimComponent } from './yonetim/yonetim.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "members", component: MemberListComponent},
  { path: "yonetim", component: YonetimComponent},
  { path: "lists", component: ListsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
