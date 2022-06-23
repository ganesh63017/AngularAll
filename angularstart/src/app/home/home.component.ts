import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: any = [];
  changeButton = 'Add Todo';
  inputValue = '';
  changeData = 10;
  day = new Date();
  apiData: any = [];

  @ViewChild('i') pRef?: ElementRef;

  constructor(private userData: UserdataService) {
    console.log(userData.userData());
  }

  ngOnInit(): void {
    this.userData.getApiData().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    const list = JSON.parse(localStorage.getItem('list')!) || [];
    this.todoList = list;
    setTimeout(() => {
      this.pRef?.nativeElement.focus();
    });
    console.log(this.apiData);
  }

  updateData(value: any) {
    this.changeData = this.changeData + value;
  }

  addTodo() {
    if (this.inputValue !== '') {
      if (this.changeButton == 'Update Todo') {
        this.changeButton = 'Add Todo';
        const list = JSON.parse(localStorage.getItem('list')!) || [];
        const id = localStorage.getItem('editId');
        const updatedList =
          list.length &&
          list.map((each: any) => {
            if (each.id === id) {
              console.log('first');
              return { ...each, value: this.inputValue };
            }
            return each;
          });
        localStorage.setItem('list', JSON.stringify(updatedList));
        this.todoList = JSON.parse(localStorage.getItem('list')!) || [];
        this.changeButton = 'Add Todo';
      } else {
        let id = Math.random().toString(36).substring(0, 24);

        this.todoList = [...this.todoList, { id, value: this.inputValue }];
        console.log(this.todoList);
        localStorage.setItem('list', JSON.stringify(this.todoList));
      }
    }
    this.inputValue = '';
  }
  removeTodo(id: string) {
    if (id !== '') {
      const filteredList = this.todoList.filter((each: any) => each.id !== id);
      this.todoList = filteredList;
      localStorage.setItem('list', JSON.stringify(filteredList));
    }
  }

  editTodo(id: string) {
    this.changeButton = 'Update Todo';
    localStorage.setItem('editId', id);
    this.pRef?.nativeElement.focus();
  }
}
