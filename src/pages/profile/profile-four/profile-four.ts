import { ToastService } from '../../../providers/util/toast.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-four',
  templateUrl: 'profile-four.html'
})
export class ProfileFourPage {

  following = false;
  user = {
    name: 'Marty McFly',
    profileImage: 'assets/img/avatar/marty-avatar.jpg',
    coverImage: 'assets/img/avatar/BTF-ProfileBG.jpg',
    occupation: 'Time Traveler',
    location: 'The Future',
    description: 'Fictional character and the main protagonist of the Back to the Future trilogy.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/imgs/pizza1.jpg',
      text: `Loving some pizza from the Hut! #pizzahut #pizza`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/imgs/pizza2.jpg',
      text: 'HMM Which one to devour first??? #pizzahut #pizza',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/imgs/pizza3.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Just hanging with @iamjamiefoxx and @channingtatum enjoying some awesome #pizzahut #pizza`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastService) { }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }

  follow() {
    this.following = !this.following;
    this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    this.toastCtrl.create('Like clicked');
  }

}
