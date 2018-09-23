export class Section {
  title : string;
  text : string;

  public constructor() {
    this.title = "";
    this.text = "";
  }

  public toObject() {
    var obj = {};
    obj["title"] = this.title;
    obj["text"] = this.text;
    return obj;
  }
}
