import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ExpressService {

	private API = 'http://localhost:3000';

  private errorMsg = new BehaviorSubject<string>('no error');

  err= this.errorMsg.asObservable();

  	constructor(private http: HttpClient) { }  

  	login(username: string, password: string) {
        
    }

    getCV(): Observable<any> {
   		return this.http.get<any>(`${this.API}/mattia`)
                      .catch(this.errorHandler); 
     }

    errorHandler(error: HttpErrorResponse){
      this.errorMsg.next(error.message || "Server Error");
      return Observable.throw(error.message || "Server Error")
    }

    getError(): BehaviorSubject<string>{
      return this.errorMsg;
    }


}
