import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls:['./category.component.css']
  
})
export class CategoryComponent {
	

constructor(private app: appService) {
 }

 setType(val){
 	this.app.changeCategory(val)
 }

 										 
}
