import { Component } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-case-converter',
  templateUrl: './case-converter.component.html',
  styleUrls: ['./case-converter.component.scss']
})
export class CaseConverterComponent {

  title = 'Online Case Convertor';
  subtitle =
    'We provide free online Case Convertor which will help many developers in their daily work.';
  constructor(private seo: SEOService) {}

  input=''
  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  onChange(event:any){
    this.input = event.target.value;
  }


  lowerCase(){
    this.input = this.input.toLowerCase();
    return this.input
  }

  upperCase(){
    this.input = this.input.toUpperCase();
    return this.input
  }

  sentenceCase(){
    const arr = this.input.toLowerCase().split(".");
      let text = arr.map(e=>{
         if(e[0]!=" "){
            e = e.charAt(0).toUpperCase()+e.slice(1)
          }else{
            let a = e.split(" ");
            let flag=true;
            for(let i=0;i<a.length;i++){
              if(a[i]!="" && flag){
                flag=false;
                a[i] = a[i].charAt(0).toUpperCase()+a[i].slice(1)
              } 
            }
            e = a.join(" ")
          }
          return e;
      }).join(".")
      this.input = text
      return text;
    }

    capitalizedCase(){
      const arr = this.input.toLowerCase().split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      this.input = arr.join(" ")
      return this.input
    }

    alternatingCase(){
      const ch = this.input.toUpperCase().split("");
      for(let i=0;i<ch.length;i +=2){
        ch[i] = ch[i].toLowerCase()
      }
      this.input = ch.join("")
      return this.input
    }

    titleCase(){
      const arr = this.input.toLowerCase().split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      this.input = arr.join(" ")
      return this.input
    }

    inverseCase(){
      const arr = this.input.split("");
      for (var i = 0; i < arr.length; i++) {
        let ch = arr[i]
        if(ch === arr[i].toUpperCase()){
          arr[i] = arr[i].toLowerCase()
        }else if(ch === arr[i].toLowerCase()){
          arr[i] = arr[i].toUpperCase()
        }
      }
      this.input = arr.join("")
      return this.input
    }
  }

