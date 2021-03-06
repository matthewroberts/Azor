import { Component } from '@angular/core';
import { MenuController, NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
  };

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }
}
