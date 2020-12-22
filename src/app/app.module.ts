import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';

import { NgImageSliderModule } from 'ng-image-slider';

import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'testimonials',
    component: TestimonialsComponent
  },
  {
    path:'blogs',
    component: BlogsComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent,
    BlogsComponent,

  ],
  imports: [
    NgImageSliderModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
