controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . 7 f 7 f 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 f f f 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, REAPER, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . f . . . d . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, REAPER, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
})
let statusbar: StatusBarSprite = null
let MR_NICE: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let REAPER: Sprite = null
scene.setBackgroundColor(8)
REAPER = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f 2 f 2 f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(REAPER)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.value = 100
statusbar2.attachToSprite(REAPER)
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(69, 113)
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(2, 31)
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(74, 112)
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(148, 39)
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(53, randint(1, scene.screenWidth()))
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
game.onUpdateInterval(1000, function () {
    MR_NICE = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . 5 . 5 5 5 5 5 . . 5 . . . . 
        . . 5 5 . 5 . 5 . . . 5 . . . . 
        . . . 5 5 5 . 5 . . 5 . . . . . 
        . . . . 5 5 5 5 . 5 5 . . . . . 
        . . . . 5 5 f 5 5 5 . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 f 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MR_NICE.setPosition(70, randint(1, scene.screenWidth()))
    MR_NICE.setVelocity(0, -82)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(MR_NICE)
})
forever(function () {
	
})
