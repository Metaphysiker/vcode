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

    let box = {width: width/2, height: width/2};

    // append the svg object to the body of the page
     const svg = d3.select(this.container_class)
       .append("svg")
       .attr("width", width)
       .attr("height", height)
       .append("g")
       .attr("transform", `translate(${width/2}, ${0})`);


    const website_screen = svg.append('g')
                            .attr("transform", `translate(${-box.width/2}, ${0})`);

    website_screen.append('rect')
      .attr("x", 0)
      .attr("y", 0)
      .attr('width', 0)
      .attr('height', 0)
      .attr("rx", 10)
      //.attr('stroke', 'black')
      .attr('fill', 'white')
      .transition()
        .duration(1000)
        .attr('width', box.width)
        .attr('height', box.height)
        .attr("fill", "#69a3b2")
        .on("end", function() {append_title()});

        function myFunction(p1) {
          console.log(p1)
        }

        function append_title() {
          website_screen.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text("Your Website")
            .transition()
                  .duration(1000)
                  .attr("x", box.width/10)
                  .attr("y", box.height/100 * 15)
                  .on("end", function() {append_boxes()});
        }

        function append_boxes() {
          website_screen.append('rect')
            .attr("x", box.width/100 * 10)
            .attr("y", box.height/100 * 20)
            .attr('width', box.width/100 * 80)
            .attr('height', box.height/100 * 15)
            .attr("rx", 10)
            .attr('fill', 'white');

          website_screen.append('rect')
            .attr("x", box.width/100 * 10)
            .attr("y", box.height/100 * 40)
            .attr('width', box.width/100 * 80)
            .attr('height', box.height/100 * 15)
            .attr("rx", 10)
            .attr('fill', 'white');
        }



  };

}
