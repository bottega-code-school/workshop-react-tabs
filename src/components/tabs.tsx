import React from "react";
import { NavLink, Route } from "react-router-dom";

type StateTabProps = {
  label: string;
  activeTab: string;
  onClick: (label: string) => void;
};
const StateTab = ({ label, activeTab, onClick }: StateTabProps) => {
  const isActive = activeTab === label;

  return (
    <a
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </a>
  );
};

type RouteTabProps = {
  label: string;
  to: string;
  exact?: boolean;
};
const RouteTab = ({ label, to, exact = true }: RouteTabProps) => {
  return (
    <NavLink className="tab" activeClassName="active" exact={exact} to={to}>
      {label}
    </NavLink>
  );
};

type TabProps = {
  tabs: {
    to?: string;
    label: string;
    render: () => React.ReactNode;
    exact?: boolean;
  }[];
  activeTab: string;
  onClickTab: (label: string) => void;
  variant?: "state" | "route";
};
const Tabs = ({ tabs, activeTab, onClickTab, variant = "state" }: TabProps) => {
  const stateTabs = tabs.filter((tab) => !tab.to);
  const routeTabs = tabs.filter((tab) => tab.to);

  const renderStateTabs = () => {
    return (
      <div className="tab-list">
        {stateTabs.map((tab) => (
          <StateTab
            key={tab.label}
            label={tab.label}
            activeTab={activeTab}
            onClick={onClickTab}
          />
        ))}
      </div>
    );
  };

  const renderRouteTabs = () => {
    return (
      <div className="tab-list">
        {routeTabs.map((tab) => (
          <RouteTab
            key={tab.to}
            label={tab.label}
            to={tab.to}
            exact={tab.exact}
          />
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (variant === "state") {
      return (
        <div className="tab-content">
          {stateTabs.map((tab) => tab.label === activeTab && tab.render())}
        </div>
      );
    } else {
      return (
        <div className="tab-content">
          {routeTabs.map((tab) => (
            <Route key={tab.to} path={tab.to} exact={tab.exact}>
              {tab.render()}
            </Route>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="tabs">
      {stateTabs.length > 0 && renderStateTabs()}
      {routeTabs.length > 0 && renderRouteTabs()}
      {renderContent()}
    </div>
  );
};

export default Tabs;
