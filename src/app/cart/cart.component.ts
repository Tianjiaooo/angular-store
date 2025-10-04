import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items = this.service.getItems();
  constructor(private service: CartService, private formBuilder: FormBuilder) {} //构造函数相当于依赖注入，我们就可以直接用cartservice里面的方法了
  checkOutForm = this.formBuilder.group({ name: '', address: '' });
  onSubmit(): void {
    this.service.clearCard();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
