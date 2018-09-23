import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../Entry';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {

  activeEntry : Entry;

  constructor(
    public entryService : EntryService
  ) { }

  ngOnInit() {
  }

  createEntry() {
    var entry = {};
    entry["created"] = new Date();
    this.entryService.addEntry(entry);
    this.selectEntry(entry);
  }

  selectEntry(entry) {
    console.log(entry);
    this.activeEntry = entry;
  }

}
