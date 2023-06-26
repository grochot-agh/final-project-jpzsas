import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<GoogleOAuthProvider clientId="388485917211-mu8an5kq7nhgjm3pbl1tpn41hlufu3hp.apps.googleusercontent.com">
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</GoogleOAuthProvider>
);
