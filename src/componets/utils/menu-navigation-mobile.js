import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import data from "../../data.json";
import "../../styles/MenuNavigationMobile.css";

const MenuNavigationMobile = ({ onFilter }) => {
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
      label: <span className="category-label">{`${category.charAt(0).toUpperCase() + category.slice(1)} (${data[category].length})`}</span>,
      children: Object.keys(subcategories).map((subcategory) => ({
        key: `${category}-${subcategory}`,
        label: <span className="subcategory-label">{`${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} (${subcategories[subcategory].length})`}</span>,
      })),
    };
  });

  const [current, setCurrent] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
    onFilter(e.key); // Call the filter callback
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

return (
    <div>
        <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="menu-button-mobile"
        >
            Filtro por categorias  
        </Button>
        <Drawer
            title="Categorias y subcategorias"
            placement="left"
            onClose={closeDrawer}
            visible={visible}
            bodyStyle={{ padding: 0 }}
            className="drawer"
        >
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="inline"
                theme="dark"
                items={menuItems}
            />
        </Drawer>
    </div>
);
};

export default MenuNavigationMobile;
