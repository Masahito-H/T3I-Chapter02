<template>
    <div class="container" ref="topcanvas" id="top-canvas"></div>
</template>

<script>


const topCanvas = function(store){
    return (p) => {
        let nsCount = .0,
        waveList = [],
        initGradDrawOpac = NaN,
        initSinDrawOpac = NaN;
        
        class Wave{
            constructor(y, iPhase, amp, speed, freq){
                this.y = y;
                this.phase = p.radians(iPhase);
                this.amp = amp;
                this.speed = p.radians(speed);
                this.freq = freq;
                
                this.interval = 10;
                this.interX = 0;
                this.interY = 0;
                store.dispatch("mousePosition", {
                    x: this.interX, y: this.interY
                });
                
                this.noiseValue = 0;
            }
            
            update(interX, noiseValue){
                this.phase += this.speed;
                
                this.interX = p.map(p.mouseX, 0, p.width, 50, 0);
                this.interY = (p.mouseY > p.height / 2) ? p.map(p.mouseY, p.height / 2, p.height, 0, 25) : 0;
                this.noiseValue = noiseValue;
                store.dispatch("mousePosition", {
                    x: p.map(this.interX, 50, 0, 0, 1), y: p.map(this.interY, 0, 25, 0, 1)
                });
            }
            
            draw(){
                p.stroke(53, 53, 5, 50);
                p.fill(0, 255, 127, this.interX);
                p.strokeWeight(1.5);
                p.beginShape();
                
                let x = p.width,
                radX = p.radians(p.width),
                radInterval = p.radians(this.interval) * this.freq;
                
                p.push();
                p.translate(0, this.y * 2);
                for(; x > 0; x -= this.interval, radX -= radInterval){
                    p.vertex(x, this.y + this.amp * p.sin(this.phase + radX) + this.interY * (p.noise(this.noiseValue + x) - .5));
                }
                p.vertex(x, this.y + this.amp * p.sin(this.phase + radX));
                p.pop();
                
                p.endShape();
            }
        }
        
        p.setup = function(){
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.frameRate(30);
            
            p.textFont("sans-serif");
            p.textSize(50);
            p.textAlign(p.CENTER);
            p.fill(0);
            p.noStroke();
            
            for(let i = 0; i < 9; i++){
                waveList.push(new Wave(p.height / 2 + p.random(-p.height / 6, p.height / 6), 
                p.random(0, 360), p.height / 4 + p.random(-p.height / 8, p.height / 8), 
                p.random(.25, .5), p.random(.0, .2)));
            }
        };
        
        p.draw = function(){
            p.clear();
            
            p.noStroke();
            let g = p.drawingContext.createLinearGradient(0, 0, p.width * (.75 + .25 * p.sin(nsCount * .02)), 0);
            g.addColorStop(0, p.color(255, 0));
            g.addColorStop(1, p.color(0, 255, 127, 255));
            p.drawingContext.fillStyle = g;
            
            p.rect(0, 0, p.width, p.height);
            
            for(let wave of waveList){
                wave.update(0, nsCount);
                wave.draw();
            }
            
            nsCount += .1;
        };
        
        p.windowResized = function(){
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    };
};

export default{
    
    name: "TheTopCanvas",
    data: function(){
        return {
            topCanvas: null,
            pd: null
        };
    },
    methods: {
        
    },
    mounted: function(){
        this.topCanvas = new p5(topCanvas(this.$store), this.$el);
    }
};
</script>

<style scoped>
#id-canvas {
    z-index: -1;
}
</style>