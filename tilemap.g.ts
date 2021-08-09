// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000102040000000000000000000700000003060500000000000102020204010202060605000000000003060606050606060606060202020400030606060506060606060606060605080306060605`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . 
. . . 2 2 2 . . . . . 2 2 2 2 2 
2 2 2 2 2 2 . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.dungeon.chestClosed,sprites.builtin.oceanDepths9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
