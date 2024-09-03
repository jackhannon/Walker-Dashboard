export const flowChartData = {
  "edges": [
    {
      "id": "perceptor-1=>selector-1",
      "style": {
        "opacity": 1
      },
      "source": "perceptor-1",
      "target": "selector-1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "perceptor-2=>selector-1",
      "style": {
        "opacity": 1
      },
      "source": "perceptor-2",
      "target": "selector-1",
       "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "perceptor-3=>selector-1",
      "style": {
        "opacity": 1
      },
      "source": "perceptor-3",
      "target": "selector-1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },

    {
      "id": "selector-1=>skill-1",
      "style": {
        "opacity": 1
      },
      "source": "selector-1",
      "target": "skill-1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "selector-1=>skill-2",
      "style": {
        "opacity": 1
      },
      "source": "selector-1",
      "target": "skill-2",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "selector-1=>skill-3",
      "style": {
        "opacity": 1
      },
      "source": "selector-1",
      "target": "skill-3",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },

    {
      "id": "skill-1=>action",
      "style": {
        "opacity": 1
      },
      "source": "skill-1",
      "target": "action",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "skill-2=>action",
      "style": {
        "opacity": 1
      },
      "source": "skill-2",
      "target": "action",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "skill-3=>action",
      "style": {
        "opacity": 1
      },
      "source": "skill-3",
      "target": "action",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },

    {
      "id": "action=>input",
      "style": {
        "opacity": 1
      },
      "source": "action",
      "target": "input",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
  ],
  "nodes": [
    {
      "id": "input",
      "type": "outer-tree-module",
      "data": {
        "label": "Input"
      },
      "width": 50,
      "height": 20,
      "position": {
        "x": 0,
        "y": 0
      },
      "positionAbsolute": {
        "x": 0,
        "y": 0
      },
    },

    {
      "id": "perceptor-1",
      "type": "perceptor",
      "data": {
        "label": "This is a percieving module"
      },
      "width": 100,
      "height": 40,
      "position": {
        "x": -64,
        "y": 40
      },
      "positionAbsolute": {
        "x": -64,
        "y": 40
      },
      "draggable": false,
    },
    {
      "id": "perceptor-2",
      "type": "perceptor",
      "data": {
        "label": "This is a percieving module"
      },
    "width": 100,
      "height": 40,
      "position": {
        "x": 0,
        "y": 40
      },
      "positionAbsolute": {
        "x": 0,
        "y": 40
      },
      "draggable": false,
    },
    {
      "id": "perceptor-3",
      "type": "perceptor",
      "data": {
        "label": "This is a percieving module"
      },
   "width": 100,
      "height": 40,
      "position": {
        "x": 64,
        "y": 40
      },
      "positionAbsolute":  {
        "x": 64,
        "y": 40
      },
      "draggable": false,
    },


    {
      "id": "selector-1",
      "type": "selector",
      "data": {
        "label": "This is a selecting module"
      },
      "width": 60,
      "height": 60,
      "position": {
        "x": 0,
        "y": 80
      },
      "positionAbsolute": {
        "x": 0,
        "y": 80
      },
      "draggable": false,
    },


    {
      "id": "skill-1",
      "type": "skill",
      "data": {
        "label": "This is a skill module"
      },
  "width": 100,
      "height": 40,
      "position": {
        "x": -64,
        "y": 120
      },
      "positionAbsolute": {
        "x": -64,
        "y": 120
      },
      "draggable": false,
    },
    {
      "id": "skill-2",
      "type": "skill",
      "data": {
        "label": "This is a skill module"
      },
  "width": 100,
      "height": 40,
      "position": {
        "x": 0,
        "y": 120
      },
      "positionAbsolute": {
        "x": 0,
        "y": 120
      },
      "draggable": false,
    },
    {
      "id": "skill-3",
      "type": "skill",
      "data": {
        "label": "This is a skill module"
      },
    "width": 100,
      "height": 40,
      "position": {
        "x": 64,
        "y": 120
      },
      "positionAbsolute": {
        "x": 64,
        "y": 120
      },
      "draggable": false,
    },
    {
      "id": "action",
      "type": "outer-tree-module",
      "data": {
        "label": "Action"
      },
      "width": 50,
      "height": 20,
      "position": {
        "x": 0,
        "y": 160
      },
      "positionAbsolute": {
        "x": 0,
        "y": 160
      },
      "draggable": false,
    }
  ],
  "viewport": {
    
  }
}