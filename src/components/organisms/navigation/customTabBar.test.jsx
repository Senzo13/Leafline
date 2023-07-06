import React from "react";
import renderer from "react-test-renderer";
import CustomTabBar from "./CustomTabBar";

describe("CustomTabBar", () => {
  it("renders correctly", () => {
    const state = {
      routes: [
        { key: "home", name: "Home" },
        { key: "dashboard", name: "Dashboard" },
        { key: "settings", name: "Settings" },
      ],
      index: 0,
    };

    const descriptors = {
      home: { options: { activeIcon: "home", inactiveIcon: "home-outline" } },
      dashboard: {
        options: { activeIcon: "dashboard", inactiveIcon: "dashboard-outline" },
      },
      settings: {
        options: { activeIcon: "settings", inactiveIcon: "settings-outline" },
      },
    };

    const navigation = {
      emit: jest.fn(),
      navigate: jest.fn(),
    };

    const tree = renderer
      .create(
        <CustomTabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
