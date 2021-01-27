import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-list',
  template: `
    <p>
      input-button-list works!
      The title is {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-list.component.scss']
})
export class InputButtonListComponent implements OnInit {
  title='Hello world'

  changeTitle(newTitle: string){
    this.title = newTitle;
  }
  constructor() { 
    this.changeTitle('I love Angular');
  }

  ngOnInit(): void {
    this.title ='Angular rules!'
  }

}
