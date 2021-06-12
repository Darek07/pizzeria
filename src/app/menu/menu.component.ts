import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KoszComponent } from '../kosz/kosz.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private pizzas:Pizza[];
  private item:number;
  private currentUrl:string;
  selectedPizza: FormGroup;

  constructor(private router:Router, private formBuild: FormBuilder, public dialog: MatDialog) {
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
        price: 9.50,
        photo: 'assets/images/pizza/pizza2.gif'
      },
      {
        name: 'Pizza3',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 11.20,
        photo: 'assets/images/pizza/pizza3.gif'
      },
      {
        name: 'Pizza4',
        ingredients: [ 'Italics', 'Mozzarella', 'Tomato paste' ],
        price: 17.30,
        photo: 'assets/images/pizza/pizza4.gif'
      },
      {
        name: 'Pizza5',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 16.00,
        photo: 'assets/images/pizza/pizza5.gif'
      },
      {
        name: 'Pizza6',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 12.90,
        photo: 'assets/images/pizza/pizza6.gif'
      },
      {
        name: 'Pizza7',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 7.50,
        photo: 'assets/images/pizza/pizza7.gif'
      },
      {
        name: 'Pizza8',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 20.50,
        photo: 'assets/images/pizza/pizza8.gif'
      },
      {
        name: 'Pizza9',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 16.50,
        photo: 'assets/images/pizza/pizza9.gif'
      },
      {
        name: 'Pizza10',
        ingredients: [ 'Pepper', 'Mozzarella', 'Tomato paste' ],
        price: 11.50,
        photo: 'assets/images/pizza/pizza10.gif'
      }
    ]
   }

  ngOnInit(): void { 
    this.currentUrl = this.router.url;
    this.selectedPizza = this.formBuild.group({
      selPizza: '',
      pricePizza: 0.0
    })
    console.log("OnInit");
  }

  onSubmit() {
    if (this.dialog.openDialogs.length) return;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.selectedPizza.get('pricePizza').value;

    this.dialog.open(KoszComponent, dialogConfig);
  }

  getPizza() {
    if (this.item >= this.pizzas.length) this.item = 0;
    if (this.currentUrl !== "/menu") {
      this.item = (this.item > 2 ? 0 : this.item);
    }
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

  selected(event: string) {
    this.pizzas.forEach((p: any) => {
      if (p.name == event) {
        this.selectedPizza.patchValue({ pricePizza : p.price });
      }
    });
  }

  get url() {
    return this.currentUrl !== '/menu';
  }
}

interface Pizza {
  readonly name:string;
  readonly ingredients:string[];
  readonly price:number;
  readonly photo:string;
}
