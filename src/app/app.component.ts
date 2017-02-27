import { Component } from '@angular/core';
import { Cat } from './cat';

const CATS: Cat[] = [
  {id: 5, name: 'Nyo Nyo'},
  {id: 6, name: 'Ebony'},
  {id: 7, name: 'Wille'}
  ];

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  
  <h2>My Cats</h2>
  <ul class="cats">
    <li *ngFor="let cat of cats" 
      [class.selected]="cat === selectedCat"
      (click)="onSelect(cat)">
      <span class="badge">{{ cat.id }}</span>{{ cat.name }}
    </li>  
  </ul>
  
  <my-cat-detail [cat]="selectedCat"></my-cat-detail>
  `,
  styles:[`
    .selected{
      background-color: #CFD8DC !important;
      color: white;
    }
    .cats{
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .cats li{
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      marign: .5em;
      padding: 3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .cats li.selected:hover{
      background-color: #BBD8DC !important;
      color: white;
    }
    .cats li:hover{
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .cats .text{
      position: relative;
      top: -3px;
    }
    .cats .badge{
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607088;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right; 8em;
      border-radius: 4px 0 0 4px;
    }
  `],

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Lovely Cats!';
  cats = CATS;
  selectedCat: Cat;

  onSelect(cat: Cat): void{
    this.selectedCat = cat;
  }
}



