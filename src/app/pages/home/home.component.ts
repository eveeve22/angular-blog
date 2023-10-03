import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = ['Noticia'];

  addItem(newItem:string) {
    this.items.push(newItem);
  }
  constructor() { }

  OnChanges():void{

  }

  ngOnInit(): void {
  }


}
