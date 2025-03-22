import { Component } from '@angular/core';
import { students } from './interfaces/students';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  public pupil: students[] = [
    {
      name: 'lucia',
      surname: 'd agresrti',
      age: 25,
      inscription: true
    },
    {
      name: 'maria laura',
      surname: 'herrera',
      age: 48,
      inscription: false
    },
    {
      name: 'aldo',
      surname: 'zunino',
      age: 30,
      inscription: true
    }
  ];

}
