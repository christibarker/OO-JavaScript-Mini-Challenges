
class Album {
	constructor() {
		this.photos = [];
	}

	addPhoto(photo) {
		this.photos.push(photo);
	}

	photoList(list) {
		var list = '';
		for (var i = 0; i < this.photos.length; i++) {
			list = list + ' ' + this.photos[i].imgName;
		}
		return list;
	}
}
	class Photo {
		constructor(imgName, location) {
			this.imgName = imgName;
			this.location = location;
		}
	}

var album = new Album();


	var imgOne = new Photo('beach.jpg', 'Clearwater');
		console.log(imgOne);
	var imgTwo = new Photo('kremlin.jpg', 'Moscow');
		console.log(imgTwo);
	var imgThree = new Photo('vatican.jpg', 'Rome');
		console.log(imgThree);
	var imgFour = new Photo('towerbrige.jpg', 'London');
		console.log(imgFour);

		console.log(album.photos);
		console.log(album.photoList());

	album.addPhoto(imgOne);
		console.log(album.photos);

	album.addPhoto(imgTwo);
		console.log(album.photos);

	album.addPhoto(imgThree);
		console.log(album.photos);

	album.addPhoto(imgFour);
		console.log(album.photos);
		console.log(album.photoList());

