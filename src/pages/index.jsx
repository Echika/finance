import React from 'react'

export const Home = React.lazy(() => import('./home'))
export const SignIn = React.lazy(() => import('./signin'))
export const SignUp = React.lazy(() => import('./signup'))
export const Dashboard = React.lazy(() => import('./dashboard'))