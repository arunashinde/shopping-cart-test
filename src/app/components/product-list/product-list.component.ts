import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { SharedService } from '../../Shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any = [];
  private singleProduct;
  private isAdded;
  constructor(private sharedService: SharedService, private renderer: Renderer2, ) { }

  ngOnInit() {
    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);
    console.log('this.isAdded -> ', this.isAdded, this.products);

    this.sharedService.getProducts().subscribe((data) => {
      console.log(data);
    })


    this.sharedService.getProducts().subscribe(data => {

      if (data && data.length > 0) {

      } else {
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }

    });
  }
  // Add item in cart on Button click
  // ===============================

  addToCart(event, productId) {

    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.sharedService.addProductToCart(this.singleProduct[0]);
  }


}
