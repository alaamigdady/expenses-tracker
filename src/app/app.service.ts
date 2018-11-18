import { Injectable ,Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class appService {
   
   private categorySource = new BehaviorSubject<string>('default')
   currentCategory = this.categorySource.asObservable()
    

   constructor(private http:HttpClient) {}

   addLog(params){
   	return this.http.post('/saveLog',params)
   }

   changeCategory(category:string){
   this.categorySource.next(category)
   }

   getMonth(val,cal){
   return this.http.get('/getLog/'+cal+'/'+val)
   }

   
}