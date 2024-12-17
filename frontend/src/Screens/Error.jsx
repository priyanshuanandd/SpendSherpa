import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6 py-8">
      <h1 className="text-5xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl text-primary-content mb-2">Page Not Found</h2>
      <p className="text-base-content mb-6">
        Oops! The page you are looking for doesn’t exist or an error occurred.
      </p>
      <img
        src="https://c.tenor.com/gK32v_OWs0kAAAAd/tenor.gif"
        alt="Sad cat indicating error"
        className="w-1/2 max-w-sm rounded-lg mb-6 shadow-md"
      />

      <Link to="/home" className="btn btn-primary">
        Go to Homepage
      </Link>
    </div>
  );
}
