import * as React from "react";

import "./Category_Menu.scss";
import Category_item from "./category_item/Category_item";
import Category_item_menu from "./Category_item_menu/Category_item_menu";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../Redux_Store/data_interfaces/state_interfaces";

interface CategoryMenuProps {
  open: boolean;
}

const Category_Menu = ({ open }: CategoryMenuProps) => {
  const [openItemMenu, setOpenItemMenu] = React.useState<boolean>(false);
  const [num, setNum] = React.useState<number>(0);

  const categoriesState = useSelector(
    (state: GlobalState) => state.product_reducer
  );

  return (
    <>
      {open ? (
        <>
          <div className="category_menu_box">
            <Category_item
              label={"Tecnología"}
              open={open}
              openItemMenu={openItemMenu}
              setOpenItemMenu={setOpenItemMenu}
              number={0}
              setNum={setNum}
            />
            <Category_item
              label={"Electrodomestícos"}
              open={open}
              openItemMenu={openItemMenu}
              setOpenItemMenu={setOpenItemMenu}
              number={1}
              setNum={setNum}
            />
            <Category_item
              label={"Dormitorio"}
              open={open}
              openItemMenu={openItemMenu}
              setOpenItemMenu={setOpenItemMenu}
              number={2}
              setNum={setNum}
            />
            <Category_item label={"Muebles"} open={open} />
            <Category_item label={"Deco Hogar"} open={open} />
            <Category_item label={"Calzado"} open={open} />
            <Category_item label={"Mujer"} open={open} />
            <Category_item label={"Hombre"} open={open} />
            <Category_item label={"Niños"} open={open} />
            <Category_item label={"Ropa Infatil"} open={open} />
            <Category_item label={"Depórtes"} open={open} />
            <Category_item label={"Belleza"} open={open} />
            <Category_item label={"Accesorios"} open={open} />
            <Category_item label={"Otros"} open={open} />
          </div>
          <Category_item_menu
            openItemMenu={openItemMenu}
            data={categoriesState.categories_filters}
            num={num}
          />
        </>
      ) : null}
    </>
  );
};

export default Category_Menu;
