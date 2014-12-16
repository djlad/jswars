

function animation(target,imageArray,timeArray){
	this.t = 0;
	this.currentImage = 0;
	this.running = false; //keeps track of whether or not its running

	this.animate = function(){
		this.running = true
		this.t++;
		if(this.t>timeArray[this.currentImage]){
			this.t = 0;//reset timer
			this.currentImage++;//go to next image in imageArray

			if(this.currentImage>=imageArray.length){
				this.sprite = imageArray[0];//set sprite to original
				this.running = false;
				return;//end animation
			}
			target.sprite = imageArray[this.currentImage];

		}
	}

}