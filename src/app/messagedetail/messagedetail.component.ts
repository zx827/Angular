import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  // 定义一个变量是私有的，类型是任意保存接受的数据
  // private msgId: any;
  private title: any;
  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.msgId = this.acRoute.snapshot.params['id'];
    // console.log(this.msgId);
    this.title = this.acRoute.snapshot.params['title'];
    console.log(this.title);
  }

}
