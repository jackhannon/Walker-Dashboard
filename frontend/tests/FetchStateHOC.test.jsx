import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useAgentStore } from '../src/store'; // Adjust import path as necessary
import withFetchState from '../src/components/FetchStateHOC'; // Adjust import path as necessary
import MockComponent from './mockComponent'; // Adjust import path as necessary
import { describe, it, expect } from 'vitest'; // Ensure using vitest for assertions

// Mock the useAgentStore hook
vi.mock('../src/store', () => ({
  useAgentStore: vi.fn()
}));

const WrappedComponent = withFetchState(MockComponent);

describe('withFetchState HOC', () => {
  it('renders Disconnected when there is an error', () => {
    useAgentStore.mockReturnValue({
      error: 'Network error',
      isConnected: false,
      agentType: null
    });

    render(<WrappedComponent />);
    expect(screen.getByText('Network error')).toBeInTheDocument();
  });

  it('renders Spinner when not connected but no error', () => {
    useAgentStore.mockReturnValue({
      error: null,
      isConnected: true,
      agentType: null
    });

    render(<WrappedComponent />);
    expect(screen.getByLabelText('spinner')).toBeInTheDocument(); // Adjust based on how Spinner is rendered
  });

  it('renders WrappedComponent when connected and agentType exists', () => {
    useAgentStore.mockReturnValue({
      error: null,
      isConnected: true,
      agentType: 'AgentName'
    });

    render(<WrappedComponent />);
    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });
});