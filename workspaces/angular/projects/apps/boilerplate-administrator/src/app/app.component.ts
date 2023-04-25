import { Component, OnInit } from '@angular/core';
import { ToastService } from '@bruno-bombonate/ngx-toast';
import { SeoService } from '@bruno-bombonate/ngx-seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly seoService: SeoService,
    private readonly toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.seoService.init('Boilerplate');
    setTimeout(() => {
      this.toastService.success('Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.');
    }, 1500);
  }

}
