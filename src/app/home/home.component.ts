import { Component, OnInit } from '@angular/core';
import { BgsliderService } from '../bgslider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageObject: Array<object>;
  
  constructor(private bgsliderservice:BgsliderService) { }

  ngOnInit(): void {
    this.getbgsliders();
  }

  getbgsliders():void{
    this.bgsliderservice.getbgsliders()
    .subscribe(imageObject1=> this.imageObject=imageObject1);
  }

}
