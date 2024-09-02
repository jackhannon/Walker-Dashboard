import DashBoardStyles from '../../../DashBoardStyles.module.css';
import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import LineChart from './LineChart';
import BarChart from './BarChart'
import DotPagination from '../../../components/DotPagination/DotPagination';

type Props = {
  isLoading: boolean;
}

const AgentComparison: React.FC<Props> = ({ isLoading }) => {

  return (
    <div className={DashBoardStyles.agentComparisonContainer}>
      <div className={DashBoardStyles.label}>Agent Metric</div>
      <InfoTab />
      {isLoading ? (
        <Spinner />
      ) : (
        <DotPagination>
          <LineChart/>
          <BarChart/>
        </DotPagination>
      )}
    </div>
  );
}

export default AgentComparison;