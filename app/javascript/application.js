// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import jQuery from 'jquery'
window.$ = jQuery;
import "bootstrap"
import * as d3 from "d3"
window.d3 = d3;
import * as d3Funky from "d3-funky"
window.d3Funky = d3Funky;
import * as createWebsiteAnimation from "create_website_animation"
window.createWebsiteAnimation = createWebsiteAnimation;
