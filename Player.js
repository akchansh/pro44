class Player{
    constructor(x,y,w,h){
        var options = {
            isStatic : false
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body)
        this.image = loadImage("monstertruck_02.png")
       
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h)
    }
}