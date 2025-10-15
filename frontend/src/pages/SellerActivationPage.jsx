import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          const res = await axios.post(`${server}/api/v2/shop/activation`, {
            activation_token,
          });
          console.log(res);

          // Redirect to seller login after 3 seconds
          setTimeout(() => {
            navigate("/shop-login");
          }, 3000);
        } catch (err) {
          setError(true);
        }
      };
      sendRequest();
    }
  }, [activation_token, navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired or invalid!</p>
      ) : (
        <p>Your account has been created successfully! Redirecting to login...</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
