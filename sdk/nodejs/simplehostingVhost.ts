// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * @deprecated gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost
 */
export class SimplehostingVhost extends pulumi.CustomResource {
    /**
     * Get an existing SimplehostingVhost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SimplehostingVhostState, opts?: pulumi.CustomResourceOptions): SimplehostingVhost {
        pulumi.log.warn("SimplehostingVhost is deprecated: gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost")
        return new SimplehostingVhost(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gandi:index/simplehostingVhost:SimplehostingVhost';

    /**
     * Returns true if the given object is an instance of SimplehostingVhost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SimplehostingVhost {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SimplehostingVhost.__pulumiType;
    }

    /**
     * The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
     */
    public readonly application!: pulumi.Output<string | undefined>;
    /**
     * The ID of the created free certificate
     */
    public /*out*/ readonly certificateId!: pulumi.Output<string>;
    /**
     * The FQDN of the Vhost
     */
    public readonly fqdn!: pulumi.Output<string>;
    /**
     * The ID of the SimpleHosting instance
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Whether to alter the linked DNS Zone
     */
    public readonly linkedDnsZoneAlteration!: pulumi.Output<boolean | undefined>;

    /**
     * Create a SimplehostingVhost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost */
    constructor(name: string, args: SimplehostingVhostArgs, opts?: pulumi.CustomResourceOptions)
    /** @deprecated gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost */
    constructor(name: string, argsOrState?: SimplehostingVhostArgs | SimplehostingVhostState, opts?: pulumi.CustomResourceOptions) {
        pulumi.log.warn("SimplehostingVhost is deprecated: gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost")
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SimplehostingVhostState | undefined;
            resourceInputs["application"] = state ? state.application : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["linkedDnsZoneAlteration"] = state ? state.linkedDnsZoneAlteration : undefined;
        } else {
            const args = argsOrState as SimplehostingVhostArgs | undefined;
            if ((!args || args.fqdn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fqdn'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["application"] = args ? args.application : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["linkedDnsZoneAlteration"] = args ? args.linkedDnsZoneAlteration : undefined;
            resourceInputs["certificateId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SimplehostingVhost.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SimplehostingVhost resources.
 */
export interface SimplehostingVhostState {
    /**
     * The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
     */
    application?: pulumi.Input<string>;
    /**
     * The ID of the created free certificate
     */
    certificateId?: pulumi.Input<string>;
    /**
     * The FQDN of the Vhost
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The ID of the SimpleHosting instance
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Whether to alter the linked DNS Zone
     */
    linkedDnsZoneAlteration?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SimplehostingVhost resource.
 */
export interface SimplehostingVhostArgs {
    /**
     * The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
     */
    application?: pulumi.Input<string>;
    /**
     * The FQDN of the Vhost
     */
    fqdn: pulumi.Input<string>;
    /**
     * The ID of the SimpleHosting instance
     */
    instanceId: pulumi.Input<string>;
    /**
     * Whether to alter the linked DNS Zone
     */
    linkedDnsZoneAlteration?: pulumi.Input<boolean>;
}