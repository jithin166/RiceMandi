import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface QA{
  s:boolean,
  i:number,
  q:string,
  a:string
}


@Injectable({
  providedIn: 'root'
})
export class QasService {

  
  Questions1:QA[]=[
    {
      s:false,
      i:0,
      q: "How do I place my order?",
      a: "Register with us and then you will be able to shop for item of your choice from site."
    },
    {
      s:false,
      i:1,
      q: "How do I pay? Do you offer CoD?",
      a: "You can pay online via Credit / Debit Cards and Net Banking. We also accept Cash on Delivery where our customer care person will verify the order with you over phone and deliver it."
    },
    {
      s:false,
      i:2,
      q: "How long will it take for me to receive an order placed for any items?",
      a: "You can expect delivery of orders within 24 hours. In an unavoidable circumstances, we deliver within 5 business days but usually we are keen on next day delivery."
    },
    {
      s:false,
      i:3,
      q: "If I receive a damaged item or an incorrect one, will I get a replacement?",
      a: "Yes, check our Returns Policy page for details."
    },
    {
      s:false,
      i:4,
      q: "Can I cancel my order?",
      a: "Now it’s not possible to cancel an order through online but call our customer care and provide reasons and we will cancel the order and refund the amount."
    },
    {
      s:false,
      i:5,
      q: "Are there any hidden costs applicable?",
      a: "No, there are no hidden costs; you only pay for the items and applicable shipping charges if any."
    },
    {
      s:false,
      i:6,
      q: "Is it safe to shop here?",
      a: "YES. We use the Secure Sockets Layer (SSL) encryption on banking transaction. To make online purchases from us, you must use an SSL-enabled browser. Doing this protects the confidentiality of your personal and credit card information while it’s transmitted over the Internet."
    }
  ]


  constructor() { }

 
  getqanda():Observable<QA[]>{
    return of(this.Questions1);
  }
}
