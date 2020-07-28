export class Section {
  title: string;
  iconUrl: string;
  actionLink: string;
  items: SectionItem[];
  description?: string;
}

export class SectionItem {
  title: string;
  actionLink: string;
  imageUrl?: string;
  description?: string;

  constructor(title: string, actionLink: string, imageUrl?: string, description?: string) {
    this.title = title;
    this.actionLink = actionLink;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
