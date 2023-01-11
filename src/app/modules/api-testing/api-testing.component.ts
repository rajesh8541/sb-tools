import { ApiTestingService } from './../../services/apitesting.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.scss']
})
export class ApiTestingComponent implements OnInit {
  form!: FormGroup;
  form1!: FormGroup;
  posts: any
  selectedOption: any;
  urlInput: any;
  postdata: any
  updatedataID = ''
  updatedata = { "id": this.updatedataID, "body": "Softobotics", "postId": 100, "user": { "id": 63, "username": "eburras1q" } };
  id: any


  constructor(private apitesting: ApiTestingService) { }

  ngOnInit() {
    this.form = new FormGroup({
      dataArray: new FormArray([new FormGroup({
        queryString: new FormControl(''),
        name: new FormControl('')
      })]),
    }),

      this.form1 = new FormGroup({
        dataArray1: new FormArray([new FormGroup({
          header: new FormControl(''),
          name: new FormControl('')
        })])
      });
  }

  get dataArray(): FormArray {
    return this.form.get('dataArray') as FormArray;
  }
  get dataArray1(): FormArray {
    return this.form1.get('dataArray1') as FormArray;
  }

  addInputQuery() {
    this.dataArray.push(new FormGroup({
      queryString: new FormControl(''),
      name: new FormControl('')

    }));
  }

  addInputHeader() {
    this.dataArray1.push(new FormGroup({
      header: new FormControl(''),
      name: new FormControl('')
    }));

  }
  removeTextQuery(index: any) {
    if (index > 0) {
      this.dataArray.removeAt(index);
    }
  }
  removeTextHeader(index: any) {
    if (index > 0) {
      this.dataArray1.removeAt(index);
    }
  }
  testApi() {
    window.location.reload();
  }

  selectMethod(value: string) {
    this.selectedOption = value;
  }

  getInput(value: any) {
    this.urlInput = value;
    this.apitesting.getUrl(value)
  }

  testMethod() {
    if (this.selectedOption == "0") {
      this.getMethod();
    }
    else if (this.selectedOption == "1") {
      this.postMethod();
    }
    else if (this.selectedOption == "2") {
      this.putMethod();
    }
    else if (this.selectedOption == "3") {
      this.deleteMethod();
    }
  }

  getMethod() {
    this.apitesting.getUsers().subscribe(
      (response) => { this.posts = JSON.parse(JSON.stringify(response)) },
      (error) => { console.log(error); });
  }

  postMethod() {
    this.apitesting.postUsers(this.postdata).subscribe(posts => {
    })
  }
  putMethod() {
    this.apitesting.putUsers(this.updatedataID, this.updatedata).subscribe(posts => {
    })

  }
  deleteMethod() {
    let index1 = this.urlInput.lastIndexOf("/");
    let index2 = this.urlInput.length;
    this.id = this.urlInput.substr(index1 + 1, index2);
    this.apitesting.deleteUsers(this.id).subscribe(data => { console.log(this.posts); });
  }

}
















