import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  constructor() { }
  clickMessage = '';

  keys = '';
  values = '';
  box2_values = '';
  box3_value = '';
  box4_value = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

//   onKey(event: any) { // without type info
//     this.keys += event.key + ' | ';
//     this.values += (<HTMLInputElement>event.target).value + ' | ';
//     // this.values += event.target.value + ' | ';
//   }
  onKey(value: string) {
    this.box2_values += event + ' | ';
  }
  buttonClick() {
    this.clickMessage = 'Button is clicked';
  }

  onEnter(value: string) { this.box3_value = value; }

  update(value: string) { this.box4_value = value; }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  removeHero() {
    this.heroes.pop();
  }

  ngOnInit() {
  }

}
