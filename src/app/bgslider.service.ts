import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BgsliderService {

  imageObject: Array<object> = [{
    image: '../assets/rm1.jpg',
    thumbImage: '../assets/rm1.jpg',
    alt: 'alt of image',
    title: 'Images about our site'
  }, {
    image: '../assets/rm2.jpg',
    thumbImage: '../assets/rm2.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm3.jpg',
    thumbImage: '../assets/rm3.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm4.jpg',
    thumbImage: '../assets/rm4.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm5.jpg',
    thumbImage: '../assets/rm5.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm6.jpg',
    thumbImage: '../assets/rm6.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm7.jpg',
    thumbImage: '../assets/rm7.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  },{
    image: '../assets/rm8.jpg',
    thumbImage: '../assets/rm8.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm9.jpg',
    thumbImage: '../assets/rm9.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm10.jpg',
    thumbImage: '../assets/rm10.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }, {
    image: '../assets/rm11.jpg',
    thumbImage: '../assets/rm11.jpg',
    title: 'Images about our site',
    alt: 'Image alt'
  }
  ];


  constructor() { }

  getbgsliders():Observable<Array<object>>{
    return of(this.imageObject);
  }

}
