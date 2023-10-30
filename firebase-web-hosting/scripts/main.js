class Main {
    constructor() {
        this.pageViewsKey = 'pageViewsCount';
        this.initializeCounter();
        this.displayCount();
        this.counter = localStorage.getItem('counter') || 0;
        this.incrementCounter();
        document.getElementById('count').innerText = this.counter;

        // Event listeners
        document.getElementById('toggleSlideshow').addEventListener('click', () => this.toggleSlideshow());
        document.getElementById('resetCounter').addEventListener('click', () => this.resetCounter());

        // Slideshow variables
        this.slideshowImages = ['./images/chocolate.png', './images/chocolate2.jpeg', './images/chocolate3.jpeg']; // Add your image URLs here
        this.currentImageIndex = 0;
        this.slideshowInterval = null;
    }

    initializeCounter() {
        if (!localStorage.getItem(this.pageViewsKey)) {
            localStorage.setItem(this.pageViewsKey, '0');
        }
    }

    incrementCount() {
        let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
        currentCount++;
        localStorage.setItem(this.pageViewsKey, currentCount.toString());
    }

    displayCount() {
        this.incrementCount();
        document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey)  + ' times.'
    }

    // TODO: Add your three custom functions here

    incrementCounter() {
        this.counter++;
        localStorage.setItem('counter', this.counter);
    }

    toggleSlideshow() {
        if (this.slideshowInterval) {
            this.stopSlideshow();
        } else {
            this.startSlideshow();
        }
    }

    startSlideshow() {
        this.slideshowInterval = setInterval(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.slideshowImages.length;
            document.getElementById('slideshow').src = this.slideshowImages[this.currentImageIndex];
        }, 1000); // Change image every 2 seconds
    }

    stopSlideshow() {
        clearInterval(this.slideshowInterval);
        this.slideshowInterval = null;
    }

    resetCounter() {
        this.counter = 0;
        localStorage.setItem('counter', this.counter);
        document.getElementById('count').innerText = this.counter;
    }
}

document.mainClass = new Main();

// TODO: Add your two event bindings here