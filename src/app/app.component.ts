import { Component } from '@angular/core';
import{MainService } from './main.service';
import{SharedService} from './Shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwc-shopping-cart';
  constructor(private mainService: MainService,private sharedService: SharedService ) { }
  products: any = [];
  ngOnInit() {
    // Get all product list on component init
    this.mainService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

}
