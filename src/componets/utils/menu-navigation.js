import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import data from "../../data.json";

const MenuNavigation = () => {
  // Agrupamos productos por categorías y subcategorías
  const categoryData = data.reduce((acc, item) => {
    const { table: category, subcategory } = item;
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(item);
    return acc;
  }, {});

  // Convertimos el objeto en un array para construir el menú
  const menuItems = Object.keys(categoryData).map((category) => ({
    key: category,
    icon: <AppstoreOutlined />,
    label: `${category.charAt(0).toUpperCase() + category.slice(1)} (${Object.values(categoryData[category])
      .flat()
      .length})`,
    children: Object.keys(categoryData[category]).map((subcategory) => ({
      key: `${category}-${subcategory}`,
      label: `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} (${categoryData[category][subcategory].length})`,
    })),
  }));

  const [current, setCurrent] = useState("1");

  const handleClick = (e) => {
    setCurrent(e.key);
    console.log(`Selected category: ${e.key}`);
    // Aquí puedes manejar la lógica para filtrar productos por la categoría o subcategoría seleccionada.
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="inline"
      theme="dark"
      items={menuItems}
    />
  );
};

export default MenuNavigation;
