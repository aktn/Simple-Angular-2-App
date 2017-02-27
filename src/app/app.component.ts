import { Component } from '@angular/core';

export class Cat{
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <h2>{{cat.name}} details!</h2>
  <div><label>id: </label>{{cat.id}}</div>
  <div><label>name: </label>{{cat.name}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="cat.name" placeholder="cat's name">
  </div>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Lovely Cats!';

  cat:Cat = {
    id: 1,
    name: 'Mr.Bunny'
  };
}



