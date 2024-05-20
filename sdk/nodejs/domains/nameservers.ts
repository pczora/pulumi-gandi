// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Nameservers extends pulumi.CustomResource {
    /**
     * Get an existing Nameservers resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NameserversState, opts?: pulumi.CustomResourceOptions): Nameservers {
        return new Nameservers(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:domains/nameservers:Nameservers';

    /**
     * Returns true if the given object is an instance of Nameservers.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Nameservers {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nameservers.__pulumiType;
    }

    /**
     * The FQDN of the domain
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * A list of nameservers for the domain
     */
    public readonly nameservers!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Nameservers resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NameserversArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NameserversArgs | NameserversState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NameserversState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["nameservers"] = state ? state.nameservers : undefined;
        } else {
            const args = argsOrState as NameserversArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["nameservers"] = args ? args.nameservers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "gandi:index/nameservers:Nameservers" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Nameservers.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Nameservers resources.
 */
export interface NameserversState {
    /**
     * The FQDN of the domain
     */
    domain?: pulumi.Input<string>;
    /**
     * A list of nameservers for the domain
     */
    nameservers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Nameservers resource.
 */
export interface NameserversArgs {
    /**
     * The FQDN of the domain
     */
    domain: pulumi.Input<string>;
    /**
     * A list of nameservers for the domain
     */
    nameservers?: pulumi.Input<pulumi.Input<string>[]>;
}
