import React from "react";
import Search from "../components/Search/Search";
import renderer from "react-test-renderer";

const mockHandleForm = jest.fn();
const mockSetUsername = jest.fn();

test("Renders input component correctly with expected props", () => {
    const tree = renderer
        .create(
            <Search handleForm={mockHandleForm} setUsername={mockSetUsername} />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
