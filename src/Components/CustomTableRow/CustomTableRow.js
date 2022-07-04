import { Checkbox, IconButton, Typography } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

const CustomTypographyWrapper = ({ children }) => {
  return (
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px"
      }}
    >
      {children}
    </Typography>
  );
};

const CustomTableRow = ({
  title,
  id,
  type,
  price,
  quantity,
  getSelect,
  deleted
}) => {
  const dispatch = useDispatch();
  const dataSelector = useSelector(state => state.cartReducer);
  const [selected, setSelected] = useState([]);
  const handleAdd = id => {
    let addedData = dataSelector.cart.filter(data =>
      data.id === id
        ? data.quantity++ && data.price * data.quantity + 1
        : null
    );

    dispatch({ type: "UPDATE_CART_QUANTITY", payload: addedData });
  };

  useEffect(() => {
    if (deleted) {
      setSelected([])
    }
  }, [deleted]);


  const handleDeletation = id => {
    let deductedData =
      dataSelector &&
      dataSelector.cart.filter(data =>
        data.id === id
          ? data.quantity-- && data.price * data.quantity - 1
          : null
      );
    dispatch({ type: "REMOVE_FROM_CART", payload: deductedData });
  };


  const handleChecked = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    getSelect(newSelected)
  };

  const isSelected = (id) => selected && selected.indexOf(id) !== -1;
  const isItemSelected = isSelected(id);

  return (
    <>
      <TableRow
        key={id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row" align="center">
          <Checkbox
            sx={{ backgroundColor: "white" }}
            onClick={event => handleChecked(event, id)}
            checked={isItemSelected}
          />
        </TableCell>
        <TableCell align="center">
          <CustomTypographyWrapper>
            {title}
          </CustomTypographyWrapper>
        </TableCell>
        <TableCell align="center">
          <CustomTypographyWrapper>
            {type}
          </CustomTypographyWrapper>
        </TableCell>
        <TableCell
          align="center"
          sx={{
            display: "flex",
            alignSelf: 'center',
            justifyContent: "space-around",
            alignItems: "center",
            background: "#F6F7F8",
          }}
        >
          <IconButton
            onClick={() => handleAdd(id)}
          >
            <AddIcon color={'primary'} />
          </IconButton>
          <CustomTypographyWrapper>
            {quantity}
          </CustomTypographyWrapper>
          <IconButton
            onClick={() => handleDeletation(id)}
            disabled={quantity === 0}
          >
            <RemoveIcon color={'primary'} />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <CustomTypographyWrapper>
            {`${price * quantity}`}
          </CustomTypographyWrapper>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CustomTableRow;
