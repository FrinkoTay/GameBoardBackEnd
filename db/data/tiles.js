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
        tile_type: 'T',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['east', 'west']
                
            },
            east: {
                asset: 'city',
                connects: ['north', 'west']
            },
            south: {
                asset: "road",
                connects: []
            },
            west: {
                asset: "city",
                connects: ['north', 'east']
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
        tile_type: 'U',
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
            east: {},
            south: {
                asset: "road",
                connects: ['north']
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
        tile_type: 'V',
        is_monestary: false,
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
                connects: ['west']
            },
            west: {
                asset: "road",
                connects: ['south']
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
        tile_type: 'W',
        is_monestary: false,
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
        tile_type: 'X',
        is_monestary: false,
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
    }
]