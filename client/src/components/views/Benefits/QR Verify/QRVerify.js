import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";

function QRVerify() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const classes = useStyles();
  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  return (
    <div className="mt-5">
      <Container className={classes.conatiner}>
        <Card>
          <h2 className={classes.title}>Verificar codigo QR</h2>
          <CardContent>
            <Grid>
              <div className="d-flex justify-content-center">
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <div className="d-flex justify-content-center">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="secondary"
                      onClick={onScanFile}
                    >
                      Escanear codigo QR
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <QrReader
                      ref={qrRef}
                      delay={300}
                      style={{ width: "100%" }}
                      onError={handleErrorFile}
                      onScan={handleScanFile}
                      legacyMode
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4>Codigo escaneado: {scanResultFile}</h4>
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
export default QRVerify;
