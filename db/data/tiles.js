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
        tile_type: 'E',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: []
            },
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
        tile_type: 'F',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {},
            east: {
                asset: 'city',
                connects: ['west']
            },
            south: {},
            west: {
                asset: 'city',
                connects: ['east']
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
        tile_type: 'G',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['south']
            },
            east: {},
            south: {
                asset: 'city',
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
        tile_type: 'H',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {},
            east: {
                asset: 'city',
                connects: []
            },
            south: {},
            west: {
                asset: 'city',
                connects: []
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
        tile_type: 'I',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {},
            east: {
                asset: 'city',
                connects: []
            },
            south: {
                asset: 'city',
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
        tile_type: 'J',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: []
            },
            east: {
                asset: 'road',
                connects: ['south']
            },
            south: {
                asset: 'road',
                connects: ['east']
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
        tile_type: 'K',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'road',
                connects: ['west']
            },
            east: {
                asset: 'city',
                connects: []
            },
            south: {},
            west: {
                asset: 'road',
                connects: ['north']
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
        tile_type: 'L',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'road',
                connects: ['south', 'west']
            },
            east: {
                asset: 'city',
                connects: []
            },
            south: {
                asset: 'road',
                connects: ['north', 'west']
            },
            west: {
                asset: 'road',
                connects: ['north', 'south']
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
        tile_type: 'M',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['west']
            },
            east: {},
            south: {},
            west: {
                asset: 'city',
                connects: ['north']
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
        tile_type: 'N',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['west']
            },
            east: {},
            south: {},
            west: {
                asset: 'city',
                connects: ['north']
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
        tile_type: 'O',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['west']
            },
            east: {
                asset: 'road',
                connects: ['south']
            },
            south: {
                asset: 'road',
                connects: ['east']
            },
            west: {
                asset: 'city',
                connects: ['north']
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
        tile_type: 'P',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null
        },
        assets: {
            north: {
                asset: 'city',
                connects: ['west']
            },
            east: {
                asset: 'road',
                connects: ['south']
            },
            south: {
                asset: 'road',
                connects: ['east']
            },
            west: {
                asset: 'city',
                connects: ['north']
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
        tile_type: 'Q',
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
            south: {},
            west: {
                asset: 'city',
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
        tile_type: 'R',
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
            south: {},
            west: {
                asset: 'city',
                connects: ['north', 'east']
            }
        }
    },
]