import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rankExtension } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  //Default extensions
  public extensionsArray: rankExtension[] = [
    {
      id: 1,
      extName: 'LIVE SASS COMPILER',
      extAuthor: 'Ritwick Dey',
      extDescription:
        'A VSCode Extension that help you to compile/transpile your SASS/SCSS files to CSS files at realtime with live browser reload.',
      extRating: 5,
      extDownloads: 1282606,
      extImg: 'live_sass_compiler.png',
      extEmail: 'ritwick.dey@getMaxListeners.com',
      extFav: true,
    },
    {
      id: 2,
      extName: 'BRACKET PAIR COLORIZER',
      extAuthor: 'CoenraadS',
      extDescription:
        'This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.',
      extRating: 5,
      extDownloads: 5153123,
      extImg: 'bracket_pair_colorizer.png',
      extEmail: 'coen.rad51@hotmail.com',
      extFav: false,
    },
    {
      id: 3,
      extName: 'DEBUGGER FOR CHROME',
      extAuthor: 'Microsoft',
      extDescription:
        'A VS Code extension to debug your JavaScript code in the Google Chrome browser, or other targets that support the Chrome DevTools Protocol.',
      extRating: 4,
      extDownloads: 7810197,
      extImg: 'debugger_chrome.png',
      extEmail: 'micro.soft@ms.com',
      extFav: true,
    },
    {
      id: 4,
      extName: 'PRETTIER CODE FORMATER',
      extAuthor: 'Prettier',
      extDescription:
        'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
      extRating: 4,
      extDownloads: 12392694,
      extImg: 'prettier.png',
      extEmail: 'prettier@prettier.com',
      extFav: false,
    },
  ];

  constructor() {}

  public getrankedExtensions() {
    return this.extensionsArray;
  }

  public getExtensionsById(id: number): rankExtension {
    return this.extensionsArray.filter((extension) => extension.id == +id)[0];
  }

  public getNumberExtensions(): number {
    return this.extensionsArray.length;
  }

  public addNewExtension(extension: rankExtension): Observable<any> {
    const extensionObservable = new Observable((observer) => {
      setTimeout(() => {
        const lastId = this.extensionsArray.length;
        extension.id = lastId + 1;
        this.extensionsArray.push(extension);
        observer.next(true);
      }, 2000);
    });
    return extensionObservable;
  }

  /*
  public addNewExtension(extension: rankExtension): void {
    setTimeout(() => {
      const lastId = this.extensionsArray.length;
      extension.id = lastId + 1;
      this.extensionsArray.push(extension);
    }, 2000);
  }*/
}
