import { Controller } from "@hotwired/stimulus"
const create_website_animation = new createWebsiteAnimation.createWebsiteAnimation("funky_button1");

export default class extends Controller {
  static targets = [ "name", "output" ]

  draw() {
    event.stopImmediatePropagation();
    console.log("draw");
    create_website_animation.draw();
  }

  empty() {
    event.stopImmediatePropagation();
    console.log("empty");
    create_website_animation.empty_container();
  }

}
