import { Section } from './Section';

export class Entry {
  id : number;
  created : Date;
  updated : Date;
  sections : Section[];
  uid : string;

  public toObject() {
    var obj = {};
    obj["id"] = this.id;
    obj["created"] = this.created;
    obj["updated"] = this.updated;
    obj["sections"] = [];
    for(var i = 0; i < this.sections.length; i++){
      obj["sections"].push(this.sections[i].toObject());
    }
    return obj;
  }

}
