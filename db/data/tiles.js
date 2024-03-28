module.exports = [
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {},
            2: {
                asset: "road",
                connects: []
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {},
            2: {},
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [1, 2, 3]
            },
            1: {
                asset: 'city',
                connects: [0, 2, 3]
            },
            2: {
                asset: 'city',
                connects: [0, 1, 3]
            },
            3: {
                asset: 'city',
                connects: [0, 1, 2]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'road',
                connects: [2]
            },
            1: {
                asset: 'city',
                connects: []
            },
            2: {
                asset: 'road',
                connects: [0]
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: []
            },
            1: {},
            2: {},
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {
                asset: 'city',
                connects: [3]
            },
            2: {},
            3: {
                asset: 'city',
                connects: [1]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [2]
            },
            1: {},
            2: {
                asset: 'city',
                connects: [0]
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {
                asset: 'city',
                connects: []
            },
            2: {},
            3: {
                asset: 'city',
                connects: []
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {
                asset: 'city',
                connects: []
            },
            2: {
                asset: 'city',
                connects: []
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: []
            },
            1: {
                asset: 'road',
                connects: [2]
            },
            2: {
                asset: 'road',
                connects: [1]
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'road',
                connects: [3]
            },
            1: {
                asset: 'city',
                connects: []
            },
            2: {},
            3: {
                asset: 'road',
                connects: [0]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'road',
                connects: [2, 3]
            },
            1: {
                asset: 'city',
                connects: []
            },
            2: {
                asset: 'road',
                connects: [0, 3]
            },
            3: {
                asset: 'road',
                connects: [0, 2]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [3]
            },
            1: {},
            2: {},
            3: {
                asset: 'city',
                connects: [0]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [3]
            },
            1: {},
            2: {},
            3: {
                asset: 'city',
                connects: [0]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [3]
            },
            1: {
                asset: 'road',
                connects: [2]
            },
            2: {
                asset: 'road',
                connects: [1]
            },
            3: {
                asset: 'city',
                connects: [0]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [3]
            },
            1: {
                asset: 'road',
                connects: [2]
            },
            2: {
                asset: 'road',
                connects: [1]
            },
            3: {
                asset: 'city',
                connects: [0]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [1, 3]
            },
            1: {
                asset: 'city',
                connects: [0, 3]
            },
            2: {},
            3: {
                asset: 'city',
                connects: [0, 1]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [1, 3]
            },
            1: {
                asset: 'city',
                connects: [0, 3]
            },
            2: {},
            3: {
                asset: 'city',
                connects: [0, 1]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
        orientation: 0,
        corresponding_tiles: {
            north: null,
            east: null,
            south: null,
            west: null
        },
        tile_type: 'S',
        is_monestary: false,
        citizen: {
            is_citizen: false,
            asset: null,
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [1, 3]
                
            },
            1: {
                asset: 'city',
                connects: [0, 3]
            },
            2: {
                asset: "road",
                connects: []
            },
            3: {
                asset: "city",
                connects: [0, 1]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'city',
                connects: [1, 3]
                
            },
            1: {
                asset: 'city',
                connects: [0, 3]
            },
            2: {
                asset: "road",
                connects: []
            },
            3: {
                asset: "city",
                connects: [0, 1]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: 'road',
                connects: [2]
                
            },
            1: {},
            2: {
                asset: "road",
                connects: [0]
            },
            3: {}
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {},
            2: {
                asset: "road",
                connects: [3]
            },
            3: {
                asset: "road",
                connects: [2]
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {},
            1: {
                asset: "road",
                connects: []
            },
            2: {
                asset: "road",
                connects: []
            },
            3: {
                asset: "road",
                connects: []
            }
        }
    },
    {
        grid_id: { row: null, column: null },
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
            location: null,
            player: null
        },
        assets: {
            0: {
                asset: "road",
                connects: []
            },
            1: {
                asset: "road",
                connects: []
            },
            2: {
                asset: "road",
                connects: []
            },
            3: {
                asset: "road",
                connects: []
            }
        }
    }
]