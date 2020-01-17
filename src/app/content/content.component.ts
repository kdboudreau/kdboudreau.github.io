import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

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
        document.getElementById('arrow-up').style.marginLeft = '6%';
      } else if (selection === 'crafty') {
        this.interestsText = 'I love crafting. I am very passionate about creating holiday decorations and creating a cozy home.';
        document.getElementById('arrow-up').style.marginLeft = '26%';
      } else if (selection === 'yum') {
        this.interestsText = 'Cooking is very important to me. It is a great creative outlet, and it always a bonus to eat delicious food!';
        document.getElementById('arrow-up').style.marginLeft = '46%';
      } else if (selection === 'iCode') {
        this.interestsText = 'I like to code. It like getting to solve an endless supply of puzzles.';
        document.getElementById('arrow-up').style.marginLeft = '66%';
      } else {
        this.interestsText = 'Cats are the best. I have two and they are very quirky, like me!';
        document.getElementById('arrow-up').style.marginLeft = '86%';
      }
    }, 100);
  }
}
