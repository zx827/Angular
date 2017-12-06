import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HeadComponent } from './head/head.component';
import { MessageComponent } from './message/message.component';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeadComponent,
    MessageComponent,
    MessagedetailComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    // 配置路由信息
    RouterModule.forRoot([
      {path: '', component: MessageComponent},
      {path: 'detail/:title', component: MessagedetailComponent},
      {path: '**', component: DefaultComponent}
    ]),
    // HttpModule // 已经失效了，用下面这个
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 主组件
})
export class AppModule {
}
