	const bicycle = {
		bell: function() {
			return "Ring, ring! Watch out, please!";
		}
	}
	const door = {
		bell: function() {
			return "Ring, ring! Come here, please!";
		}
	}
	
	bicycle.bell(); // "Ring, ring! Watch out, please!"
	door.bell();    // "Ring, ring! Come here, please!"

    function ringTheBell(thing) {
		console.log(thing.bell());
	}
	
	ringTheBell(bicycle); // Ring, ring! Watch out, please!
	ringTheBell(door); // "Ring, ring! Come here, please!"