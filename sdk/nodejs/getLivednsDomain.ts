// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/** @deprecated gandi.index/getlivednsdomain.getLivednsDomain has been deprecated in favor of gandi.livedns/getdomain.getDomain */
export function getLivednsDomain(args: GetLivednsDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetLivednsDomainResult> {
    pulumi.log.warn("getLivednsDomain is deprecated: gandi.index/getlivednsdomain.getLivednsDomain has been deprecated in favor of gandi.livedns/getdomain.getDomain")

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gandi:index/getLivednsDomain:getLivednsDomain", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getLivednsDomain.
 */
export interface GetLivednsDomainArgs {
    name: string;
}

/**
 * A collection of values returned by getLivednsDomain.
 */
export interface GetLivednsDomainResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
}
/** @deprecated gandi.index/getlivednsdomain.getLivednsDomain has been deprecated in favor of gandi.livedns/getdomain.getDomain */
export function getLivednsDomainOutput(args: GetLivednsDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLivednsDomainResult> {
    return pulumi.output(args).apply((a: any) => getLivednsDomain(a, opts))
}

/**
 * A collection of arguments for invoking getLivednsDomain.
 */
export interface GetLivednsDomainOutputArgs {
    name: pulumi.Input<string>;
}
