export function createWebsiteAnimation(container_name) {
  this.container_name = container_name;
  this.container_class = "." + container_name;
  this.empty_container = function(){
    $(this.container_class).empty();
  },
  this.draw = function() {

    this.empty_container();

    var margin = {top: 50, right: 50, bottom: 50, left: 50};
    var width = $(this.container_class).width() - margin.left - margin.right;
    //var height = (this.data.length * 100) + 100 - margin.top - margin.bottom;
    let height = $(this.container_class).height();

    // append the svg object to the body of the page
     const svg = d3.select(this.container_class)
       .append("svg")
       .attr("width", width)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform", `translate(${width/2}, ${margin.top})`);

       svg.append('rect')
         .attr("x", -width/2)
         .attr("y", 0)
         .attr('width', width)
         .attr('height', height)
         .attr('stroke', 'black')
         .attr('fill', '#69a3b2');

  };

}
