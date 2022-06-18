import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XyzComponent } from './xyz/xyz.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { YonetimComponent } from './yonetim/yonetim.component';

@NgModule({
  declarations: [
    XyzComponent,
    MainPageComponent,
    NavComponent,
    HomeComponent,
    MemberListComponent,
    ListsComponent,
    // MessagesComponent,
    YonetimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [XyzComponent]
})
export class AppModule { }
