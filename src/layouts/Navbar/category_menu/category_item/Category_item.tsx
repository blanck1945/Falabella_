import * as React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Category_item.scss";
import { useDispatch } from "react-redux";

interface CategoryItemProps {
  open: boolean;
  label: string;
  openItemMenu?: boolean;
  number?: number;
  setOpenItemMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  setNum?: React.Dispatch<React.SetStateAction<number>>;
}

const Category_item = ({
  open,
  label,
  openItemMenu,
  setOpenItemMenu,
  setNum,
  number,
}: CategoryItemProps) => {
  return (
    <>
      {open ? (
        <div className="category_item">
          <h3
            className="close_text"
            onMouseOver={() => {
              setOpenItemMenu(true);
              setNum(number);
            }}
          >
            {label}
          </h3>
          <MdKeyboardArrowRight className="show_icon" />
        </div>
      ) : null}
    </>
  );
};

export default Category_item;
