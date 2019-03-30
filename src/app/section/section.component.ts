import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Section } from '../Section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section : Section;
  @Input() sections : Section[];
  @ViewChild("title") titleField : ElementRef;

  constructor() { }

  ngOnInit() {
    this.titleField.nativeElement.focus();
  }

  deleteSection() {
    this.sections.splice(this.sections.indexOf(this.section))
  }
}
