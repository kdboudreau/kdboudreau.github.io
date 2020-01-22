import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  showNotes: boolean;
  interestsText: string;
  selectedImage: string;
  iWORKOUTText = 'Working out is one of my favorite things to do. I really enjoy HIIT workouts, running (especially on chilly mornings), and spin classes. Working out is important to me because it helps me de-stress and relax.';
  iCodeText = 'I like to code. It\'s like getting to solve an endless supply of puzzles. There is always something new to learn, and it never gets old or boring.';
  yumText = 'Cooking is very important to me. It is a great creative outlet, and it\'s always a bonus to eat delicious food!';
  craftyText = 'I love crafting. I am very passionate about making holiday decorations and creating a cozy home that we love to be in.';
  catLadyText = 'Cats are the best. I have two that are full of fur and cuteness. Plus, they are very quirky, like me!';

  constructor() { }

  ngOnInit() {
  }

  onImageClick(selection) {
    if (this.showNotes === true && this.selectedImage === selection) {
      this.showNotes = false;
    } else {
      this.showNotes = true;
    }

    this.selectedImage = selection;
    setTimeout(() => {
      if (this.showNotes === false) {
        this.interestsText = '';
      } else if (selection === 'iworkout') {
        this.interestsText = this.iWORKOUTText;
        document.getElementById('arrow-up').style.marginLeft = '8%';
      } else if (selection === 'iCode') {
        this.interestsText = this.iCodeText;
        document.getElementById('arrow-up').style.marginLeft = '28%';
      } else if (selection === 'yum') {
        this.interestsText = this.yumText;
        document.getElementById('arrow-up').style.marginLeft = '48%';
      } else if (selection === 'crafty') {
        this.interestsText = this.craftyText;
        document.getElementById('arrow-up').style.marginLeft = '68%';
      } else {
        this.interestsText = this.catLadyText;
        document.getElementById('arrow-up').style.marginLeft = '88%';
      }
    }, 100);
  }
}
