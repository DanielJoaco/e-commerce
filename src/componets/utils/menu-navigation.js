import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import data from "../../data.json";
import "../../styles/MenuStyles.css";

const MenuNavigation = ({ onFilter }) => {
  const menuItems = Object.keys(data).map((category) => {
    const subcategories = data[category].reduce((acc, item) => {
      const { subcategory } = item;
      if (!acc[subcategory]) {
        acc[subcategory] = [];
      }
      acc[subcategory].push(item);
      return acc;
    }, {});
    

    return {
      key: category,
      icon: <AppstoreOutlined />,
      label: `${category.charAt(0).toUpperCase() + category.slice(1)} (${data[category].length})`,
      children: Object.keys(subcategories).map((subcategory) => ({
        key: `${category}-${subcategory}`,
        label: `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} (${subcategories[subcategory].length})`,
      })),
    };
  });

  const [current, setCurrent] = useState("");

  const handleClick = (e) => {
    setCurrent(e.key);
    onFilter(e.key); // Call the filter callback
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="inline"
      theme="dark"
      items={menuItems}
      className="menu-navigation"
    />
  );
};

export default MenuNavigation;
