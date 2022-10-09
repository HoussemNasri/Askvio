import React from "react";
import {useAppSelector} from "../redux/app/hooks";
import {getAuthState} from "../redux/authSlice";
import {Navigate, Route, RouteProps} from "react-router-dom";


interface PrivateRouteProps extends RouteProps {
    children: React.ReactNode
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const {isAuthenticated} = useAppSelector(getAuthState)
    console.log('Is Authenticated: ' + isAuthenticated)

    return (<>
        {isAuthenticated ? children : <Navigate to="/login"/>}
    </>)
}