// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("gandi");

/**
 * Prevent the Domain provider from taking certain actions
 */
export declare const dryRun: boolean | undefined;
Object.defineProperty(exports, "dryRun", {
    get() {
        return __config.getObject<boolean>("dryRun");
    },
    enumerable: true,
});

/**
 * (DEPRECATED) A Gandi API key
 */
export declare const key: string | undefined;
Object.defineProperty(exports, "key", {
    get() {
        return __config.get("key");
    },
    enumerable: true,
});

/**
 * A Gandi API Personal Access Token
 */
export declare const personalAccessToken: string | undefined;
Object.defineProperty(exports, "personalAccessToken", {
    get() {
        return __config.get("personalAccessToken");
    },
    enumerable: true,
});

/**
 * (DEPRECATED) A Gandi Sharing ID
 */
export declare const sharingId: string | undefined;
Object.defineProperty(exports, "sharingId", {
    get() {
        return __config.get("sharingId");
    },
    enumerable: true,
});

/**
 * The Gandi API URL
 */
export declare const url: string | undefined;
Object.defineProperty(exports, "url", {
    get() {
        return __config.get("url");
    },
    enumerable: true,
});

