import { Component } from '@angular/core';

// 元数据装饰器 给Angular看的。Angular叫装饰器。js叫注释，ts叫注解
@Component({
  // 三个元数据
  selector: 'app-root', // 定义个选择器
  templateUrl: './app.component.html', // 模板，定义了要展示的一些内容,定义了Angular是如何来渲染数据的
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  test() {
    console.log('run');
    $('.box').hide();
  }
}
