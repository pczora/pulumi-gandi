// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * @deprecated gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record
 */
export class LivednsRecord extends pulumi.CustomResource {
    /**
     * Get an existing LivednsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LivednsRecordState, opts?: pulumi.CustomResourceOptions): LivednsRecord {
        pulumi.log.warn("LivednsRecord is deprecated: gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record")
        return new LivednsRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:index/livednsRecord:LivednsRecord';

    /**
     * Returns true if the given object is an instance of LivednsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LivednsRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LivednsRecord.__pulumiType;
    }

    /**
     * The href of the record
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * Define if the record can be modified outside Terraform (this currently only works for TXT records)
     */
    public readonly mutable!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the record
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The TTL of the record
     */
    public readonly ttl!: pulumi.Output<number>;
    /**
     * The type of the record
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * A list of values of the record
     */
    public readonly values!: pulumi.Output<string[]>;
    /**
     * The FQDN of the domain
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a LivednsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record */
    constructor(name: string, args: LivednsRecordArgs, opts?: pulumi.CustomResourceOptions)
    /** @deprecated gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record */
    constructor(name: string, argsOrState?: LivednsRecordArgs | LivednsRecordState, opts?: pulumi.CustomResourceOptions) {
        pulumi.log.warn("LivednsRecord is deprecated: gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record")
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LivednsRecordState | undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["mutable"] = state ? state.mutable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["values"] = state ? state.values : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as LivednsRecordArgs | undefined;
            if ((!args || args.ttl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ttl'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.values === undefined) && !opts.urn) {
                throw new Error("Missing required property 'values'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["mutable"] = args ? args.mutable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["values"] = args ? args.values : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["href"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LivednsRecord.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LivednsRecord resources.
 */
export interface LivednsRecordState {
    /**
     * The href of the record
     */
    href?: pulumi.Input<string>;
    /**
     * Define if the record can be modified outside Terraform (this currently only works for TXT records)
     */
    mutable?: pulumi.Input<boolean>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    /**
     * The TTL of the record
     */
    ttl?: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type?: pulumi.Input<string>;
    /**
     * A list of values of the record
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The FQDN of the domain
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LivednsRecord resource.
 */
export interface LivednsRecordArgs {
    /**
     * Define if the record can be modified outside Terraform (this currently only works for TXT records)
     */
    mutable?: pulumi.Input<boolean>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    /**
     * The TTL of the record
     */
    ttl: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type: pulumi.Input<string>;
    /**
     * A list of values of the record
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The FQDN of the domain
     */
    zone: pulumi.Input<string>;
}
