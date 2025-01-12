// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class GlueRecord extends pulumi.CustomResource {
    /**
     * Get an existing GlueRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlueRecordState, opts?: pulumi.CustomResourceOptions): GlueRecord {
        return new GlueRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:domains/glueRecord:GlueRecord';

    /**
     * Returns true if the given object is an instance of GlueRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlueRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlueRecord.__pulumiType;
    }

    /**
     * The fqdn of the record
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The fqdn unicode of the record
     */
    public /*out*/ readonly fqdnUnicode!: pulumi.Output<string>;
    /**
     * The href of the record
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * List of IP addresses
     */
    public readonly ips!: pulumi.Output<string[]>;
    /**
     * Host name of the glue record
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Domain name
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a GlueRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlueRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlueRecordArgs | GlueRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlueRecordState | undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["fqdnUnicode"] = state ? state.fqdnUnicode : undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as GlueRecordArgs | undefined;
            if ((!args || args.ips === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ips'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["fqdnUnicode"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "gandi:index/glueRecord:GlueRecord" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GlueRecord.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GlueRecord resources.
 */
export interface GlueRecordState {
    /**
     * The fqdn of the record
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The fqdn unicode of the record
     */
    fqdnUnicode?: pulumi.Input<string>;
    /**
     * The href of the record
     */
    href?: pulumi.Input<string>;
    /**
     * List of IP addresses
     */
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host name of the glue record
     */
    name?: pulumi.Input<string>;
    /**
     * Domain name
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GlueRecord resource.
 */
export interface GlueRecordArgs {
    /**
     * List of IP addresses
     */
    ips: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host name of the glue record
     */
    name?: pulumi.Input<string>;
    /**
     * Domain name
     */
    zone: pulumi.Input<string>;
}
