import DashBoardStyles from '../../../DashBoardStyles.module.css';
import InfoTab from '../../../components/InfoTab/InfoTab';
import LineChart from './LineChart';
import DotPagination from '../../../components/DotPagination/DotPagination';

const AgentComparison = () => {
  return (
    <div className={DashBoardStyles.agentComparisonContainer}>
      <div className={DashBoardStyles.label}>Agent Metric</div>
      <InfoTab />
      <DotPagination>
        <LineChart/>
      </DotPagination>

    </div>
  );
}

export default AgentComparison;