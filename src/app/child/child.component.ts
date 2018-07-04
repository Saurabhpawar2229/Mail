import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public MyEvent = new EventEmitter();
  

  public Reply()
  {
    this.MyEvent.emit('From Child:Hii');
  }
  constructor() { }

  ngOnInit() {
  }

}
