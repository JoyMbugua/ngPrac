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
  constructor() { }

  ngOnInit(): void {
  }

}
