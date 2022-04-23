import { Controller } from "@hotwired/stimulus"
//const create_website_animation = new createWebsiteAnimation.createWebsiteAnimation("funky_button1");
const create_website_animation = new createWebsiteAnimation.createWebsiteAnimation();

export default class extends Controller {
  static targets = [ "name", "output" ]

  static values = {
    //url: { type: String, default: '/bill' },
    //interval: { type: Number, default: 5 },
    visible: Boolean, default: true
  }

  connect() {
    this.draw();
  }

  draw() {
    //event.stopImmediatePropagation();
    console.log("draw");
    create_website_animation.draw(this.outputTarget);
  }

  empty() {
    event.stopImmediatePropagation();
    //this.outputTarget.innerHTML = "";
    $(this.outputTarget).empty();
  }

  toggle() {
    event.stopImmediatePropagation();
    console.log("toggle");
    if(this.visible == false) {
      this.draw();
      this.visible = true
    } else {
      this.empty();
      this.visible = false
    }

  }

}
