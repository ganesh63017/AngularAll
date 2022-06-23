import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
      // let id = params.get('id')
      // console.log({id})
    });
  }

  inp: any;
  @Input() items: any;
  @Input() n: any;
  @Output() updateData = new EventEmitter();

  passData(val: any) {
    this.updateData.emit(val);
  }

  ngOnChanges(): void {
    console.log(this.items);
    console.log(this.n);
  }
}
