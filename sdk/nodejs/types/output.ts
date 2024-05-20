// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DomainAdmin {
    /**
     * City for the contact
     */
    city: string;
    /**
     * The two letter country code for the contact
     */
    country: string;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: boolean;
    /**
     * Contact email address
     */
    email: string;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: {[key: string]: string};
    /**
     * Family name of the contact
     */
    familyName: string;
    /**
     * Given name of the contact
     */
    givenName: string;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: boolean;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: string;
    /**
     * Phone number for the contact
     */
    phone: string;
    /**
     * The state code for the contact
     */
    state?: string;
    /**
     * Street Address of the contact
     */
    streetAddr: string;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: string;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: string;
}

export interface DomainBilling {
    /**
     * City for the contact
     */
    city: string;
    /**
     * The two letter country code for the contact
     */
    country: string;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: boolean;
    /**
     * Contact email address
     */
    email: string;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: {[key: string]: string};
    /**
     * Family name of the contact
     */
    familyName: string;
    /**
     * Given name of the contact
     */
    givenName: string;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: boolean;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: string;
    /**
     * Phone number for the contact
     */
    phone: string;
    /**
     * The state code for the contact
     */
    state?: string;
    /**
     * Street Address of the contact
     */
    streetAddr: string;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: string;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: string;
}

export interface DomainOwner {
    /**
     * City for the contact
     */
    city: string;
    /**
     * The two letter country code for the contact
     */
    country: string;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: boolean;
    /**
     * Contact email address
     */
    email: string;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: {[key: string]: string};
    /**
     * Family name of the contact
     */
    familyName: string;
    /**
     * Given name of the contact
     */
    givenName: string;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: boolean;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: string;
    /**
     * Phone number for the contact
     */
    phone: string;
    /**
     * The state code for the contact
     */
    state?: string;
    /**
     * Street Address of the contact
     */
    streetAddr: string;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: string;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: string;
}

export interface DomainTech {
    /**
     * City for the contact
     */
    city: string;
    /**
     * The two letter country code for the contact
     */
    country: string;
    /**
     * Whether or not to obfuscate contact data in WHOIS
     */
    dataObfuscated?: boolean;
    /**
     * Contact email address
     */
    email: string;
    /**
     * Extra parameters, needed for some jurisdictions
     */
    extraParameters?: {[key: string]: string};
    /**
     * Family name of the contact
     */
    familyName: string;
    /**
     * Given name of the contact
     */
    givenName: string;
    /**
     * Whether or not to obfuscate contact email in WHOIS
     */
    mailObfuscated?: boolean;
    /**
     * The legal name of the organisation. Required for types other than person
     */
    organisation?: string;
    /**
     * Phone number for the contact
     */
    phone: string;
    /**
     * The state code for the contact
     */
    state?: string;
    /**
     * Street Address of the contact
     */
    streetAddr: string;
    /**
     * One of 'person', 'company', 'association', 'public body', or 'reseller'
     */
    type: string;
    /**
     * Postal Code/Zipcode of the contact
     */
    zip: string;
}

export namespace domains {
    export interface DomainAdmin {
        /**
         * City for the contact
         */
        city: string;
        /**
         * The two letter country code for the contact
         */
        country: string;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: boolean;
        /**
         * Contact email address
         */
        email: string;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: {[key: string]: string};
        /**
         * Family name of the contact
         */
        familyName: string;
        /**
         * Given name of the contact
         */
        givenName: string;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: boolean;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: string;
        /**
         * Phone number for the contact
         */
        phone: string;
        /**
         * The state code for the contact
         */
        state?: string;
        /**
         * Street Address of the contact
         */
        streetAddr: string;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: string;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: string;
    }

    export interface DomainBilling {
        /**
         * City for the contact
         */
        city: string;
        /**
         * The two letter country code for the contact
         */
        country: string;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: boolean;
        /**
         * Contact email address
         */
        email: string;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: {[key: string]: string};
        /**
         * Family name of the contact
         */
        familyName: string;
        /**
         * Given name of the contact
         */
        givenName: string;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: boolean;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: string;
        /**
         * Phone number for the contact
         */
        phone: string;
        /**
         * The state code for the contact
         */
        state?: string;
        /**
         * Street Address of the contact
         */
        streetAddr: string;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: string;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: string;
    }

    export interface DomainOwner {
        /**
         * City for the contact
         */
        city: string;
        /**
         * The two letter country code for the contact
         */
        country: string;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: boolean;
        /**
         * Contact email address
         */
        email: string;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: {[key: string]: string};
        /**
         * Family name of the contact
         */
        familyName: string;
        /**
         * Given name of the contact
         */
        givenName: string;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: boolean;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: string;
        /**
         * Phone number for the contact
         */
        phone: string;
        /**
         * The state code for the contact
         */
        state?: string;
        /**
         * Street Address of the contact
         */
        streetAddr: string;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: string;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: string;
    }

    export interface DomainTech {
        /**
         * City for the contact
         */
        city: string;
        /**
         * The two letter country code for the contact
         */
        country: string;
        /**
         * Whether or not to obfuscate contact data in WHOIS
         */
        dataObfuscated?: boolean;
        /**
         * Contact email address
         */
        email: string;
        /**
         * Extra parameters, needed for some jurisdictions
         */
        extraParameters?: {[key: string]: string};
        /**
         * Family name of the contact
         */
        familyName: string;
        /**
         * Given name of the contact
         */
        givenName: string;
        /**
         * Whether or not to obfuscate contact email in WHOIS
         */
        mailObfuscated?: boolean;
        /**
         * The legal name of the organisation. Required for types other than person
         */
        organisation?: string;
        /**
         * Phone number for the contact
         */
        phone: string;
        /**
         * The state code for the contact
         */
        state?: string;
        /**
         * Street Address of the contact
         */
        streetAddr: string;
        /**
         * One of 'person', 'company', 'association', 'public body', or 'reseller'
         */
        type: string;
        /**
         * Postal Code/Zipcode of the contact
         */
        zip: string;
    }

}
