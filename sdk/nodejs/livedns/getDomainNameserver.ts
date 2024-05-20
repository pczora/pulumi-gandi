// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getDomainNameserver(args: GetDomainNameserverArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainNameserverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gandi:livedns/getDomainNameserver:getDomainNameserver", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getDomainNameserver.
 */
export interface GetDomainNameserverArgs {
    /**
     * The FQDN of the domain
     */
    name: string;
}

/**
 * A collection of values returned by getDomainNameserver.
 */
export interface GetDomainNameserverResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The FQDN of the domain
     */
    readonly name: string;
    /**
     * A list of nameservers for the domain
     */
    readonly nameservers: string[];
}
export function getDomainNameserverOutput(args: GetDomainNameserverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainNameserverResult> {
    return pulumi.output(args).apply((a: any) => getDomainNameserver(a, opts))
}

/**
 * A collection of arguments for invoking getDomainNameserver.
 */
export interface GetDomainNameserverOutputArgs {
    /**
     * The FQDN of the domain
     */
    name: pulumi.Input<string>;
}