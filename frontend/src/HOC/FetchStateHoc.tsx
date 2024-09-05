import React from 'react';
import { useAgentStore } from '../store';
import Disconnected from '../components/Disconnected';
import Spinner from '../components/Spinner';

const withFetchState = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithFetchState: React.FC<P> = (props: P) => {
    const {error, isConnected, agentType} = useAgentStore((state) => {
      return {
        isConnected: state.isConnected,
        agentType: state.agents[state.activeAgentIndex]?.name,
        error: state?.error
      }
    });
  
    if (error || !isConnected) {
      return <Disconnected message={error || "Disconnected from socket"} />;
    }
    
    if (!agentType) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithFetchState;
};

export default withFetchState;