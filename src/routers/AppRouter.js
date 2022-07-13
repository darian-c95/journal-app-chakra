import { Box, Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,  
    Redirect 
} from 'react-router-dom';

import {firebase} from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'; 
import { PrivateRoute } from './PrivateRoute';

import { login } from '../actions/auth';
import { SidebarRoutes } from './SidebarRoutes';
import { PublicRoute } from './PublicRoute'; 
import { startLoadingNotes } from '../actions/notes'; 


export const AppRouter = () => {   

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      
        firebase.auth().onAuthStateChanged( async(user) => {
            
            if(user?.uid) { 
                dispatch(login(user.uid, user.displayName, user.email));
                setIsLoggedIn(true);
 
                dispatch(startLoadingNotes(user.uid)); 

            } else {
                setIsLoggedIn(false);
            }

            setCheking(false);
            
        })
        
    }, [dispatch, setCheking, setIsLoggedIn]);

    if(cheking) {
        return (
            <Flex  
                bg='#F7FAFC'
                h='100vh'   
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Flex>
        )
    }
    


    return (
        <Router>
            <Box>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={isLoggedIn}
                        path="/auth" 
                        component={ AuthRouter }
                    />

                    <PrivateRoute  
                        isAuthenticated={isLoggedIn}
                        path="/" 
                        component={ SidebarRoutes }
                    /> 

                    <Redirect to="/auth/login" />
                </Switch>
            </Box>
        </Router>
    )
}
