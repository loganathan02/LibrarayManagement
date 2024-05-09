import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {

  ulist:any=[];

  constructor(public cs:CrudService){}

  ngOnInit(){
    this.fetchalluser();
  }

  fetchalluser()
  {
    this.cs.listuser().subscribe(res=>{
      this.ulist =res;
    });
  }
  del(eid:number){
    this.cs.deleteuser(eid).subscribe(res =>{
      this.fetchalluser();      
    });
    
  }
}
