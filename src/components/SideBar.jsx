import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">All Mail</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/trash">Trash</Link>
        </li>
        <li>
          <Link to="/spam">Spam</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
