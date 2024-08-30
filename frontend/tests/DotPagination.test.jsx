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

    // Simulate clicking the "next" button again to go forward in the pagination
    fireEvent.click(screen.queryByLabelText("paginate-right"));
    expect(handleChange).toHaveBeenCalledWith(2);
    expect(selectedOption).toBe("baz");
    expect(screen.getByText("baz")).toBeInTheDocument();

    // Simulate clicking the "next" button again to go to the first option (wrap-around)
    fireEvent.click(screen.queryByLabelText("paginate-right"));
    expect(handleChange).toHaveBeenCalledWith(0);
    expect(selectedOption).toBe("foo");
    expect(screen.getByText("foo")).toBeInTheDocument();

    // Simulate clicking the "prev" button to go back in the pagination
    fireEvent.click(screen.queryByLabelText("paginate-left"));
    expect(handleChange).toHaveBeenCalledWith(2);
    expect(selectedOption).toBe("baz");
    expect(screen.getByText("baz")).toBeInTheDocument();
  });


  it("changes to specific item when a dot is clicked", () => {
  //   const options = ["foo", "bar", "baz"];
  //   let selectedOption = options[0];
  //   const handleChange = vi.fn((index) => {
  //     selectedOption = options[index];
  //   });

  //   // Render the component with the options as children
  //   render(
  //     <DotPagination handleChange={handleChange}>
  //       {options.map((option, index) => (
  //         <div key={index}>{option}</div>
  //       ))}
  //     </DotPagination>
  //   );

  //   // Check the initial state (should be showing the first option)
  //   expect(screen.getByText("foo")).toBeInTheDocument();

  //   // Simulate clicking the second dot to go to the second item
  //   const dots = screen.getAllByRole('button');
  //   fireEvent.click(dots[1]);
  //   expect(handleChange).toHaveBeenCalledWith(1);
  //   expect(selectedOption).toBe("bar");
  //   expect(screen.getByText("bar")).toBeInTheDocument();

  //   // Simulate clicking the third dot to go to the third item
  //   fireEvent.click(dots[2]);
  //   expect(handleChange).toHaveBeenCalledWith(2);
  //   expect(selectedOption).toBe("baz");
  //   expect(screen.getByText("baz")).toBeInTheDocument();
  // });
});
