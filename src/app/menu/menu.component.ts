import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private pizzas:Pizza[];
  private item:number;
  private currentUrl:string;

  constructor(private router:Router) {
    this.item = 0;
    this.pizzas = [
      {
      name: 'Pizza1',
      ingredients: [ 'Pepperoni', 'Mozzarella', 'Tomato paste' ],
      price: 13.50,
      photo: 'assets/images/pizza/pizza1.gif'
      },
      {
        name: 'Pizza2',
        ingredients: [ 'Pepp', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza2.gif'
      },
      {
        name: 'Pizza3',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza3.gif'
      },
      {
        name: 'Pizza4',
        ingredients: [ 'Italics', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza4.gif'
      },
      {
        name: 'Pizza5',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza5.gif'
      },
      {
        name: 'Pizza6',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza6.gif'
      },
      {
        name: 'Pizza7',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza7.gif'
      },
      {
        name: 'Pizza8',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza8.gif'
      },
      {
        name: 'Pizza9',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza9.gif'
      },
      {
        name: 'Pizza10',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 13.50,
        photo: 'assets/images/pizza/pizza10.gif'
      }
    ]
   }

  ngOnInit(): void { this.currentUrl = this.router.url; }

  getPizza() {
    if (this.item >= this.pizzas.length) this.item = 0;
    return [this.pizzas[this.item++], this.pizzas[(this.item++ == this.pizzas.length) ? 0 : this.item - 1]]
  }

  isAll() {
    let array = [];
    if (this.currentUrl === "/menu") {
      array = new Array((this.pizzas.length % 2 + this.pizzas.length) / 2);
    }
    else { array = new Array(2); }

    return array;
  }
}

interface Pizza {
  name:string;
  ingredients:string[];
  price:number;
  photo:string;
}
