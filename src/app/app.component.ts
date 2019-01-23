import { AppPage } from './../../e2e/src/app.po';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }
  ];

  public tabPages = [
    {
      title: 'Tab 1',
      url: '/tabs/tab1',
      icon: 'flash'
    },
    {
      title: 'Tab 2',
      url: '/tabs/tab2',
      icon: 'apps'
    },
    {
      title: 'Tab 3',
      url: '/tabs/tab3',
      icon: 'send'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen, 
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
