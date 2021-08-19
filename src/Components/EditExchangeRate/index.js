import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { exchanceRate } from "../../redux/actions/exchangeRate";
import { Button } from "@material-ui/core";
import { TextField, DialogActions, DialogTitle } from "@material-ui/core";
import { DialogContent, Dialog } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EditExchangeRate = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [rateCustomize, setRateCustomize] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = ({ target }) => setRateCustomize(target.value);

    const handleChangeRate = () => {
        dispatch(exchanceRate(rateCustomize));
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Editar
                <EditIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Tasa de cambio</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        autoFocus
                        id="name"
                        type="number"
                        margin="normal"
                        label="Tasa de cambio"
                        value={rateCustomize}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleChangeRate} color="primary">
                        Cambiar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EditExchangeRate;
