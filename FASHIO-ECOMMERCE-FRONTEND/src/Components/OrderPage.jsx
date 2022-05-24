import "./orderpage.css";
export const OrderPage = () => {
  const dateData = new Date();
  const date = dateData.getDate();
  const month = dateData.getMonth() + 1;
  const year = dateData.getFullYear();
  console.log(JSON.parse(localStorage.getItem("payment details")));
  const addressdata = JSON.parse(localStorage.getItem("payment details"));
  return (
    <div id="mainContainerOrder">
      <div>
        <h2>Thank you for your order!</h2>
        <p>
          Hello, {addressdata.name} thank you for purchasing form our store.
        </p>
      </div>
      <div id="order_container">
        <h3>Order Details</h3>
        <div>
          <div>
            <b>Order Detail</b>
          </div>
          <div>
            <b>Order ID:</b>
            {Math.floor(Math.random() * (12545562225 - 155562360)) +
              155562360}{" "}
            <br />
            <b>Date:</b> {date}/{month}/{year}
          </div>
        </div>
      </div>
      <div id="adressdiv">
        <div>
          <b> Payment Address: </b>
          <br />
          {addressdata.name} <br />
          {addressdata.address} <br />
          {addressdata.city} <br />
        </div>
        <div>
          <b> Payment Status: </b>
          <br />
          Paid
        </div>
      </div>
    </div>
  );
};
