// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getGlueRecord(args: GetGlueRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetGlueRecordResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gandi:domains/getGlueRecord:getGlueRecord", {
        "name": args.name,
        "zone": args.zone,
    }, opts);
}

/**
 * A collection of arguments for invoking getGlueRecord.
 */
export interface GetGlueRecordArgs {
    /**
     * Host name of the glue record
     */
    name: string;
    /**
     * Domain name
     */
    zone: string;
}

/**
 * A collection of values returned by getGlueRecord.
 */
export interface GetGlueRecordResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A list of the ip addresses provided for the glue record
     */
    readonly ips: string[];
    /**
     * Host name of the glue record
     */
    readonly name: string;
    /**
     * Domain name
     */
    readonly zone: string;
}
export function getGlueRecordOutput(args: GetGlueRecordOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlueRecordResult> {
    return pulumi.output(args).apply((a: any) => getGlueRecord(a, opts))
}

/**
 * A collection of arguments for invoking getGlueRecord.
 */
export interface GetGlueRecordOutputArgs {
    /**
     * Host name of the glue record
     */
    name: pulumi.Input<string>;
    /**
     * Domain name
     */
    zone: pulumi.Input<string>;
}
