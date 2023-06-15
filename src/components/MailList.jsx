import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MailList = () => {
  const { tag } = useParams();
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123"
        );
        const data = response.data;
        if (tag) {
          const filteredMails = data.filter((mail) => mail.tag === tag);
          setMails(filteredMails);
        } else {
          setMails(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [tag]);

  return (
    <div>
      <h1>Mail List</h1>
      {mails.map((mail) => (
        <div key={mail.id}>
          <h3>
            <Link to={`/${mail.tag}/${mail.id}`}>{mail.subject}</Link>
          </h3>
          <p>{mail.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MailList;
