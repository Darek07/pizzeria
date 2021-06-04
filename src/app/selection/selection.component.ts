import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  private selection:Pizza;
  opt:boolean = true;
  selectedPizza: FormGroup;
  selectedIngredient: boolean;
  result: boolean;

  constructor(private formBuild: FormBuilder) {
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
        { item: "Ser", photo: 'assets/images/skladniki/ser.gif', price: 7.70 } ]
    }
  }

  ngOnInit(): void {
    this.selectedPizza = this.formBuild.group({
      selectedDough: '',
      selectedSauce: '',
      selectedIngredients: this.formBuild.array([])
    });
  }

  onSubmit(selected: FormGroup) {
    console.log("Submit");
    // TODO
  }

  doughChange(dough: string) {
    this.result = true;
  }

  ingrChange(event: any) {
    this.result = true;
    const formIngr: FormArray = this.selectedPizza.get('selectedIngredients') as FormArray;
    
    if (event.target.checked) {
      formIngr.push(new FormControl(event.target.value));
    }
    else {
      let i: number = 0;

      formIngr.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formIngr.removeAt(i);
          return;
        }
      })
    }
  }

  getItemsFours(comp:string, index: number) {
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

    return arr[index];
  }
  getRows(comp: string){
    let length:number;
    let array = [];

    switch (comp) {
      case 'dough':
        length = this.selection.dough.length;
        break;
      case 'sauce':
        length = this.selection.sauce.length;
        break;
      case 'ingredients':
        length = this.selection.ingredients.length;
        break;
      default:
        return [];
    }

    length = ((length - length % 3) / 3) + (length % 3 === 0 ? 0 : 1);

    for (let i = 0; i < length; i++) {
      array.push(i);
    }

    return array;
  }

  getLen(arr: any) {
    return arr.length;
  }

  changeOpt() {
    this.opt = !this.opt;
  }

  get selected() {
    var sel = [];

    if (this.selectedPizza.get('selectedDough').value !== '') {
      sel.push({
        item: this.selectedPizza.get('selectedDough').value,
        price: 0
      });
      this.selection.dough.forEach((d: any) => {
        if (d.item == this.selectedPizza.get('selectedDough').value) {
          sel[sel.length - 1].price = d.price;
        }
      });
    }

    if (this.selectedPizza.get('selectedSauce').value !== '') {
      sel.push({
        item: this.selectedPizza.get('selectedSauce').value,
        price: 0
      });
      this.selection.sauce.forEach((d: any) => {
        if (d.item == this.selectedPizza.get('selectedSauce').value) {
          sel[sel.length - 1].price = d.price;
        }
      });
    }

    const formIngr: FormArray = this.selectedPizza.get('selectedIngredients') as FormArray;

    formIngr.controls.forEach((ctrl: FormControl) => {
      sel.push({
        item: ctrl.value,
        price: 0
      })

      this.selection.ingredients.forEach((d: any) => {
        if (d.item == ctrl.value) {
          sel[sel.length - 1].price = d.price;
        }
      });
    })

    return sel;
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
