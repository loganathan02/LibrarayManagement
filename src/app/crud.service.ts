import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint="http://localhost:3000/user/";

  constructor(public cs:HttpClient) { }

  adduser(data:any)
  {
    return this.cs.post(this.endpoint,data);
  }
  listuser()
  {
    return this.cs.get(this.endpoint); 
  }
  edituser(id:number,data:any)
  {
    return this.cs.put(this.endpoint+id,data);
  }
 singleuser(id:number)
 {
  return this.cs.get(this.endpoint+id);
 }
 deleteuser(id:number)
 {
  return this.cs.delete(this.endpoint+id);
 }
}
