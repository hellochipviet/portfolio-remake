import { ChildSection, Section } from "@/components/layout/Section";
import { List } from "lucide-react";
import React from "react";

type Props = {};

export default function Handbooks({}: Props) {
  const activeHandbookClass =
    "border border-black rounded-md bg-[#F8F9FB] text-black";
  return (
    <div className="min-h-screen w-full text-black">
      <Section className="flex">
        <div className="w-full max-w-[260px]">
          <div className="flex flex-col p-6 gap-4">
            <h2 className="mx-2">Guides</h2>
            <ul className="flex flex-col gap-2">
              <li
                className={`text-[#808080] py-1 px-2 text-sm tracking-wide ${activeHandbookClass}`}
              >
                Getting Started
              </li>
              <li className="text-[#808080] py-1 px-2 text-sm tracking-wide">
                UserIntents / UserStatuses and OAuth Module Flows
              </li>
              <li className="text-[#808080] py-1 px-2 text-sm tracking-wide">
                Managing the Authorization Lifecycle
              </li>
              <li className="text-[#808080] py-1 px-2 text-sm tracking-wide">
                Testing in the Sandbox Environment
              </li>
              <li className="text-[#808080] py-1 px-2 text-sm tracking-wide">
                Recommendation for a Robust Integration
              </li>
              <li className="text-[#808080] py-1 px-2 text-sm tracking-wide">
                Routines
              </li>
            </ul>
          </div>
        </div>
        <ChildSection className="flex !p-0 min-h-screen justify-center mx-0">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
            <p className="mb-6">
              This guide will walk you through the steps to make your first
              requests to the sandbox API. Calling endpoints in production will
              follow a similar process but use different URLs.
            </p>
            <hr className="my-6" />
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Getting started with the Astra API follows a simple, four-step
              process:
            </p>
            <ul className="list-decimal list-inside ml-4 mb-6">
              <li>Create your developer account and generate API Keys.</li>
              <li>Create a test user profile.</li>
              <li>Authorize your client with the test user.</li>
              <li>
                Make a request to the API and{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  access_token
                </span>
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">Optional</h2>
            <p className="mb-4">
              To view a code-based walkthrough of the user onboarding happy path
              see our latest recipe:
            </p>
            <div className="bg-gray-100 border-l-4 border-gray-300 p-4 mb-6">
              <p>
                If you have a working Python3 environment, you can copy the code
                from this recipe and run it to quickly create a user with an{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  access_token
                </span>
              </p>
            </div>
            <hr className="my-6" />
            <h2 className="text-2xl font-semibold mb-4">
              Create your developer account
            </h2>
            <p className="mb-6">
              You will need an active developer account to use Stack's sandbox
              API.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Sign up and generate API keys
            </h3>
            <ul className="list-decimal list-inside ml-4 mb-6">
              <li>
                If you haven't already, browse to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sandbox Dashboard
                </a>
                .
              </li>
              <li>Enter your email and set a password.</li>
              <li>
                Enter your first and last name and agree to our Developer Policy
                and Terms of Service.
              </li>
              <li>
                When you click{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  Create Account
                </span>{" "}
                you will be taken to the{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  Dashboard
                </span>{" "}
                panel.
              </li>
              <li>
                On the Dashboard panel fill out the two required fields to
                generate your application's{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  client_id
                </span>{" "}
                and{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  client_secret
                </span>
                .
              </li>
              <li>
                Click the Save Changes button at the bottom of the page. The
                page will refresh and reveal a new Keys section which will
                contain the Client ID and Client Secret for your application.
              </li>
            </ul>
            <div className="bg-gray-100 border-l-4 border-gray-300 p-4 mb-6">
              <p>
                Note that Redirect URIs are used to guide Users back to a
                specific page in your application after exiting our SDK. You may
                register multiple Redirect URIs through your Developer
                Dashboard, but it's important to note that Redirect URIs must
                remain consistent in OAuth URLs when an end-user is navigating
                through our SDK.
              </p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Create user intent</h2>
            <p className="mb-6">
              To create the authorization required to make a request to the
              Astra API on behalf of an end user, you will need a test user
              profile. You can follow this process to create one.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Sign up and generate API keys
            </h3>
            <ul className="list-decimal list-inside ml-4 mb-6">
              <li>
                If you haven't already, browse to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sandbox Dashboard
                </a>
                .
              </li>
              <li>Enter your email and set a password.</li>
              <li>
                Enter your first and last name and agree to our Developer Policy
                and Terms of Service.
              </li>
              <li>
                When you click{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  Create Account
                </span>{" "}
                you will be taken to the{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  Dashboard
                </span>{" "}
                panel.
              </li>
              <li>
                On the Dashboard panel fill out the two required fields to
                generate your application's{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  client_id
                </span>{" "}
                and{" "}
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                  client_secret
                </span>
                .
              </li>
              <li>
                Click the Save Changes button at the bottom of the page. The
                page will refresh and reveal a new Keys section which will
                contain the Client ID and Client Secret for your application.
              </li>
            </ul>
            <div className="border-t border-gray-300 pt-6 mt-6 helpful">
              <span>Was this article helpful?</span>
              <div className="helpful-buttons flex justify-center mt-4">
                <button className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 transition">
                  Yes
                </button>
                <button className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 transition">
                  No
                </button>
              </div>
            </div>
          </div>
        </ChildSection>
        <div className="w-full max-w-[400px]">
          <div className="flex flex-col p-6 gap-2">
            <div className="flex gap-1 items-center">
              <List size={16} />
              <h2 className="mx-2">Table of contents</h2>
            </div>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex flex-col gap-2 py-1 px-2">
                <a className={`text-[#808080] tracking-wide py-1 px-2`}>
                  Overview
                </a>
                <ul className="ml-4 flex flex-col gap-2">
                  <li className="py-1 px-2">
                    <a className={`text-[#808080] tracking-wide`}>Optional</a>
                  </li>
                </ul>
              </li>

              <li className="flex flex-col gap-2 py-1 px-2">
                <a className={`text-[#808080] tracking-wide py-1 px-2`}>
                  Create your developer accounts
                </a>
                <ul className="ml-4 flex flex-col gap-2">
                  <li className="py-1 px-2">
                    <a className={`text-[#808080] tracking-wide`}>
                      Sign up and generate API Keys
                    </a>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col gap-2 py-1 px-2">
                <a className={`text-[#808080] tracking-wide py-1 px-2`}>
                  Create your developer accounts
                </a>
                <ul className="ml-4 flex flex-col gap-2">
                  <li className="py-1 px-2">
                    <a className={`text-[#808080] tracking-wide`}>
                      Sign up and generate API Keys
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
