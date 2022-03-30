import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private classApiUrl = "http://localhost:8080/class";

  constructor(private http: HttpClient) { }

  getClasses(){
    return this.http.get<any>(this.classApiUrl +'/getAllClasses');
  }
  addClass(data:any){
    return this.http.post(this.classApiUrl + '/addClass', data);
  }
  updateClass(id:number,data:any){
    return this.http.put(this.classApiUrl + `/updateClass/${id}`,data);
  }

  deleteClass(id:number){
    return this.http.delete(this.classApiUrl + `/deleteClass/${id}`);
  }
 
}
