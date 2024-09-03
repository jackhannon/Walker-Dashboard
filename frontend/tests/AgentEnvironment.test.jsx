import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AgentEnvironment from '../src/features/AgentEnvironment/components/AgentEnvironment'

describe("Agent Environment", () => {
  it("Agent environment defaults to disconnected", () => {
    render(
      <AgentEnvironment/> 
    );
    expect(screen.queryAllByDisplayValue("Disconnected from socket"))
  });
})
