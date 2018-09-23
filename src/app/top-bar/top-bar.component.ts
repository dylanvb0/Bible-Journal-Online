import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    public auth : AuthService,
    public entryService : EntryService
  ) { }

  ngOnInit() {
  }

  signInGoogle(){
    this.auth.signInWithGoogle();
  }

  signOut(){
    this.auth.logout();
  }

  filterEntries(text) {
    console.log(text);
    this.entryService.searchText = text;
  }
}
