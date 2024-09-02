import { useDrop } from 'react-dnd';
import ModulesStyles from '../styles/ModulesStyles.module.css';
import { ModuleItem, ModuleTypeList } from './types';
import { Handle, NodeProps, Position } from '@xyflow/react';
import PerceptiveModule from './PerceptiveModule';
import { ReactNode } from 'react';
import SkillModule from './SkillModule';
import ModuleInfoTab from './Tree/ModuleInfoTab';
import SelectiveModule from './SelectiveModule';


type CustomNodeProps = NodeProps & {
  data: {
    label: string;
    onDrop: (item: ModuleItem, nodeId: string) => void;
  };
};


const ModuleDropZoneNode:React.FC<CustomNodeProps> = ({ id, data}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ModuleTypeList,
    drop: (item: {type: string}) => {
      let element: ReactNode;
      switch (item.type) {
        case "perceptiveModule":
        element = (
          <PerceptiveModule>
            <ModuleInfoTab info={"A perceiving module"} />
          </PerceptiveModule>
        )
        break;
        case "skillModule":
        element = (
          <SkillModule>
            <ModuleInfoTab info={"A skill module"} />
          </SkillModule>
        )
        break;
        case "selectiveModule":
        element = (
          <SelectiveModule>
            <ModuleInfoTab info={"A selective module"} toggleStyles={ModulesStyles.selectiveInfoToggle}/>
          </SelectiveModule>
        )
        break;
      }
      data.onDrop({type: item.type, element: element}, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} className={`${ModulesStyles.dropZoneNode} ${isOver ? ModulesStyles.isElementOverDropZone : ""}`}>
      {isOver ? 'Release to drop' : 'Drag a module here'}
      <Handle
        type="target"
        position={Position.Top}
        id="top-handle"
        style={{ opacity: 0}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-handle"
        style={{ opacity: 0}}
      />
    </div>
  );
};

export default ModuleDropZoneNode
