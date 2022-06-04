import { Route,Link, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import { useState } from 'react';
import { AddPoster } from './posteritem/AddPoster';
import { Editposter } from './posteritem/Editposter';
import { Displayposter } from './posteritem/Displayposter';
import { Viewposter } from './posteritem/Viewposter';
import { Adduser } from './useritem/Adduser';
import { Edituser } from './useritem/Edituser';
import { Displayuser } from './useritem/Displayuser';
import { Viewuser } from './useritem/Viewuser';
import {Login} from './login';
import {Signup} from './signpage';
export function Mainmeun() {
  return (
    <ul>
      <Box sx={{ width: 900 }}>
        <div className="menu">
          <Link to="/poster" className='head1'>Entertenment app</Link>
          <Link to="/poster" className='head1'>Home</Link>
          <Link to="/addposter" className='head1'>AddPost</Link>

          <Link to="/user" className='head1'>user</Link>
          <Link to="/adduser" className='head1'>Adduser</Link>
          <Link to="/user/Signup" className='head1'>Signup</Link>
          <Link to="/user/Login" className='head1'>loginpage</Link>

        </div>
      </Box>
      <Switch>
        <Route path="/poster/edit/:pid"><Editposter/> </Route>
        <Route path="/poster/:pid"><Viewposter/> </Route>
        <Route path="/addposter"><AddPoster/> </Route>
        <Route path="/poster"><Displayposter/> </Route>

        <Route path="/user/edit/:id"><Edituser/> </Route>
        <Route path="/user/:id"><Viewuser/> </Route>
        <Route path="/adduser"><Adduser/> </Route>
        <Route path="/user"><Displayuser/> </Route>
        <Route path="/user/login"><Login/> </Route>
        <Route path="/user/Signup"><Signup/> </Route>
      </Switch>
    </ul>
  );
}
