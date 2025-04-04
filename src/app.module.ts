import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { AppMaincontentComponent } from './app/components/app-maincontent/app-maincontent.component';
import { DirectivesComponent } from './app/components/directives/directives.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent, AppMaincontentComponent, DirectivesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
