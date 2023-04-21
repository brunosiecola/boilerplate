import { Component, OnInit } from '@angular/core';
import { SeoService } from '@bruno-bombonate/ngx-seo';
import { BoilerplateToastService } from 'boilerplate-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly boilerplateToastService: BoilerplateToastService,
    private readonly seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.init('Boilerplate');
    setTimeout(() => {
      this.boilerplateToastService.success('Lorem ipsum dolor sit amet.');
    }, 1500);
  }

}
