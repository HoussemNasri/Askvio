import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import * as yup from 'yup';
import {string} from "yup";
import {useFormik} from 'formik';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/app/hooks";
import {getAuthState, loginAsync} from "../redux/authSlice";

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const authState = useAppSelector(getAuthState)

    const handleSubmit = (email: string, password: string) => {
        dispatch(loginAsync({email, password}));
        if (authState.isAuthenticated) {
            navigate("/")
            window.location.reload()
        }

        console.log({
            email: email,
            password: password,
        });
    };

    const validationSchema = yup.object({
        email: string().email('Enter a valid email').required('Email is required'),
        password: string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit(values.email, values.password)
        },
    });

    return (
        <Container maxWidth="sm" sx={{mt: 3}}>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit}
                     sx={{mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                        sx={{alignSelf: 'flex-start'}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 2, mb: 2, height: 44}} disableElevation>
                        Sign In
                    </Button>
                    <Grid sx={{gap: 10}} container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}