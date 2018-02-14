import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  slides = [
    {
      title: "Welcome to the Azor!",
      description: "Time to experience a totally new way to endorse your favorite brands!",
      image: "assets/img/slide/ica-slidebox-img-1.png",
    },
    {
      title: "What is Azor?",
      description: "An awesome member's only mobile platform for the world's top influencers.",
      image: "assets/img/slide/ica-slidebox-img-2.png",
    },
    {
      title: "How does Azor work?",
      description: "We bring the world's top brands to your doorstep.  Giving you the ability to endorse your favorite brands wherever you go!",
      image: "assets/img/slide/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  btnClick= function () {
    this.navCtrl.setRoot('ProfileFourPage');
  };
}
