import React, { useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const franquests = [
  {
    id: 1,
    quest: "What is the minimum amount required to open an account?",
    ans: "The minimum amount required to open an account is $100, which will be used to cover initial administrative cost and ensure a secure and stable financial foundation",
  },

  {
    id: 2,
    quest: "How do I access my account online?",
    ans: "You can access your account online by registering for our online banking service and using your username and password.",
  },
  {
    id: 3,
    quest: "What are the fees associated with maintaining an account?",
    ans: "Our fees are competitive and transparent. Please refer to our fee schedule for details.",
  },
  {
    id: 4,
    quest: "Can I deposit or withdraw funds at any branch?",
    ans: "Yes, you can deposit or withdraw funds at any of our branches but there are some limitation. For example, you can make withdrawals up to the available balance in your account by any means available, but you may not make withdrawals by creating a check drawn on your accountS.",
  },
  {
    id: 5,
    quest: "How long does it take to process a transaction?",
    ans: "Transactions are typically processed within 24hours to three days to process. This is because the transaction involves several steps including authorization, clearance and settlement. If you need faster processing times, you can consider using peer-to-peer payment apps like Venmo or Zelle, which can transfer funds between banks in a matter of minutes.",
  },
  {
    id: 6,
    quest: "Is my personal and account information secure?",
    ans: "Yes, we use state-of-the-art security measures to protect your information.",
  },
  {
    id: 7,
    quest: "Can I manage my account through mobile banking?",
    ans: "Yes, our mobile banking app allows you to manage your account on-the-go.",
  },
  {
    id: 8,
    quest: "How do I report a lost or stolen debit/credit card?",
    ans: "Please contact our customer service immediately to report a lost or stolen card.",
  },
  {
    id: 9,
    quest: "Can I set up automatic payments?",
    ans: "Yes, you can set up automatic payments through our online banking service.",
  },
  {
    id: 10,
    quest: "How do I close my account?",
    ans: "Please contact our customer service to initiate the account closure process.",
  },
];

const Faq = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const handleToggleClick = (id) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        margin: "30px 0",
      }}
    >
      <Box>
        <Typography variant="h2">Your burning questions, answered</Typography>
        <Typography
          variant="h4"
          sx={{
            margin: "20px 0",
          }}
        >
          If you have a question that isn't in our FAQs, please keep in touch
          and let us know
        </Typography>
      </Box>
      <Box>
        {franquests.map((franquest) => (
          <Box
            key={franquest.id}
            sx={{
              margin: "10px auto",
              padding: "10px 20px",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              width: "70%",
              borderRadius: "15px",
              justifyContent: "space-between",
              backgroundColor: "rgba(17, 30, 108, .1)",
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "left",
              }}
            >
              {!expandedQuestions[franquest.id] ? (
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  {franquest.quest}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "5px",
                  }}
                >
                  {franquest.ans}
                </Typography>
              )}
            </Box>
            <Box>
              <Button
                onClick={() => handleToggleClick(franquest.id)}
                variant="text"
                sx={{
                  margin: "-5px",
                }}
              >
                {expandedQuestions[franquest.id] ? "-" : "+"}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px",
        }}
      >
        <Button variant="contained" sx={{ marginRight: "25px" }}>
          See all FAQs
        </Button>
        <Button variant="outlined" sx={{ marginLeft: "25px" }}>
          <Link
          to='/contact'
            style={{
              textDecoration: "none",
            }}
          >
            Get in touch
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
export default Faq;
