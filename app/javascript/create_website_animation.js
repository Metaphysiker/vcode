export function createWebsiteAnimation(container_name) {
  this.container_name = container_name;
  this.container_class = "." + container_name;
  this.empty_container = function(){
    $(this.container_class).empty();
  },
  this.draw = function() {

    this.empty_container();

    let margin = {top: 50, right: 50, bottom: 50, left: 50};
    let width = $(this.container_class).width();
    //var height = (this.data.length * 100) + 100 - margin.top - margin.bottom;
    let height = width;

    let box = {width: width/1.5, height: width/1.5};

    // append the svg object to the body of the page
     const svg = d3.select(this.container_class)
       .append("svg")
       .attr("width", width)
       .attr("height", height)
       .append("g")
       .attr("transform", `translate(${width/2}, ${margin.top})`);


    const website_screen = svg.append('g')
                            .attr("transform", `translate(${-box.width/2}, ${0})`);

    website_screen.append('rect')
      .attr("x", 0)
      .attr("y", 0)
      .attr('width', 0)
      .attr('height', 0)
      //.attr('stroke', 'black')
      .attr('fill', 'white')
      .transition()
        .duration(1000)
        .attr('width', box.width)
        .attr('height', box.height)
        .attr("fill", "#69a3b2")
        .on("end", function() {append_navigation_bar()});

      function append_navigation_bar() {

        website_screen.append('rect')
          .attr("x", 0)
          .attr("y", 0)
          .attr('width', 0)
          .attr('height', 0)
          .attr('fill', 'gray')
          .transition()
            .duration(1000)
            .attr('width', box.width/100 * 100)
            .attr('height', box.height/100 * 7.5)
            .on("end", function() {append_toggler_icon();});

      }

      function append_toggler_icon() {

        website_screen.append('rect')
          .attr("x", box.width/100 * 90)
          .attr("y", box.height/100 * 1.5)
          .attr('width', 0)
          .attr('height', 0)
          .attr('fill', 'white')
          .transition()
            .duration(1000)
            .attr('width', box.width/100 * 5)
            .attr('height', box.height/100 * 0.75);

        website_screen.append('rect')
          .attr("x", box.width/100 * 90)
          .attr("y", box.height/100 * 3.5)
          .attr('width', 0)
          .attr('height', 0)
          .attr('fill', 'white')
          .transition()
            .duration(1500)
            .attr('width', box.width/100 * 5)
            .attr('height', box.height/100 * 0.75);


      website_screen.append('rect')
        .attr("x", box.width/100 * 90)
        .attr("y", box.height/100 * 5.5)
        .attr('width', 0)
        .attr('height', 0)
        .attr('fill', 'white')
        .transition()
          .duration(2000)
          .attr('width', box.width/100 * 5)
          .attr('height', box.height/100 * 0.75)
          .on("end", function() {append_boxes(); append_button(); append_title();});;
      }


        function append_title() {
          website_screen.append("text")
            .attr("font-weight", 900)
            .style('fill', 'white')
            .attr("x", 0)
            .attr("y", 0)
            .text("Meine Webseite")
            .transition()
                  .duration(1000)
                  .attr("x", box.width/100 * 10)
                  .attr("y", box.height/100 * 15)
                  .on("end", function() {append_boxes(); append_button();});
        }

        function append_boxes() {
          website_screen.append('rect')
            .attr("x", box.width/100 * 10)
            .attr("y", box.height/100 * 20)
            .attr('width', 0)
            .attr('height', 0)
            .attr("rx", 10)
            .attr('fill', 'white')
            .transition()
              .duration(1000)
              .attr('width', box.width/100 * 80)
              .attr('height', box.height/100 * 15);

          website_screen.append('rect')
            .attr("x", box.width/100 * 10)
            .attr("y", box.height/100 * 40)
            .attr('width', 0)
            .attr('height', 0)
            .attr("rx", 10)
            .attr('fill', 'white')
            .transition()
              .duration(1000)
              .attr('width', box.width/100 * 80)
              .attr('height', box.height/100 * 15);
        }

        function append_button() {
          website_screen.append('rect')
            .attr("x", box.width/100 * 50)
            .attr("y", box.height/100 * 80)
            .attr('width', 0)
            .attr('height', 0)
            .attr("rx", 10)
            .attr('fill', 'white')
            .transition()
              .duration(1000)
              .attr('width', box.width/100 * 20)
              .attr('height', box.height/100 * 10);
        }

        function promise_template(){
          return new Promise(function(resolve, reject)
          {
            $(".chat-buttons-parent").empty();
            resolve();
          });
        }

        function rotate_svg() {
          website_screen.transition()
            .duration(750)
            .attrTween('transform', function() {
              return d3.interpolateString(`translate(${-box.width/2}, ${0}) rotate(0)`,
                                          `translate(${-box.width/2}, ${25}) rotate(-10, ${box.width/2}, ${box.height/2})`);
                      });

        }



  };

}
