import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', // 定义个选择器
  templateUrl: './product.component.html', // 模板，定义了要展示的一些内容,定义了Angular是如何来渲染数据的
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
