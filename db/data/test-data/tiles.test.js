module.exports = [
    {
        grid_id: { x: 0, y: 0, z: 0},
        orientation: 0,
        corresponding_tiles: {
            north: null,
            east: null,
            south: null,
            west: null
        },
        tile_type: 'A',
        is_monestary: true,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {},
            east: {},
            south: {
                asset: "road",
                connects: []
            },
            west: {}
        }
    },
    {
        grid_id: { x: 0, y: 0, z: 0},
        orientation: 0,
        corresponding_tiles: {
            north: null,
            east: null,
            south: null,
            west: null
        },
        tile_type: 'B',
        is_monestary: true,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {},
            east: {},
            south: {},
            west: {}
        }
    },
    {
        grid_id: { x: 0, y: 0, z: 0},
        orientation: 0,
        corresponding_tiles: {
            north: null,
            east: null,
            south: null,
            west: null
        },
        tile_type: 'C',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['east', 'south', 'west']
            },
            east: {
                asset: 'city',
                connects: ['north', 'south', 'west']
            },
            south: {
                asset: 'city',
                connects: ['north', 'east', 'west']
            },
            west: {
                asset: 'city',
                connects: ['north', 'east', 'south']
            }
        }
    },
    {
        grid_id: { x: 0, y: 0, z: 0},
        orientation: 0,
        corresponding_tiles: {
            north: null,
            east: null,
            south: null,
            west: null
        },
        tile_type: 'D',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'road',
                connects: ['south']
            },
            east: {
                asset: 'city',
                connects: []
            },
            south: {
                asset: 'road',
                connects: ['north']
            },
            west: {}
        }
    }
]
