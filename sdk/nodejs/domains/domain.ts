// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainState, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:domains/domain:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    public readonly admin!: pulumi.Output<outputs.domains.DomainAdmin>;
    /**
     * Should the domain autorenew
     */
    public readonly autorenew!: pulumi.Output<boolean | undefined>;
    public readonly billing!: pulumi.Output<outputs.domains.DomainBilling>;
    /**
     * The FQDN of the domain
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of nameservers for the domain
     *
     * @deprecated This nameservers attribute will be removed on next major release: the nameservers resource has to be used instead.
See https://github.com/go-gandi/terraform-provider-gandi/issues/88 for details.
     */
    public readonly nameservers!: pulumi.Output<string[] | undefined>;
    public readonly owner!: pulumi.Output<outputs.domains.DomainOwner>;
    /**
     * A list of tags attached to the domain
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly tech!: pulumi.Output<outputs.domains.DomainTech>;

    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainArgs | DomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainState | undefined;
            resourceInputs["admin"] = state ? state.admin : undefined;
            resourceInputs["autorenew"] = state ? state.autorenew : undefined;
            resourceInputs["billing"] = state ? state.billing : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameservers"] = state ? state.nameservers : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tech"] = state ? state.tech : undefined;
        } else {
            const args = argsOrState as DomainArgs | undefined;
            if ((!args || args.owner === undefined) && !opts.urn) {
                throw new Error("Missing required property 'owner'");
            }
            resourceInputs["admin"] = args ? args.admin : undefined;
            resourceInputs["autorenew"] = args ? args.autorenew : undefined;
            resourceInputs["billing"] = args ? args.billing : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameservers"] = args ? args.nameservers : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tech"] = args ? args.tech : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "gandi:index/domain:Domain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Domain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Domain resources.
 */
export interface DomainState {
    admin?: pulumi.Input<inputs.domains.DomainAdmin>;
    /**
     * Should the domain autorenew
     */
    autorenew?: pulumi.Input<boolean>;
    billing?: pulumi.Input<inputs.domains.DomainBilling>;
    /**
     * The FQDN of the domain
     */
    name?: pulumi.Input<string>;
    /**
     * A list of nameservers for the domain
     *
     * @deprecated This nameservers attribute will be removed on next major release: the nameservers resource has to be used instead.
See https://github.com/go-gandi/terraform-provider-gandi/issues/88 for details.
     */
    nameservers?: pulumi.Input<pulumi.Input<string>[]>;
    owner?: pulumi.Input<inputs.domains.DomainOwner>;
    /**
     * A list of tags attached to the domain
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tech?: pulumi.Input<inputs.domains.DomainTech>;
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    admin?: pulumi.Input<inputs.domains.DomainAdmin>;
    /**
     * Should the domain autorenew
     */
    autorenew?: pulumi.Input<boolean>;
    billing?: pulumi.Input<inputs.domains.DomainBilling>;
    /**
     * The FQDN of the domain
     */
    name?: pulumi.Input<string>;
    /**
     * A list of nameservers for the domain
     *
     * @deprecated This nameservers attribute will be removed on next major release: the nameservers resource has to be used instead.
See https://github.com/go-gandi/terraform-provider-gandi/issues/88 for details.
     */
    nameservers?: pulumi.Input<pulumi.Input<string>[]>;
    owner: pulumi.Input<inputs.domains.DomainOwner>;
    /**
     * A list of tags attached to the domain
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tech?: pulumi.Input<inputs.domains.DomainTech>;
}
