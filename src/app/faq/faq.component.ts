import { Component, OnInit } from '@angular/core';
import {QasService,QA} from '../qas.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {


  Questions1:QA[];
  sizeQ:number;

  showAllset=false;

  
  constructor(private qasService:QasService) { }

  ngOnInit(): void {
    this.getqanda();
  }

  toggleShown(shown:boolean,id){
    this.Questions1[id].s=shown;
  }

  getqanda():void{
    this.qasService.getqanda()
    .subscribe(Q1=>this.Questions1=Q1);

  }

  showAll(){
    this.sizeQ=this.Questions1.length;
    if(!this.showAllset){
      for(var i=0;i<this.sizeQ;i++){
        this.Questions1[i].s=true;
      }
      this.showAllset=true;
      return;
    }
    else{
      for(var i=0;i<this.sizeQ;i++){
        this.Questions1[i].s=false;
      }
      this.showAllset=false;
      return;
    }
  }




}
