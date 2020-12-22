import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { nameasnumberValidator } from '../shared/validatorfun';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  profileForm:FormGroup;

 


  ngOnInit(): void {
    this.profileForm=new FormGroup({
      yourname: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        nameasnumberValidator
      ]),
      youremail: new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      yourmessage: new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }

  get yourname(){ return this.profileForm.get('yourname');}

  get youremail(){ return this.profileForm.get('youremail');}


}