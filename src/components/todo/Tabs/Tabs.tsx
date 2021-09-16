import React from "react";
import "./Tabs.css";

interface Props {
  selectedTab: String;
  handleTabChange: (e: any) => void;
}

const Tabs = ({ selectedTab, handleTabChange }: Props) => {
  return (
    <div className="tabContainer">
      <div
        className={`tab ${selectedTab === "all" ? "active" : ""}`}
        aria-label="all"
        onClick={handleTabChange}
      >
        All
      </div>
      <div
        className={`tab ${selectedTab === "active" ? "active" : ""}`}
        aria-label="active"
        onClick={handleTabChange}
      >
        Active
      </div>
      <div
        className={`tab ${selectedTab === "completed" ? "active" : ""}`}
        aria-label="completed"
        onClick={handleTabChange}
      >
        Completed
      </div>
    </div>
  );
};

export default Tabs;
