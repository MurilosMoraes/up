import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Minha Conta',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Corridas',
      url: '/corridas',
      icon: 'reader'
    },

    {
      title: 'Pagamento',
      url: '/pagamento',
      icon: 'card'
    },

    {
      title: 'Seja Motorista',
      url: '/dirija',
      icon: 'car'
    },

    {
      title: 'Cupom de Desconto',
      url: '/cupom',
      icon: 'ticket'
    },

    {
      title: 'Termos de uso',
      url: '/termos',
      icon: 'receipt'
    },

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

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
