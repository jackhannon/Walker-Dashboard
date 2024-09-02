import React, { useEffect, useRef } from 'react';
import { ReactFlow, useNodesState, useEdgesState, addEdge, Node, Edge, Connection, } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ModulesStyles from '../../styles/ModulesStyles.module.css';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModuleSelectorSidebar from './ModuleSelectorSidebar';
import ModuleDropZoneNode from '../ModuleDropZoneNode';
import { ModuleItem } from '../types';
import FlowModuleContainer from '../FlowModuleContainer';

type Props = {
  toggleContract: () => void;
};

const MODULE_WIDTH = 160;
const SELECTIVE_MODULE_WIDTH = 112;

const ModuleEditor: React.FC<Props> = ({ toggleContract }) => {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([
    {
      id: '0',
      type: 'dropZone',
      data: { label: 'Drop Module Here', onDrop: handleDrop },
      position: { x: 250, y: 5 },
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const onConnect = (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds));
  //the ref and use effect are neccessary to add edges to the recently added nodes
  const recentlyAddedLowerDropZoneId = useRef<string>();
  const recentlyAddedAdjacentDropZoneId = useRef<string>();
  const recentlyDroppedNodeId = useRef<string>();

  useEffect(() => {
    if (recentlyAddedLowerDropZoneId.current && recentlyDroppedNodeId.current) {
      const newLowerEdge: Edge = {
        id: `edge-${recentlyDroppedNodeId.current}-${recentlyAddedLowerDropZoneId.current}`,
        source: recentlyDroppedNodeId.current,
        target: recentlyAddedLowerDropZoneId.current,
        type: "straight",
        sourceHandle: 'bottom-handle',
        targetHandle: 'top-handle'
      };

      const newAdjacentEdge: Edge = {
        id: `edge-${recentlyDroppedNodeId.current}-${recentlyAddedAdjacentDropZoneId.current}`,
        source: recentlyDroppedNodeId.current,
        target: recentlyAddedAdjacentDropZoneId.current || "",
        type: "straight",
        sourceHandle: 'right-handle',
        targetHandle: 'left-handle'
      };
      
      setEdges((edges) => {
        const newEdges = [
          ...edges,
          newLowerEdge,
        ];
        if (nodes.length > 1) {
          newEdges.push(newAdjacentEdge)
        }
        return newEdges
      });
      recentlyAddedLowerDropZoneId.current = '';
      recentlyDroppedNodeId.current = '';
      recentlyAddedAdjacentDropZoneId.current = '';

    }
  }, [nodes, setEdges]);

  function handleDrop(item: ModuleItem, nodeId: string) {
    const newLowerDropZoneId = `${new Date().getTime()}`;
    const newAdjacentDropZoneId = `${new Date().getTime() + 1}`;


    recentlyAddedLowerDropZoneId.current = newLowerDropZoneId;
    recentlyAddedAdjacentDropZoneId.current = newAdjacentDropZoneId;
    recentlyDroppedNodeId.current = nodeId;
    setNodes((nodes) => {
      const droppedNode = nodes.find((node) => node.id === nodeId) as Node;
      const { position } = droppedNode;


      const newLowerDropZonePosition = {
        x: position.x,
        y: position.y + 150,
      };

      const newAdjacentDropZonePosition = {
        x: position.x + 200,
        y: position.y,
      };


      const newNodePosition = {...droppedNode.position};

      switch (item.type) {
        case "selectiveModule": {
          const amountToAddToXPosition = (MODULE_WIDTH / 2) - (SELECTIVE_MODULE_WIDTH / 2);
          newNodePosition.x = newNodePosition.x + amountToAddToXPosition;
        }
        break
      }
  

      const newLowerDropZoneNode: Node = {
        id: newLowerDropZoneId,
        type: 'dropZone',
        data: { label: 'Drop Module Here', onDrop: handleDrop },
        position: newLowerDropZonePosition,
      };

      const newAdjacentDropZoneNode: Node = {
        id: newAdjacentDropZoneId,
        type: 'dropZone',
        data: { label: 'Drop Module Here', onDrop: handleDrop },
        position: newAdjacentDropZonePosition,
      };


      const newNodes = nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              position: newNodePosition,
              type: item.type,
              data: {
                label: item.type,
                children: item.element,
              },
            }
          : node
        ).concat(newLowerDropZoneNode);
         console.log(nodes)
        if (nodes.length > 1) {
          newNodes.push(newAdjacentDropZoneNode)
        }

        return newNodes
      }
    );
  }

  return (
    <div ref={reactFlowWrapper} className={ModulesStyles.moduleEditor}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={{
          dropZone: ModuleDropZoneNode,
          perceptiveModule: FlowModuleContainer,
          selectiveModule: FlowModuleContainer,
          skillModule: FlowModuleContainer,
        }}
        minZoom={1}
        maxZoom={1}
        onConnect={onConnect}
        fitView
      />
      <ModuleSelectorSidebar />
      <button
        aria-label="contract editor"
        onClick={toggleContract}
        className={ModulesStyles.expandEditorButton}
      >
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      </button>
    </div>
  );
};

export default ModuleEditor;
