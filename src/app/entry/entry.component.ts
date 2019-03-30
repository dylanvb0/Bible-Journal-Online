import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../Entry';
import { EntryService } from '../entry.service';
import { Section } from '../Section';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() entry : Entry;
  @Input() public activeEntry : Entry;

  constructor(
    public entryService : EntryService
  ) { }

  ngOnInit() {
  }

  closeEntry() {
    this.activeEntry = null;
  }

  addSection(){
    var s = new Section();
    console.log(s);
    if(!this.entry.sections) this.entry.sections = [];
    this.entry.sections.push(s);
  }

  saveEntry(){
    if(this.entry != null){
      this.entry.updated = new Date();
      var newSections = [];
      this.entry.sections.forEach((section) => {
        newSections.push({"title":section.title, "text":section.text});
      });
      this.entry.sections = newSections;
      this.entryService.saveEntry(this.entry);
    }
  }

  deleteEntry() {
    this.entryService.deleteEntry(this.entry.id);
  }

  isEntryActive(){
    if(typeof this.entry === 'undefined' || this.entry === null) return false;
    if(typeof this.activeEntry === 'undefined' || this.activeEntry === null) return false;
    if(this.entry.id === this.activeEntry.id){
      if(typeof this.entry.sections === 'undefined' || this.entry.sections.length === 0){
        this.addSection();
      }
      return true;
    };
    return false;
  }
}
