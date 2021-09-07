import { Component, OnInit } from '@angular/core';
import { photos } from '../photos';

import { ActivatedRoute } from '@angular/router';

import { Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
photos = photos;
photo;
comment;
message = '';
likeCounter = 0;
commentArr = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.photo = photos[+params.get('photosId')];
    });
  }

  @Output() addComment = function(): void {
    this.commentArr.push(this.message);
    this.message = '';
    // alert(this.commentArr);
  };

  @Output() like = function(): void {
    this.likeCounter++;
    // alert(this.commentArr);
  };

}
