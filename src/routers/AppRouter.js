import { Box } from '@chakra-ui/react';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route 
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter'; 
import { SidebarRoutes } from './SidebarRoutes';


export const AppRouter = () => { 

    return (
        <Router>
            <Box>
                <Switch>
                    <Route path="/auth" component={ AuthRouter }/>

                    <Route path="/" component={ SidebarRoutes }/>   
                </Switch>
            </Box>
        </Router>
    )
}
