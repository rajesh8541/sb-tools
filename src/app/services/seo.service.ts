import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

const seoVariables = {
  author: 'Softobotics',
  image: 'https://www.softobotics.com/assets/img/logo.png',
};

const MetaDespMinLength = 110;
const MetaDespMaxLength = 160;

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(
    private title: Title,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta
  ) {}
  private setPageTitle(title = ''): void {
    // Have to add ... to prevent duplicated title and h1 issue
    this.title.setTitle(
      title.length > 60
        ? title.substring(0, 60) + '...'
        : title.length < 40
        ? title + ' - Softobotics Tools'
        : title
    );
  }

  private setMetaData(type: string, name: string, content: string): void {
    const metaData: any = { [type]: name, content };
    this.meta.updateTag(metaData);
  }

  public setSEO(title: string, description: string): void {
    description =
      description.length > MetaDespMaxLength
        ? description.substring(0, MetaDespMaxLength)
        : description.length < MetaDespMinLength
        ? description + ' - Softobotics Online Tools for developers'
        : description;
    this.setPageTitle(title);
    this.setMetaData('name', 'description', description);

    this.setMetaData('property', 'og:title', title);
    this.setMetaData('property', 'og:description', description);
    this.setMetaData('property', 'og:url', this.getURL());
    this.setMetaData(
      'property',
      'og:image',
      `${seoVariables.image}?v=${Date.now()}`
    );
    this.setMetaData('name', 'twitter:image', seoVariables.image);
    this.setMetaData('name', 'twitter:creator', seoVariables.author);
    this.setMetaData('name', 'twitter:site', this.getURL());
    this.setMetaData('name', 'twitter:title', title);
    this.setMetaData('name', 'twitter:description', description);

    this.createLinkForCanonicalURL();
  }

  private getURL(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.doc.URL;
    } else {
      return (environment.baseUrl + this.doc.URL) + (this.doc.URL !== '/' ? '/' : '');
    }
  }

  private createLinkForCanonicalURL(): void {
    if (this.doc.URL?.includes('https')) {
      const existingLink = this.doc.querySelector('link[rel="canonical"]');
      if (existingLink) {
        existingLink.setAttribute('href', this.getURL());
      } else {
        const newLink: HTMLLinkElement = this.doc.createElement('link');
        newLink.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(newLink);
        newLink.setAttribute('href', this.getURL());
      }
    }
  }
}
