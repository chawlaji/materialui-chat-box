import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton,
  TextField
} from "@mui/material";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";
import "./demo.css";

const card = (
  <React.Fragment>
    <CardHeader class="chat-header" title="Q &A" />

    <CardContent class="chat-messages">
      <div class="message-sent">
        <p>Hi, give my details</p>
      </div>
      <div className="answer">
        <div className="feedback">
          <IconButton>
            <ThumbUpRoundedIcon />
          </IconButton>
          <IconButton>
            <ThumbDownRoundedIcon />
          </IconButton>
        </div>
        <div class="message-received">
          <p>Hello, here are your details</p>
        </div>
      </div>
      <div class="message-sent">
        <p>Hi, give my details</p>
      </div>
      <div className="answer">
        <div className="feedback">
          <IconButton>
            <ThumbUpRoundedIcon />
          </IconButton>
          <IconButton>
            <ThumbDownRoundedIcon />
          </IconButton>
        </div>
        <div class="message-received">
          <p>Hello, here are your details</p>
        </div>
      </div>
      <div class="message-sent">
        <p>Hi, give my details</p>
      </div>
      <div className="answer">
        <div className="feedback">
          <IconButton>
            <ThumbUpRoundedIcon />
          </IconButton>
          <IconButton>
            <ThumbDownRoundedIcon />
          </IconButton>
        </div>
        <div class="message-received">
          <p>Hello, here are your details</p>
        </div>
      </div>
    </CardContent>

    <CardActionArea>
      <form class="chat-form">
        <TextField
          fullWidth label="Please type your question here" id="fullWidth"
          helper-text="s"
        />
        <IconButton size="large">
          <FindInPageTwoToneIcon />
        </IconButton>
      </form>
    </CardActionArea>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Card variant="outlined" class="chat-container">
      {card}
    </Card>
  );
}
