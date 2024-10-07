/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as clerk from "../clerk.js";
import type * as crons from "../crons.js";
import type * as files from "../files.js";
import type * as handlers_clerk from "../handlers/clerk.js";
import type * as handlers_files from "../handlers/files.js";
import type * as handlers_http from "../handlers/http.js";
import type * as handlers_stripe from "../handlers/stripe.js";
import type * as handlers_thumbnailPolls from "../handlers/thumbnailPolls.js";
import type * as handlers_users from "../handlers/users.js";
import type * as http from "../http.js";
import type * as lib_convexEnv from "../lib/convexEnv.js";
import type * as lib_env from "../lib/env.js";
import type * as lib_helpers from "../lib/helpers.js";
import type * as lib_rateLimits from "../lib/rateLimits.js";
import type * as lib_session from "../lib/session.js";
import type * as stripe from "../stripe.js";
import type * as thumbnailPolls from "../thumbnailPolls.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  clerk: typeof clerk;
  crons: typeof crons;
  files: typeof files;
  "handlers/clerk": typeof handlers_clerk;
  "handlers/files": typeof handlers_files;
  "handlers/http": typeof handlers_http;
  "handlers/stripe": typeof handlers_stripe;
  "handlers/thumbnailPolls": typeof handlers_thumbnailPolls;
  "handlers/users": typeof handlers_users;
  http: typeof http;
  "lib/convexEnv": typeof lib_convexEnv;
  "lib/env": typeof lib_env;
  "lib/helpers": typeof lib_helpers;
  "lib/rateLimits": typeof lib_rateLimits;
  "lib/session": typeof lib_session;
  stripe: typeof stripe;
  thumbnailPolls: typeof thumbnailPolls;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
