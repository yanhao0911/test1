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

			var width = 1000,
				height = 500;

			var colors = [
				"rgb(197,27,125)",
				"rgb(222,119,174)",
				"rgb(241,182,218)",
				"rgb(80,80,80)",
				"rgb(100,100,100)",
				"rgb(50,50,50)",
				"rgb(184,225,134)",
				"rgb(127,188,65)",
				"rgb(77,146,33)"
			];

			var sites = d3.range(100).map(function(d) {
				return [Math.random() * width, Math.random() * height];
			});

			var voronoi = d3.geom.voronoi();

			var canvas = d3.select("#voronoi").append("canvas")
				.attr("width", width)
				.attr("height", height)
				.on("mousemove", function() {
					sites[0] = d3.mouse(this);
					redraw();
				});

			var context = canvas.node().getContext("2d");

			redraw();

			function redraw() {
				var cells = voronoi(sites);

				context.clearRect(0, 0, width, height);

				context.fillStyle = "yellow";
				draw(cells[0]);
				context.fill();

				for (var k = 0, l = colors.length; k < l; ++k) {
					context.fillStyle = colors[k];
					for (var i = 1, n = cells.length; i < n; ++i) {
						if (i % l === k && draw(cells[i])) context.fill();
					}
				}

				context.strokeStyle = "white";
				for (var i = 0, n = cells.length; i < n; ++i) {
					if (draw(cells[i])) context.stroke();
				}

				context.fillStyle = "black";
				for (var i = 1, n = sites.length, site; i < n; ++i) {
					site = sites[i];
					context.beginPath();
					context.arc(site[0], site[1], 1.5, 0, 2 * Math.PI, false);
					context.fill();
				}
			}

			function draw(cell) {
				if (cell) {
					context.beginPath();
					context.moveTo(cell[0][0], cell[0][1]);
					for (var j = 1, m = cell.length; j < m; ++j) {
						context.lineTo(cell[j][0], cell[j][1]);
					}
					context.closePath();
					return true;
				}
			}

		}
	};

	voronoiData.initFn();
})();