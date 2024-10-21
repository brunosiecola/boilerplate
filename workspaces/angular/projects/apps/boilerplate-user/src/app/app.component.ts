import { Component, inject } from '@angular/core';
import { SeoService } from '@bruno-bombonate/ngx-seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private readonly seoService = inject(SeoService);

  public ngOnInit(): void {
    this.seoService.init('Boilerplate User');
  }

}
