import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppMaincontentComponent } from './components/app-maincontent/app-maincontent.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioAlumnosComponent } from './formulario-alumnos/formulario-alumnos.component';



@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent, AppMaincontentComponent, DirectivesComponent, FormularioAlumnosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
