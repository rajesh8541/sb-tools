import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sb-textarea',
  templateUrl: './sb-textarea.component.html',
  styleUrls: ['./sb-textarea.component.scss'],
})
export class SbTextareaComponent implements OnInit {
  
  @Input() type = '';
  @Input('parentData') input='';  
  @Output() event =new EventEmitter<string>();
  childInput = '';
  onChange(event:any)
  {
    this.childInput=event.target.value;
    this.event.emit(this.childInput);
  }
  ngOnInit(): void {}

}

 