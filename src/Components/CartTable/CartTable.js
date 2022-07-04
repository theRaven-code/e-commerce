import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Backdrop, Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomTableRow from "../CustomTableRow/CustomTableRow";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const CustomHeaderTypographyWrapper = ({ children }) => {
  return (
    <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "30px" }}>
      {children}
    </Typography>
  );
};

const CustomBackdrop = ({ checkoutStatus, checkoutHandler }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Backdrop
      sx={{ backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={checkoutStatus}
      onClick={handleClick}
    >
      <Box
        sx={{
          width: '70vh',
          padding: 5,
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
          borderRadius: 5
        }}
      >
        <h1>
          Thank You for purchasing from us!
        </h1>
        <p>
          Adding more features Soon;)
        </p>
      </Box>
    </Backdrop>
  )
}

const CustomCheckoutBtn = ({ checkoutHandler }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 2
      }}
      onClick={checkoutHandler}
    >
      <Button
        variant="contained"
        sx={{
          color: "white",
          alignSelf: "center",
          padding: '10px 60px'
        }}
      >
        <Typography
          sx={{
            textTransform: 'capitalize'
          }}
        >
          Check out
        </Typography>
      </Button>
    </Box>
  )
}

const CartTable = () => {
  const [getSelected, setSelect] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const dispatch = useDispatch();
  const dataSelector = useSelector(state => state.cartReducer);

  const getData = dataSelector && dataSelector.cart;

  const handleDeduct = () => {
    const getData = dataSelector && dataSelector.cart
    let deductedData = getSelected.map(x => getData.splice(getData.findIndex(e => e.id === x), 1))
    setSelect([])
    setDeleted(true)
    dispatch({ type: "REMOVE_FROM_CART", payload: deductedData });
  };

  const handleGetSelect = (id) => {
    const selectedIndex = getSelected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(getSelected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(getSelected.slice(1));
    } else if (selectedIndex === getSelected.length - 1) {
      newSelected = newSelected.concat(getSelected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(getSelected.slice(0, selectedIndex), getSelected.slice(selectedIndex + 1));
    }
    setSelect(newSelected)
  }

  useEffect(() => {
    console.log(checkoutStatus)
  }, [checkoutStatus])

  const checkoutHandler = () => {
    setCheckoutStatus(!checkoutStatus);
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          padding: 5,
          mt: 5,
          width: visualViewport.width,
          alignSelf: "center",
        }}
        elevation={0}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 34,
            padding: 4,
            marginBottom: 3,
          }}
        >
          {getData && getData.length > 0 ?
            'Shopping Bag' : 'Nothing in the cart yet :('}
        </Typography>

        {getData && getData.length > 0 &&
          <>
            <Table sx={{ minWidth: 450 }}>
              <TableHead>
                <TableRow hover>
                  <TableCell align="center">
                    <CustomHeaderTypographyWrapper >
                      SELECT
                    </CustomHeaderTypographyWrapper>
                  </TableCell>
                  <TableCell align="center">
                    <CustomHeaderTypographyWrapper>
                      PRODUCT
                    </CustomHeaderTypographyWrapper>
                  </TableCell>
                  <TableCell align="center">
                    <CustomHeaderTypographyWrapper>
                      TYPE
                    </CustomHeaderTypographyWrapper>
                  </TableCell>
                  <TableCell align="center">
                    <CustomHeaderTypographyWrapper>
                      QUANTITY
                    </CustomHeaderTypographyWrapper>
                  </TableCell>
                  <TableCell align="center">
                    <CustomHeaderTypographyWrapper>
                      AMOUNT
                    </CustomHeaderTypographyWrapper>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getData.length > 0 &&
                  getData.map(data =>
                    <CustomTableRow {...data} getSelect={(id) => handleGetSelect(id)} deleted={deleted} />
                  )
                }
                <TableRow>
                  <TableCell align="center">
                    <Button>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "red",
                          textTransform: "capitalize",
                          fontSize: 16,
                          fontWeight: 400,
                        }}
                        onClick={handleDeduct}
                      >
                        Delete item
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell />
                  <TableCell />
                  <TableCell align="right">
                    <Typography variant="h5" sx={{ fontSize: 24, lineHeight: '36px' }}>
                      TOTAL
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h5" sx={{ fontSize: 24, lineHeight: '36px' }}>
                      {getData.length > 0 &&
                        getData
                          .map(item => item.price * item.quantity)
                          .reduce((prev, curr) => prev + curr, 0)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <CustomCheckoutBtn
              checkoutHandler={checkoutHandler}
            />
          </>}
        <CustomBackdrop
          checkoutStatus={checkoutStatus}
          checkoutHandler={checkoutHandler}
        />
      </TableContainer>
    </>
  );
};

export default CartTable;
