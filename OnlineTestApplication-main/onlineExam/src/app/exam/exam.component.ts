import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  correctAns:number=0;
  incorrectAns:number=0;
  submitted:boolean=false;
  flag:boolean=false;
  Attempt:string[]=[];


  constructor() { }

  ngOnInit(): void {
    
  }
  questions=[
    {"question":"1000+1= _________","op":["10001","1001","1000","100001"],"ans":"1001","attempt":null},
    {"question":"1000-500 = _________","op":["500","501","502","503"],"ans":"500","attempt":null},
    {"question":"5+5 = _________","op":["10","55","25","50"],"ans":"10","attempt":null},
    {"question":"10 + 90 = _________","op":["1090","19","90","100"],"ans":"100","attempt":null},
    {"question":"30+ 70 = _________","op":["100","101","10","10"],"ans":"100","attempt":null},
    {"question":"1000-1= _________","op":["999","1001","1000","100001"],"ans":"999","attempt":null},
    {"question":"1000/1= _________","op":["100","1001","1000","101"],"ans":"1000","attempt":null},
    {"question":"1000*1= _________","op":["100","1001","1000","10001"],"ans":"1000","attempt":null},
    {"question":"100+1= _________","op":["101","1001","1000","100001"],"ans":"101","attempt":null},
    {"question":"10+1= _________","op":["11","1001","1000","101"],"ans":"11","attempt":null}
    ]

  
  checkAnswer(selected:NgForm){
    
    console.log(selected.value);
    for(let x=0;x<10;x++){
      
    let ans1=this.questions[x].ans;
    this.questions[x].attempt=selected.value[x+1];
    if(selected.value[x+1]==ans1){
      
      this.correctAns++;
    }
    else{
      this.incorrectAns++;
    }
  }
  this.flag=true;

  }

  Review(){
    this.submitted=true;
  }

}

