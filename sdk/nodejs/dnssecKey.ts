// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * @deprecated gandi.index/dnsseckey.DnssecKey has been deprecated in favor of gandi.domains/dnsseckey.DNSSecKey
 */
export class DnssecKey extends pulumi.CustomResource {
    /**
     * Get an existing DnssecKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnssecKeyState, opts?: pulumi.CustomResourceOptions): DnssecKey {
        pulumi.log.warn("DnssecKey is deprecated: gandi.index/dnsseckey.DnssecKey has been deprecated in favor of gandi.domains/dnsseckey.DNSSecKey")
        return new DnssecKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:index/dnssecKey:DnssecKey';

    /**
     * Returns true if the given object is an instance of DnssecKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnssecKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnssecKey.__pulumiType;
    }

    /**
     * DNSSEC algorithm type
     */
    public readonly algorithm!: pulumi.Output<number>;
    /**
     * Domain name
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * DNSSEC public key
     */
    public readonly publicKey!: pulumi.Output<string>;
    /**
     * DNSSEC key type
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a DnssecKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated gandi.index/dnsseckey.DnssecKey has been deprecated in favor of gandi.domains/dnsseckey.DNSSecKey */
    constructor(name: string, args: DnssecKeyArgs, opts?: pulumi.CustomResourceOptions)
    /** @deprecated gandi.index/dnsseckey.DnssecKey has been deprecated in favor of gandi.domains/dnsseckey.DNSSecKey */
    constructor(name: string, argsOrState?: DnssecKeyArgs | DnssecKeyState, opts?: pulumi.CustomResourceOptions) {
        pulumi.log.warn("DnssecKey is deprecated: gandi.index/dnsseckey.DnssecKey has been deprecated in favor of gandi.domains/dnsseckey.DNSSecKey")
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnssecKeyState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DnssecKeyArgs | undefined;
            if ((!args || args.algorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'algorithm'");
            }
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.publicKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicKey'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnssecKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DnssecKey resources.
 */
export interface DnssecKeyState {
    /**
     * DNSSEC algorithm type
     */
    algorithm?: pulumi.Input<number>;
    /**
     * Domain name
     */
    domain?: pulumi.Input<string>;
    /**
     * DNSSEC public key
     */
    publicKey?: pulumi.Input<string>;
    /**
     * DNSSEC key type
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DnssecKey resource.
 */
export interface DnssecKeyArgs {
    /**
     * DNSSEC algorithm type
     */
    algorithm: pulumi.Input<number>;
    /**
     * Domain name
     */
    domain: pulumi.Input<string>;
    /**
     * DNSSEC public key
     */
    publicKey: pulumi.Input<string>;
    /**
     * DNSSEC key type
     */
    type: pulumi.Input<string>;
}