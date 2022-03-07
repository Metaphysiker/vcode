import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
    console.log(typeof this.outputTarget);
  }

  startAnimation() {
    var funky_button = new d3Funky.funkyButton("funky_button1", {pitch: "pitch", cta: "cta"});
    funky_button.draw_chart();

    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
    console.log(this.outputTarget);
  }

}
