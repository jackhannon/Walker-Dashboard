export const flowChartData = {
  "edges": [
    {
      "id": "sensor-1=>funnel",
      "type": "funnelEdge",
      "style": {
        "opacity": 1
      },
      "source": "sensors",
      "target": "funnel",
      "sourceHandle": "sensor-1"
    },
    {
      "id": "sensor-2=>funnel",
      "type": "funnelEdge",
      "style": {
        "opacity": 1
      },
      "source": "sensors",
      "target": "funnel",
      "sourceHandle": "sensor-2"
    },
    {
      "id": "sensor-3=>funnel",
      "type": "funnelEdge",
      "style": {
        "opacity": 1
      },
      "source": "sensors",
      "target": "funnel",
      "sourceHandle": "sensor-3"
    },
    {
      "id": "sensor-4=>funnel",
      "type": "funnelEdge",
      "style": {
        "opacity": 1
      },
      "source": "sensors",
      "target": "funnel",
      "sourceHandle": "sensor-4"
    },
    {
      "id": "sensor-5=>funnel",
      "type": "funnelEdge",
      "style": {
        "opacity": 1
      },
      "source": "sensors",
      "target": "funnel",
      "sourceHandle": "sensor-5"
    },
    {
      "id": "funnel=>perceptors",
      "type": "roundedEdge",
      "style": {
        "opacity": 1
      },
      "source": "funnel",
      "target": "perceptors"
    },
    {
      "id": "skills=>actions",
      "type": "roundedEdge",
      "style": {
        "opacity": 1
      },
      "source": "skills-collection-default",
      "target": "actions"
    },
    {
      "id": "perceptors=>selector-pclgrwm",
      "type": "selectorEdge",
      "style": {
        "opacity": 1
      },
      "source": "perceptors",
      "target": "selector-pclgrwm",
      "targetHandle": "top"
    },
    {
      "id": "selector-pclgrwm=>skills-collection-default",
      "type": "selectorEdge",
      "style": {
        "opacity": 1
      },
      "source": "selector-pclgrwm",
      "target": "skills-collection-default",
      "sourceHandle": "bottom"
    },
    {
      "id": "selector-pclgrwm=>selector-dc95igs",
      "type": "selectorEdge",
      "style": {
        "opacity": 1
      },
      "source": "selector-pclgrwm",
      "target": "selector-dc95igs",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "selector-dc95igs=>skills-collection-lix49lm",
      "type": "selectorEdge",
      "style": {
        "opacity": 1
      },
      "source": "selector-dc95igs",
      "target": "skills-collection-lix49lm",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "skills-collection-lix49lm=>actions",
      "type": "roundedEdge",
      "style": {
        "opacity": 1
      },
      "source": "skills-collection-lix49lm",
      "target": "actions",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "actions=>sensors",
      "data": {
        "leftMostX": -450
      },
      "type": "actionsSensorsEdge",
      "source": "actions",
      "target": "sensors",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "nodes": [
    {
      "id": "sensors",
      "data": {
        "label": "Sensors"
      },
      "type": "sensors",
      "width": 128,
      "height": 30,
      "position": {
        "x": -64,
        "y": 40
      },
      "draggable": false,
      "positionAbsolute": {
        "x": -64,
        "y": 40
      }
    },
    {
      "id": "funnel",
      "data": {},
      "type": "funnel",
      "width": 32,
      "height": 32,
      "position": {
        "x": -16,
        "y": 90
      },
      "draggable": false,
      "positionAbsolute": {
        "x": -16,
        "y": 90
      }
    },
    {
      "id": "perceptors",
      "data": {},
      "type": "perceptors-collection",
      "width": 340,
      "height": 120,
      "position": {
        "x": -170,
        "y": 162
      },
      "draggable": false,
      "positionAbsolute": {
        "x": -170,
        "y": 162
      }
    },
    {
      "id": "skills-collection-default",
      "data": {
        "idx": 2
      },
      "type": "skills-collection",
      "style": {
        "opacity": 1
      },
      "width": 340,
      "height": 292,
      "position": {
        "x": 110,
        "y": 479.94112549695427
      },
      "selected": false,
      "draggable": false,
      "positionAbsolute": {
        "x": 110,
        "y": 479.94112549695427
      }
    },
    {
      "id": "actions",
      "data": {
        "label": "Actions"
      },
      "type": "actions",
      "width": 80,
      "height": 28,
      "position": {
        "x": -40,
        "y": 1078
      },
      "draggable": false,
      "positionAbsolute": {
        "x": -40,
        "y": 1078
      }
    },
    {
      "id": "selector-pclgrwm",
      "data": {
        "idx": 0
      },
      "type": "selector",
      "style": {
        "opacity": 1
      },
      "width": 48,
      "height": 48,
      "position": {
        "x": -24,
        "y": 351.94112549695427
      },
      "selected": false,
      "positionAbsolute": {
        "x": -24,
        "y": 351.94112549695427
      }
    },
    {
      "id": "selector-dc95igs",
      "data": {
        "idx": 0
      },
      "type": "selector",
      "style": {
        "opacity": 1
      },
      "width": 48,
      "height": 48,
      "position": {
        "x": -204,
        "y": 601.9411254969543
      },
      "positionAbsolute": {
        "x": -204,
        "y": 601.9411254969543
      }
    },
    {
      "id": "skills-collection-lix49lm",
      "data": {
        "idx": 0
      },
      "type": "skills-collection",
      "style": {
        "opacity": 1
      },
      "width": 540,
      "height": 136,
      "position": {
        "x": -450,
        "y": 851.9411254969543
      },
      "positionAbsolute": {
        "x": -450,
        "y": 851.9411254969543
      }
    }
  ],
  "viewport": {
    "x": 1088,
    "y": 50.800589836660606,
    "zoom": 0.8868818058076225
  }
}