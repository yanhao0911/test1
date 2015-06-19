/**
 * yanhao
 * 2015-06-19
 */
(function() {
	
	var voronoiData = {
		initFn: function() {
			voronoiData.chartFn();
		},

		chartFn: function() {
			var width = 960,
				height = 500,
				circleRadius = 180,
				squareCount = 200,
				squareSize = 78,
				speed = .08;

			var square = d3.selectAll("g")
				.append("g")
				.attr("transform", function(d, i) {
					return i ? "rotate(180)" : null;
				})
				.selectAll("rect")
				.data(d3.range(squareCount))
				.enter().append("rect")
				.datum(function(i) {
					return i / squareCount;
				})
				.attr({
					width: squareSize,
					height: squareSize,
					x: -squareSize / 2,
					y: -squareSize / 2
				});

			d3.timer(function(elapsed) {
				square
					.attr("transform", function(t) {
						return "rotate(" + (t * 360) + ")translate(0," + circleRadius + ")rotate(" + (t * 360 + elapsed * speed) + ")";
					});
			});

		}
	};

	voronoiData.initFn();
})();