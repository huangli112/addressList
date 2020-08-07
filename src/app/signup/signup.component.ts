import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //
  signupForm = {
    email: '',
    password: ''
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  signup() {
    // 1.表单验证
    // 2.获取表单数据
    // 3.发起http请求
    // 4.根据响应结果做数据交互处理
    const formData = this.signupForm
    //向服务器发送请求
    this.http.post('http://localhost:3000/users', FormData).toPromise().then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
      if (err.status == 409) {
        window.alert("邮箱已被占用")
      }
    })
    console.log('按钮被点击了')

  }
}
