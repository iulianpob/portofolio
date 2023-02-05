import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {DialogModule} from 'primeng/dialog';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlertContactComponent } from './alert-contact/alert-contact.component'; 
import { AppRoutingModule } from './app.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import {TabViewModule} from 'primeng/tabview';
import { AccordionComponent } from './about/accordion/accordion.component';
import {TimelineModule} from 'primeng/timeline';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileTestimonialComponent } from './about/mobile-testimonial/mobile-testimonial.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent, HomeComponent, AboutComponent, AlertContactComponent, ProjectsComponent, ProjectCardComponent, AccordionComponent, FooterComponent, ContactComponent, PopupComponent, MobileTestimonialComponent],
  imports: [BrowserModule, TabViewModule,DialogModule, AppRoutingModule, TimelineModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
