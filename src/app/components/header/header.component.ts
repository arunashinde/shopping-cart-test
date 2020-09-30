import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  private cartProductCount: number =0;
  ngOnInit() {
    this.sharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }

}
