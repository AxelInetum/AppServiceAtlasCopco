/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig = {
/*
antigua 
        clientId: "dc90d8cc-8ed1-4b93-8378-58e2282a35eb", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/c1697c24-bf3c-4d75-992e-e39eb31dab6d", // Defaults to "https://login.microsoftonline.com/common"
*/

/*
antiguanuevalomap2
        clientId: "3481eaaa-13ff-4877-a759-817a3239bac9", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/c1697c24-bf3c-4d75-992e-e39eb31dab6d", // Defaults to "https://login.microsoftonline.com/common"
*/

/*
nueva
        clientId: "1e0a3dc8-f206-4b6a-9099-ff6ca5d8b867", // This is the ONLY mandatory field that you need to supply.
        authority: "https://login.microsoftonline.com/556e6b1f-b49d-4278-8baf-db06eeefc8e9", // Defaults to "https://login.microsoftonline.com/common"
*/
    auth: {
        clientId: "2fcdf4c3-bafa-4415-b28a-acd87a6fba3f",
        authority: "https://login.microsoftonline.com/556e6b1f-b49d-4278-8baf-db06eeefc8e9",
        redirectUri: "/MenuInicial"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    graphMe: {
        endpoint: "https://graph.microsoft.com/v1.0/me",
        scopes: ["User.Read"],
    },
    apiHello: {
        endpoint: "https://localhost:44382/api/usuario",
        scopes: ["api://dc90d8cc-8ed1-4b93-8378-58e2282a35eb/access_as_user"], // e.g. api://xxxxxx/access_as_user
    },
}
