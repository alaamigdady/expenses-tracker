import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls:['./track.component.css']
  
})
export class TrackComponent {
	category:string;
	subtotal:any;
constructor(private app: appService) {
 }

 ngOnInit(){
 this.app.currentCategory.subscribe(category => this.category = category)
 }

 getMonth(val){
 let cal = this.category;
 this.app.getMonth(val,cal).subscribe(data => 
 		{this.subtotal=data},(err)=>{console.log('error')})
 }

 
}

 										 

