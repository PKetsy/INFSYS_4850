// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import { useFirebase } from 'react-redux-firebase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function AdminLogin() {
//   const classes = useStyles();
//   const firebase = useFirebase();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     firebase
//       .login({ email, password })
//       .catch((error) => console.log('Error:', error));
//   };

//   return (
//     <Box className={classes.root}>
//       <form noValidate onSubmit={handleLogin}>
//         <Typography variant="h5" component="h1" align="center">
//           Admin Login
//         </Typography>
//         <TextField
//           label="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           variant="outlined"
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           variant="outlined"
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Login
//         </Button>
//       </form>
//       <Box mt={2}>
//         <Typography align="center">
//           Don't have an account? <Link to="/admin/signup">Sign up</Link>
//         </Typography>
//       </Box>
//       <Box mt={2}>
//         <Typography align="center">
//           <Link to="/admin/reset-password">Reset password</Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
