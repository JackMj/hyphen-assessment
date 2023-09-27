import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = [{
    name: 'Coke', id:1, img: './assets/img/coke.png'
  }, {
    name: 'Fanta', id:2, img: './assets/img/coke.png'
  },{
    name: 'Sprite', id:3, img: './assets/img/coke.png'
  },{
    name: 'Coke zero', id:4, img: './assets/img/coke.png'
  },{
    name: 'Twist', id:5, img: './assets/img/coke.png'
  },{
    name: 'Schweps', id:6, img: './assets/img/coke.png'
  },{
    name: 'Stoney Ginger', id:7, img: '../assets/img/coke.png'
  },{
    name: 'Fanta grapes', id:8, img: '../assets/img/coke.png'
  },{
    name: 'Coke', id:9, img: '../assets/img/coke.png'
  },{
    name: 'Fanta pine', id:10, img: '../assets/img/coke.png'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
