window.customElements.define('my-tag', class extends HTMLElement {
    constructor() {
        super()
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        setInterval(() => {
            var today = new Date();
            this.hours = today.getHours();
            this.minutes = today.getMinutes();
            this.seconds = today.getSeconds();
            this.minutes = this.checkTime(this.minutes);
            this.seconds = this.checkTime(this.seconds);
            this.innerHTML =
                this.hours + ":" + this.minutes + ":" + this.seconds;
        }, 1000);
    }

    checkTime(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    }

});
