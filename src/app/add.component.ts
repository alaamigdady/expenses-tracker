import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';
import {enableProdMode} from '@angular/core';
enableProdMode();
@Component({
  selector: 'add-root',
  templateUrl: './add.component.html',
  styleUrls:['./add.component.css']
  
})
export class AddComponent {
	type:any;
	amount:any;
	date:any;
	total:any;

constructor(private app: appService) {
 }

 add(){
 	this.app.addLog({"type":this.type,"amount":this.amount,"date":this.date}).subscribe(data => 
 		{this.total=data},(err)=>{console.log('error')})
 }

 
 											 
}
