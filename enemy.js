class Enemy{
    constructor(x,y,w,h){
        var options = {
            isStatic : false
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body)
        this.image = loadImage("images.jpg")
       
    }

    ene(){
        var pos = this.body.position
        if(frameCount % 100 === 0){
            enemy1 = createSprite(pos.x,pos.y,this.w,this.h)
            enemy1.addImage(this.image)
            enemy1.velocityX = -6
            enemy1.scale = 0.3
          }
    }
}
