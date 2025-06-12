"use client";

import "react-datetime/css/react-datetime.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/summarizeFileForm.css";
import "@/styles/customRequestOnFilesForm.css";
import "@/styles/landingPageHero.scss";
import "@/styles/summary-v2-markdown.scss";
import "@/styles/summary-v2.css";
import "@/styles/summary-v3-markdown.scss";
import "@/styles/summary-v3.css";
import "@/styles/custom-request-markdown.scss";
import "@/styles/custom-request-v3-markdown.scss";
import "@/styles/custom-request.css";
import "@/styles/custom-request-v3.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import React from "react";

import { AppWrapper } from "@/context/AppContext";
import Head from "next/head";
import ErrorBoundary from "@/components/shared/errorBoundary";
import { AuthGuard } from "@/guards/AuthGuard";

import type { NextComponentType } from "next"; //Import Component type

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AdminGuard } from "@/guards/AdminGuard";

import Providers from "./providers";

// Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
  Component: NextComponentType & {
    requireAuth?: boolean;
    requireAdmin?: boolean;
  }; // add auth type
};

const App = function ({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Kalygo" />
        <meta
          property="og:description"
          content="Kalygo is a peer-2-peer escrow platform powered by Smart Contracts & AI Agents"
        />
        <meta property="og:image" content="/kalygo_new_logo-512x512.png" />
        <link rel="apple-touch-icon" href="/kalygo_new_logo-192x192.png" />
        <meta
          name="description"
          content="Kalygo is a peer-2-peer escrow platform powered by Smart Contracts & AI Agents"
        />
        <meta
          name="keywords"
          content="hobby, hobbies, ethereum, escrow, smart contracts, peer, peer-to-peer, peer to peer"
        />
      </Head>

      <ErrorBoundary>
        <Providers>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
          >
            <AppWrapper>
              {Component.requireAuth ? (
                <AuthGuard>
                  <Component {...pageProps} />
                </AuthGuard>
              ) : Component.requireAdmin ? (
                <AdminGuard>
                  <Component {...pageProps} />
                </AdminGuard>
              ) : (
                // public page
                <Component {...pageProps} />
              )}
            </AppWrapper>
          </GoogleOAuthProvider>
          <ToastContainer />
        </Providers>
      </ErrorBoundary>
    </>
  );
};

export default appWithTranslation(App);
