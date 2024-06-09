import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu';
  total: number = 0;
  qty: number = 0;
  constructor() {

  }
  foodmenu = [
    { id: 1, name: "دجاج", price: 30, description: "دجاج مشوي على الفحم", img: "/assets/images/cheken1.jpg" },
    { id: 2, name: "دجاج", price: 30, description: "دجاج شواية ", img: "/assets/images/cheken.jpg" },
    { id: 3, name: "ايدام", price: 20, description: "ايدام خضار مشكل", img: "/assets/images/edam1.jpg" },
    { id: 4, name: "ايدام", price: 20, description: "ايدام  بالدجاج على الفرن", img: "/assets/images/edam.jpg" }
  ]
  productname = "";
  find(product: any[]) {
    return product.filter(item => item.name.toLowerCase().includes(this.productname.toLowerCase()));
  }
  sum(event: any, price: any) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price
      this.qty += 1
    } else {
      this.total -= price
      this.qty -= 1
    }
    console.log(isChecked);
    console.log(price);
  }
  receivefromtext(e: any) {
    console.log(e);
  }
  receive() {
    console.log("welcome");
  }
}
