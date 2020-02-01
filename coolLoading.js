paper.install(window)          
paper.setup('myCanvas')
// The amount of segment points we want to create:
var amount = 5;

// The maximum height of the wave:
var height = 60;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: 'red',
	strokeWidth: 10,
	strokeCap: 'round'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	path.add(new Point(i / amount * view.size.width, view.size.hieght));
}

// Select the path, so we can see how it is constructed:
path.selected = false;
const secondsOfSwirl = 10;
const lengthMultiplier = 60;
const angleMultiplier = 100;
view.onFrame =  function (event) {
	// Loop through the segments of the path:

	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];
		let temp = new paper.Point({
                            length: event.time * lengthMultiplier % (lengthMultiplier * secondsOfSwirl) ,
                            angle: angleMultiplier * event.time % (angleMultiplier * secondsOfSwirl) * i
                        });
		// Change the y position of the segment point:
        segment.point.x = temp.x + view.size.width / 2;
        segment.point.y = temp.y + view.size.height / 2;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	path.smooth();
}
view.draw()