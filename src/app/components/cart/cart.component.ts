import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartItems;
  private totalAmmount;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getProducts().subscribe(data => {
      this.cartItems = data;

      this.totalAmmount = this.sharedService.getTotalPrice();
    });
  }
  
  // Remove item from cart list
  removeItemFromCart(productId) {
 
    this.sharedService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.sharedService.emptyCart();
  }

}
