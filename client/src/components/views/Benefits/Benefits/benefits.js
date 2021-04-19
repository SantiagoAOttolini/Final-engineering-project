import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import QRCode from "qrcode";

function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const classes = useStyles();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <Container className={classes.conatiner}>
        <Card>
          <h2 className={classes.title}>
            Genera tu codigo QR para obtener tu beneficio
          </h2>
          <CardContent>
            <Grid>
              <div className="d-flex justify-content-center">
                <Grid>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Elige tu combo</InputLabel>
                    <Select onChange={(e) => setText(e.target.value)}>
                      <MenuItem value={"Combo uno"}>Combo uno</MenuItem>
                      <MenuItem value={"Combo dos"}>Combo dos</MenuItem>
                      <MenuItem value={"Combo tres"}>Combo tres</MenuItem>
                      <MenuItem value={"Combo cuatro"}>Combo cuatro</MenuItem>
                      <MenuItem value={"Combo cinco"}>Combo cinco</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="d-flex justify-content-center">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="primary"
                      onClick={() => generateQrCode()}
                    >
                      Generar
                    </Button>
                  </div>

                  <div className="d-flex justify-content-center">
                    {imageUrl ? (
                      <a href={imageUrl} download>
                        <img src={imageUrl} alt="img" />
                      </a>
                    ) : null}
                  </div>
                </Grid>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  formControl: {
    minWidth: 200,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(89, 165, 200)",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
export default App;
