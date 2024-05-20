// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/** @deprecated gandi.index/getdomain.getDomain has been deprecated in favor of gandi.domains/getdomain.getDomain */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {
    pulumi.log.warn("getDomain is deprecated: gandi.index/getdomain.getDomain has been deprecated in favor of gandi.domains/getdomain.getDomain")

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gandi:index/getDomain:getDomain", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainArgs {
    name: string;
}

/**
 * A collection of values returned by getDomain.
 */
export interface GetDomainResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly nameservers: string[];
}
/** @deprecated gandi.index/getdomain.getDomain has been deprecated in favor of gandi.domains/getdomain.getDomain */
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainResult> {
    return pulumi.output(args).apply((a: any) => getDomain(a, opts))
}

/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainOutputArgs {
    name: pulumi.Input<string>;
}
