import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  private selection:Pizza;
  opt:boolean = true;

  constructor() {
    this.selection = {
      dough: [ 
        { item: "Cienkie", photo: 'assets/images/skladniki/ciasto.gif', price: 0.50 }, 
        { item: "Grube", photo: 'assets/images/skladniki/ciasto.gif', price: 0.50 } ],
      sauce: [ 
        { item: "Pomidorowy", photo: 'assets/images/skladniki/sos_pom.gif', price: 0.20 }, 
        { item: "Czosnkowy", photo: 'assets/images/circle.png', price: 0.20 }, 
        { item: "Bez", photo: 'assets/images/circle.png', price: 0.00 } ],
      ingredients: [ 
        { item: "Ananas", photo: 'assets/images/skladniki/ananas.gif', price: 2.00 }, 
        { item: "Bazylia", photo: 'assets/images/skladniki/bazylia.gif', price: 2.50 },
        { item: "Cebula", photo: 'assets/images/skladniki/cebula.gif', price: 4.50 },
        { item: "Krewetki", photo: 'assets/images/skladniki/krewetki.gif', price: 10.00 },
        { item: "Kukurydza", photo: 'assets/images/skladniki/kukurydza.gif', price: 7.10 },
        { item: "Mozarella", photo: 'assets/images/skladniki/mozarella.gif', price: 8.10 },
        { item: "Oliwki", photo: 'assets/images/skladniki/oliwki.gif', price: 7.70 },
        { item: "Papryka", photo: 'assets/images/skladniki/papryka.gif', price: 3.40 },
        { item: "Pieczarki", photo: 'assets/images/skladniki/pieczarki.gif', price: 7.70 },
        { item: "Pomidory", photo: 'assets/images/skladniki/pomidory.gif', price: 7.70 },
        { item: "Rukola", photo: 'assets/images/skladniki/rukola.gif', price: 7.70 },
        { item: "Salami", photo: 'assets/images/skladniki/salami.gif', price: 7.70 },
        { item: "Ser", photo: 'assets/images/skladniki/ser.gif', price: 7.70 }, ]
    }
  }

  ngOnInit(): void {
  }

  getItemsFours(comp:string) {
    let arr = [];
    let fours = [];
    let select = [];

    switch (comp) {
      case 'dough':
        select = this.selection.dough;
        break;
      case 'sauce':
        select = this.selection.sauce;
        break;
      case 'ingredients':
        select = this.selection.ingredients;
        break;
      default:
        return [];
    }

    for (let i = 1; i <= select.length; i++) {
      fours.push(select[i - 1]);
      if (i % 3 === 0) {
        arr.push(fours);
        fours = [];
      }
    }
    if (fours.length > 0) {
      arr.push(fours);
    }

    return arr;
  }

  changeOpt() {
    this.opt = !this.opt;
  }
}

interface Pizza {
  readonly dough:Item[];
  readonly sauce:Item[];
  readonly ingredients:Item[];
}

interface Item {
  readonly item: string;
  readonly photo: string;
  readonly price:number;
}
