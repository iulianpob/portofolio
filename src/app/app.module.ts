import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlertContactComponent } from './alert-contact/alert-contact.component'; 
import { AppRoutingModule } from './app.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent, HomeComponent, AboutComponent, AlertContactComponent, ProjectsComponent, ProjectCardComponent],
  imports: [BrowserModule, AccordionModule,DialogModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
