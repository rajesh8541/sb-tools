import { Injectable } from  '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({providedIn:  'root'})

export class ApiTestingService {
    constructor(private http: HttpClient) { }
    urlData:any

    getUrl(data:any){  
        this.urlData=data;
    }

    getUsers(): Observable<any>{
        return this.http.get<any>(this.urlData);
        }

    postUsers(postData:any): Observable<any> {
        return this.http.post<any>(this.urlData,postData);
        }
    putUsers(id:any,updateData:any):Observable<any>{
        this.urlData=this.urlData+id;
        return this.http.put<any>(this.urlData+'/',updateData);
        }

    deleteUsers(id:any){
        return this.http.delete(this.urlData,id);
        }

}
