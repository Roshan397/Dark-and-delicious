import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { TextField } from "@mui/material";
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  message,
  Table,
  Typography,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getCart } from "./index";

function AppHeader() {
  return (
    <div className="appHeader">
     <Link to="/"> <p className="menu" type="link">Login</p></Link>
      <Link to="/profile"><p className="menu" type="link">Profile</p></Link>
        <AppCart />
    </div>
  );
}
function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[bill,setBill]=useState({
    name:"",
    email:"",
    address:"",
    billamount:"",
    userid:""
  })
  const {name,email,address,billamount,userid}=bill;
  useEffect(() => {
    getCart();
  }, []);
  const getCart = async() => {
    const result=await axios.get("http://localhost:8080/getcart");
      setCartItems(result.data);
  };
  const onInputChange = (e) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    const res =await axios.get("http://localhost:8080/getId");
    console.log(res.data);
    bill.userid=res.data;
    await axios.post("http://localhost:8080/generatebill", bill);
    await axios.delete("http://localhost:8080/deletecart");
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success("Your order has been placed successfully.");
  };
  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        count={cartItems.length}
        className="soppingCartIcon"
      >
        <ShoppingCartOutlined />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your Cart"
        contentWrapperStyle={{ width: 500 }}
      >
        <Table
          pagination={false}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (value, record) => {
                return (
                  <InputNumber
                    min={0}
                    defaultValue={value}
                    onChange={(value) => {
                      setCartItems((pre) =>
                        pre.map((cart) => {
                          if (record.id === cart.id) {
                            cart.total = cart.price * value;
                          }
                          return cart;
                        })
                      );
                    }}
                  ></InputNumber>
                );
              },
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
          ]}
          dataSource={cartItems}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            bill.billamount=total;
            return <span>Total: ${total}</span>;
          }}
        />
        <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
        >
          Checkout Your Cart
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Form onFinish={(e) => onSubmit(e)}>
        <TextField fullwidth label="Name" placeholder="Enter your Name" name="name"
        value={name}
        onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <TextField fullwidth label="Email" placeholder="Enter your email address" name="email"
        value={email}
            onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <TextField fullwidth label="Address" placeholder="Enter your address" name="address"
        value={address}
        onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
          <Form.Item>
            <Checkbox defaultChecked disabled>
              Cash on Delivery
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">
            More methods coming soon
          </Typography.Paragraph>
        <button type="submit" className="login-btn" style={{backgroundColor:"#35281E",color:"white",paddingTop:"12px",fontSize:"large"}}>confirm order</button>
        </Form>
      </Drawer>
    </div>
  );
}
export default AppHeader;