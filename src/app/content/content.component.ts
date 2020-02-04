import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  showInterests: boolean;
  showNotes: boolean;
  scrollPosition = 0;
  interestsText: string;
  selectedImage: string;
  iWORKOUTText = 'Working out is one of my favorite things to do. I really enjoy HIIT workouts, running (especially on chilly mornings), and spin classes. Working out is important to me because it helps me de-stress and relax.';
  iCodeText = 'I like to code. It\'s like getting to solve an endless supply of puzzles. There is always something new to learn, and it never gets old or boring.';
  yumText = 'Cooking is very important to me. It is a great creative outlet, and it\'s always a bonus to eat delicious food!';
  craftyText = 'I love crafting. I am very passionate about making holiday decorations and creating a cozy home that we love to be in.';
  catLadyText = 'Cats are the best. I have two that are full of fur and cuteness. Plus, they are very quirky, like me!';


  ngOnInit() {
    const instance = this;
    window.addEventListener('scroll', function(ev) {
      window.requestAnimationFrame(function() {
        instance.displayImages();
      });
    });

    setTimeout(() => this.showInterests = true, 2500);

  }

  displayImages() {
    const componentPosition = window.innerWidth <= 600 ?  document.getElementById('portfolioH2').offsetTop
      : document.getElementById('portfolioDiv').offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition
      && !document.getElementById('pictureLinks').children[0].children[0].classList.contains('load')) {
      const nodes = document.getElementById('pictureLinks').getElementsByTagName('div');
      for (let i = 0; i < nodes.length; i++) {
        const element = document.getElementById('pictureLinks').children[i].children[0];
        setTimeout(() => {
          element.className = 'picture-interests load';
        }, (150 + (i * 300)));
      }
    }
  }

  onImageClick(selection) {
    if (window.innerWidth > 600) {
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
    } else {
      // for (let i = 0; i < 5; i++) {
      //   const element = document.getElementById('pictureLinks').children[i];
      //   if (element.children[1]) {
      //     element.removeChild[1];
      //   }
      // }
      // if (!this.selectedImage === selection) {
      //   const node = document.createElement('div');
      //   node.className = 'interests-text-small';
      //   let textNode, i = 0;
      //   if (selection === 'iworkout') {
      //     textNode = document.createTextNode(this.iWORKOUTText);
      //   } else if (selection === 'iCode') {
      //     textNode = document.createTextNode(this.iCodeText);
      //     i = 1;
      //   } else if (selection === 'yum') {
      //     textNode = document.createTextNode(this.yumText);
      //     i = 2;
      //   } else if (selection === 'crafty') {
      //     textNode = document.createTextNode(this.craftyText);
      //     i = 3;
      //   } else {
      //     textNode = document.createTextNode(this.catLadyText);
      //     i = 4;
      //   }
      //   node.appendChild(textNode);
      //   document.getElementById('pictureLinks').children[i].appendChild(node);
      //   document.getElementById('pictureLinks').children[i].children[0].className = 'interests-pic-small picture-interests load';
      // }
      this.selectedImage = selection;
    }
  }
}
