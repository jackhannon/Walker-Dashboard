import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DotPagination from '../src/components/DotPagination/DotPagination';
import React from 'react';


describe("DotPagination", () => {
  it("paginates forward and backward", () => {
    const options = ["foo", "bar", "baz"];
    let selectedOption = options[0];
    const handleChange = vi.fn((index) => {
      selectedOption = options[index];
    });

    render(
      <DotPagination handleChange={handleChange}>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </DotPagination>
    );

    expect(screen.getByText("foo")).toBeInTheDocument();

    fireEvent.click(screen.queryByLabelText("paginate-right"));
    expect(handleChange).toHaveBeenCalledWith(1);
    expect(selectedOption).toBe("bar");
    expect(screen.getByText("bar")).toBeInTheDocument();

    fireEvent.click(screen.queryByLabelText("paginate-right"));
    expect(handleChange).toHaveBeenCalledWith(2);
    expect(selectedOption).toBe("baz");
    expect(screen.getByText("baz")).toBeInTheDocument();

    fireEvent.click(screen.queryByLabelText("paginate-right"));
    expect(handleChange).toHaveBeenCalledWith(0);
    expect(selectedOption).toBe("foo");
    expect(screen.getByText("foo")).toBeInTheDocument();

    fireEvent.click(screen.queryByLabelText("paginate-left"));
    expect(handleChange).toHaveBeenCalledWith(2);
    expect(selectedOption).toBe("baz");
    expect(screen.getByText("baz")).toBeInTheDocument();
  });


  
  it("changes to specific item when a dot is clicked", () => {
    const options = ["foo", "bar", "baz"];
    let selectedOption = options[0];
    const handleChange = vi.fn((index) => {
      selectedOption = options[index];
    });

    render(
      <DotPagination handleChange={handleChange}>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </DotPagination>
    );

    expect(screen.getByText("foo")).toBeInTheDocument();
    
    const dots = screen.queryAllByLabelText(/pagination-dot-\d+/);
    fireEvent.click(dots[1]);
    expect(handleChange).toHaveBeenCalledWith(1);
    expect(selectedOption).toBe("bar");
    expect(screen.getByText("bar")).toBeInTheDocument();

    fireEvent.click(dots[2]);
    expect(handleChange).toHaveBeenCalledWith(2);
    expect(selectedOption).toBe("baz");
    expect(screen.getByText("baz")).toBeInTheDocument();
  });
});
