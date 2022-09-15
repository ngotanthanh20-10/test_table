import { Component, OnInit } from '@angular/core';
import { ITableLayoutProps } from '../interfaces/table.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  titleTable: Array<string> = ['id', "name", "username", "email"]
  fakeData: any = [
    {id: 1, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
    {id: 2, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
    {id: 3, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
    {id: 4, name: "thanh", username: "thanhngo", email: ""},
    {id: 5, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
    {id: 6, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
    {id: 7, name: "thanh", username: "", email: "thanh@gmail.com"},
    {id: 8, name: "thanh", username: "thanhngo", email: "thanh@gmail.com"},
  ]
  propsState: ITableLayoutProps = {
    data: this.fakeData,
    param: {
      totalPages: 1,
      pageNumber: 1,
      pageSize: 1,
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
