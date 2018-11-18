import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { appService } from './app.service';

import { AddComponent } from './add.component';
import { CategoryComponent } from './category.component';
import { AppComponent } from './app.component';
import { TrackComponent } from './track.component';

const appRoutes: Routes = [
   {path: 'category', component: CategoryComponent},
   {path: '', component: AddComponent},
   {path: 'track', component: TrackComponent}


 
];

@NgModule({
  declarations: [
    AddComponent,CategoryComponent,AppComponent,TrackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [appService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
