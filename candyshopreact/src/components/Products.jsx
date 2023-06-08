import {Badge,Button,Card,Image,List,Rate,Typography} from "antd";
  import { useEffect, useState } from "react";
  import "../App.css";
import axios from "axios";
  
  function Products() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      getAllProducts();
    }, []);
     const getAllProducts = async() => {
      const result=await axios.get("http://localhost:8080/getproducts");
      setItems(result.data);
      };
  
    return (
      <div className="productsContainer">
          
        <List
          grid={{ column: 3 }}
          renderItem={(product, index) => {
            return (
              <Badge.Ribbon
                className="itemCardBadge"
                text={`${product.discountpercentage}% Off`}
                color="#9D1D27"
              >
                <Card
                  className="itemCard"
                  title={product.title}
                  key={index}
            
                  cover={
                    <Image className="itemCardImage" src={product.thumbnail} />
                  }
                  actions={[
                    <Rate allowHalf disabled value={product.rating} />,
                    <AddToCartButton item={product} />,
                  ]}
                >
                  <Card.Meta
                    title={
                      <Typography.Paragraph>
                        Price: Rs.{product.price}{" "}
                        <Typography.Text delete type="danger">
                          Rs.
                          {parseFloat(
                            product.price +
                              (product.price * product.discountpercentage) / 100
                          ).toFixed(2)}
                        </Typography.Text>
                      </Typography.Paragraph>
                    }
                    description={
                      <Typography.Paragraph
                        ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                      >
                        {product.description}
                      </Typography.Paragraph>
                    }
                  ></Card.Meta>
                </Card>
              </Badge.Ribbon>
            );
          }}
          dataSource={items}
        ></List>
      </div>
    );
  }
  function AddToCartButton({ item }) {
    const[cart,setCart]=useState({
      "title":"",
      "price":"",
      "quantity":1,
      "total":""

    });
    const {title,price,quantity,total}=cart;
    const addProductToCart = async() => {
      cart.title=item.title;
      cart.price=item.price;
      cart.total=item.price;
      await axios.post("http://localhost:8080/additems",cart);
    };
    return (
      <Button
        type="link"
        onClick={() => {
          addProductToCart();
        }}
      >
        Add to Cart
      </Button>
    );
  }
  


  export default Products;