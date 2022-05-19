import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
    const token = localStorage.getItem('token');
    let location = useLocation();

    if (!token) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}
