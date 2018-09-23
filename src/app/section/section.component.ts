import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../Section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section : Section;
  @Input() sections : Section[];

  constructor() { }

  ngOnInit() {
  }

  deleteSection() {
    this.sections.splice(this.sections.indexOf(this.section))
  }
}
