import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../Entry';
import { AuthService } from '../auth.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {

  activeEntry : Entry;
  importingEntries : string;

  constructor(
    public entryService : EntryService,
    public authService : AuthService
  ) { }

  ngOnInit() {
  }

  createEntry() {
    var entry = {};
    entry["created"] = new Date();
    this.entryService.addEntry(entry);
    this.selectEntry(entry);
  }

  exportEntries() {
    this.entryService.entries.subscribe(entries => {
      console.log(entries);
      entries.map(entry => {
        entry.uid = this.authService.userDetails.uid;
      })
      console.log(entries);
      // const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
      // const header = Object.keys(entries[0]);
      // let csv = entries.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
      // csv.unshift(header.join(','));
      // let file = JSON.stringify(entries);
      this.entryService.saveEntries(entries);
      // var blob = new Blob([file], {type: 'text/json' })
      // saveAs(blob, "myFile.json");
    })
  }

  importEntries() {
    console.log(this.importingEntries);
    var obj = JSON.parse(this.importingEntries);
    console.log(obj);
    this.entryService.saveEntries(obj);
  }

  selectEntry(entry) {
    console.log(entry);
    this.activeEntry = entry;
  }

}
