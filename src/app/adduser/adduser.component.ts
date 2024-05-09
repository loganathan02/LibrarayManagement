import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  user={name:'',email:'',phone:'',age:'',nobook:''}

  constructor(public cs:CrudService,public r:Router){}

  addpro(){
    this.cs.adduser(this.user).subscribe()
    this.r.navigate(['list']);
  }
}
