import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  ed:any=[];
  eid:number=this.at.snapshot.params['id'];
  constructor(public cs:CrudService,public at:ActivatedRoute ){}

  ngOnInit(){
    this.getSingleuser(this.eid);
  }

  getSingleuser(uid:number){
    this.cs.singleuser(uid).subscribe(res=>{
      this.ed=res;
    });
  };

  res:string="";
  update(eid:number,data:any){
    this.cs.edituser(eid,data).subscribe();
    this.res="UPDATED SUCCESFULLY";
  };

  }


