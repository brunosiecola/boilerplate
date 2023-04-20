import { Component, OnInit } from '@angular/core';
import { BoilerplateToastService } from 'boilerplate-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly boilerplateToastService: BoilerplateToastService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.boilerplateToastService.success('Lorem ipsum dolor sit amet.');
      console.log(1);
    }, 1500);
  }

}
