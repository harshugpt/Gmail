import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MailDetail = () => {
  const { id } = useParams();
  const [mail, setMail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123"
        );
        const data = response.data;
        const foundMail = data.find((mail) => mail.id === id);
        setMail(foundMail);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!mail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Mail Detail</h1>
      <h3>{mail.subject}</h3>
      <p>{mail.body}</p>
    </div>
  );
};

export default MailDetail;
