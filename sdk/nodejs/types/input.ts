// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DomainAdmin {
    /**
     * City for the contact
     */
    city: pulumi.Input<string>;
    /**
     * The two letter country code for the contact
     */
    country: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: pulumi.Input<boolean>;
    /**
     * Contact email address
     */
    email: pulumi.Input<string>;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Family name of the contact
     */
    familyName: pulumi.Input<string>;
    /**
     * Given name of the contact
     */
    givenName: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: pulumi.Input<boolean>;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: pulumi.Input<string>;
    /**
     * Phone number for the contact
     */
    phone: pulumi.Input<string>;
    /**
     * The state code for the contact
     */
    state?: pulumi.Input<string>;
    /**
     * Street Address of the contact
     */
    streetAddr: pulumi.Input<string>;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: pulumi.Input<string>;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: pulumi.Input<string>;
}

export interface DomainBilling {
    /**
     * City for the contact
     */
    city: pulumi.Input<string>;
    /**
     * The two letter country code for the contact
     */
    country: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: pulumi.Input<boolean>;
    /**
     * Contact email address
     */
    email: pulumi.Input<string>;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Family name of the contact
     */
    familyName: pulumi.Input<string>;
    /**
     * Given name of the contact
     */
    givenName: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: pulumi.Input<boolean>;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: pulumi.Input<string>;
    /**
     * Phone number for the contact
     */
    phone: pulumi.Input<string>;
    /**
     * The state code for the contact
     */
    state?: pulumi.Input<string>;
    /**
     * Street Address of the contact
     */
    streetAddr: pulumi.Input<string>;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: pulumi.Input<string>;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: pulumi.Input<string>;
}

export interface DomainOwner {
    /**
     * City for the contact
     */
    city: pulumi.Input<string>;
    /**
     * The two letter country code for the contact
     */
    country: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: pulumi.Input<boolean>;
    /**
     * Contact email address
     */
    email: pulumi.Input<string>;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Family name of the contact
     */
    familyName: pulumi.Input<string>;
    /**
     * Given name of the contact
     */
    givenName: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: pulumi.Input<boolean>;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: pulumi.Input<string>;
    /**
     * Phone number for the contact
     */
    phone: pulumi.Input<string>;
    /**
     * The state code for the contact
     */
    state?: pulumi.Input<string>;
    /**
     * Street Address of the contact
     */
    streetAddr: pulumi.Input<string>;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: pulumi.Input<string>;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: pulumi.Input<string>;
}

export interface DomainTech {
    /**
     * City for the contact
     */
    city: pulumi.Input<string>;
    /**
     * The two letter country code for the contact
     */
    country: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: pulumi.Input<boolean>;
    /**
     * Contact email address
     */
    email: pulumi.Input<string>;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Family name of the contact
     */
    familyName: pulumi.Input<string>;
    /**
     * Given name of the contact
     */
    givenName: pulumi.Input<string>;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: pulumi.Input<boolean>;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: pulumi.Input<string>;
    /**
     * Phone number for the contact
     */
    phone: pulumi.Input<string>;
    /**
     * The state code for the contact
     */
    state?: pulumi.Input<string>;
    /**
     * Street Address of the contact
     */
    streetAddr: pulumi.Input<string>;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: pulumi.Input<string>;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: pulumi.Input<string>;
}
export namespace domains {
    export interface DomainAdmin {
        /**
         * City for the contact
         */
        city: pulumi.Input<string>;
        /**
         * The two letter country code for the contact
         */
        country: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: pulumi.Input<boolean>;
        /**
         * Contact email address
         */
        email: pulumi.Input<string>;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Family name of the contact
         */
        familyName: pulumi.Input<string>;
        /**
         * Given name of the contact
         */
        givenName: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: pulumi.Input<boolean>;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: pulumi.Input<string>;
        /**
         * Phone number for the contact
         */
        phone: pulumi.Input<string>;
        /**
         * The state code for the contact
         */
        state?: pulumi.Input<string>;
        /**
         * Street Address of the contact
         */
        streetAddr: pulumi.Input<string>;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: pulumi.Input<string>;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: pulumi.Input<string>;
    }

    export interface DomainBilling {
        /**
         * City for the contact
         */
        city: pulumi.Input<string>;
        /**
         * The two letter country code for the contact
         */
        country: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: pulumi.Input<boolean>;
        /**
         * Contact email address
         */
        email: pulumi.Input<string>;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Family name of the contact
         */
        familyName: pulumi.Input<string>;
        /**
         * Given name of the contact
         */
        givenName: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: pulumi.Input<boolean>;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: pulumi.Input<string>;
        /**
         * Phone number for the contact
         */
        phone: pulumi.Input<string>;
        /**
         * The state code for the contact
         */
        state?: pulumi.Input<string>;
        /**
         * Street Address of the contact
         */
        streetAddr: pulumi.Input<string>;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: pulumi.Input<string>;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: pulumi.Input<string>;
    }

    export interface DomainOwner {
        /**
         * City for the contact
         */
        city: pulumi.Input<string>;
        /**
         * The two letter country code for the contact
         */
        country: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: pulumi.Input<boolean>;
        /**
         * Contact email address
         */
        email: pulumi.Input<string>;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Family name of the contact
         */
        familyName: pulumi.Input<string>;
        /**
         * Given name of the contact
         */
        givenName: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: pulumi.Input<boolean>;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: pulumi.Input<string>;
        /**
         * Phone number for the contact
         */
        phone: pulumi.Input<string>;
        /**
         * The state code for the contact
         */
        state?: pulumi.Input<string>;
        /**
         * Street Address of the contact
         */
        streetAddr: pulumi.Input<string>;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: pulumi.Input<string>;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: pulumi.Input<string>;
    }

    export interface DomainTech {
        /**
         * City for the contact
         */
        city: pulumi.Input<string>;
        /**
         * The two letter country code for the contact
         */
        country: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: pulumi.Input<boolean>;
        /**
         * Contact email address
         */
        email: pulumi.Input<string>;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Family name of the contact
         */
        familyName: pulumi.Input<string>;
        /**
         * Given name of the contact
         */
        givenName: pulumi.Input<string>;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: pulumi.Input<boolean>;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: pulumi.Input<string>;
        /**
         * Phone number for the contact
         */
        phone: pulumi.Input<string>;
        /**
         * The state code for the contact
         */
        state?: pulumi.Input<string>;
        /**
         * Street Address of the contact
         */
        streetAddr: pulumi.Input<string>;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: pulumi.Input<string>;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: pulumi.Input<string>;
    }
}
