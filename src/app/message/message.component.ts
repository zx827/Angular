import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // 定义一个私有的变量Messages,是一个数组(Array),类型是Message,初始化为空
  private Messages: Array <Message> = []; // 消息集合
  constructor(private router: Router, private http: HttpClient) { }
  // ngOnInit用于在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
  ngOnInit() {
    this.Messages.push(new Message('1000', '张一', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张二', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张三', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张四', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张五', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张六', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.Messages.push(new Message('1000', '张七', '今天晚上一块吃饭', '../../assets/girl.png', '2017-11-29'));
    this.getData();
  }
  // 点击事件处理函数
  showDetail(msg) {
    console.log(msg);
    this.router.navigate(['/detail', msg]);
  }
  // 获取本地数据
  getData() {
    this.http.get('../../assets/myData.json').subscribe(function (args) {
        console.log(args);
    }, function (args) {
        console.log(args);
    });
  }
}
// 消息对象
class Message {
  // constructor构造函数 id，title，content，src, time都是参数
  constructor (
    public id: string , // 公共的id号，是string类型
    public title: string, // 公共的title，是string类型
    public content: string, // 公共的内容，是string类型
    public src: string, // 公共的图片，是string类型
    public time: string // 公共的时间，是string类型
  ) {
  }
}
