import { React, useState } from "react";
import './Registration.css';
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material"
import hands from '../media/iPhone 12 Pro (Wooden Hands).svg'
// import ico_sign from "../media/ico_sign.svg"

const Registration = () => {
    const [checked, setChange] = useState(true)
    const handleChange = (event) => {
        setChange(event.target.checked);
    };


    return (
        <div className="registration_content">
            <div className="registration_left_side">

                <h2 className="title_signup">Регистрация</h2>

                <TextField fullWidth id="login_input" label="Логин" variant="outlined" style={{}} />

                <TextField fullWidth id="password_input" label="Пароль" type="password" variant="outlined" style={{ marginTop: 15, }} />
                <TextField fullWidth id="password_input" label="Повторите пароль" type="password" variant="outlined" style={{ marginTop: 15, }} />

                <FormControlLabel style={{ fontFamily: 'Inter-Regular' }}
                    control={
                        <Checkbox checked={checked} onChange={handleChange} name="is_consul" />
                    }
                    label="Я консультант"
                />

                <Button style={{ textTransform: 'none', marginTop: 15, backgroundColor: "#39B6EC", }} variant="contained" disableElevation>
                    Создать
                </Button>
                <p>Есть аккаунт? Войти</p>

            </div>

            <div className="registration_right_side">
                <img style={{ width: 650, height: 650, position: 'absolute', bottom: 0, marginLeft: 'auto', left: '45%' }} src={hands} alt=""></img>
            </div>

        </div>

    )

}

export default Registration