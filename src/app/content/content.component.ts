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
        this.interestsText = 'Working out is the best. I really enjoy HIIT workouts, running, and spin classes.';
        document.getElementById('arrow-up').style.marginLeft = '8%';
      } else if (selection === 'iCode') {
        this.interestsText = 'I like to code. It like getting to solve an endless supply of puzzles.';
        document.getElementById('arrow-up').style.marginLeft = '28%';
      } else if (selection === 'yum') {
        this.interestsText = 'Cooking is very important to me. It is a great creative outlet, and it always a bonus to eat delicious food!';
        document.getElementById('arrow-up').style.marginLeft = '48%';
      } else if (selection === 'crafty') {
        this.interestsText = 'I love crafting. I am very passionate about creating holiday decorations and creating a cozy home.';
        document.getElementById('arrow-up').style.marginLeft = '68%';
      } else {
        this.interestsText = 'Cats are the best. I have two and they are very quirky, like me!';
        document.getElementById('arrow-up').style.marginLeft = '88%';
      }
    }, 100);
  }
}
