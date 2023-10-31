import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  twitterText = "Hello @BondSarah_Bond @XboxP3! %23SaveLittleMonster Appeal from Brazil: Xbox Series S saw a sudden price hike due to high taxes, risking your image and community support. Please reconsider. We await your response. Sincerely, BONDE DO XBOX community at bondedoxbox.vercel.app!";
  twitterLink = `https://twitter.com/intent/tweet?text=${this.twitterText}!`;

  showModal = false;
  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
