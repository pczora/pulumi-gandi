// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi.Domains
{
    public static class GetGlueRecord
    {
        public static Task<GetGlueRecordResult> InvokeAsync(GetGlueRecordArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetGlueRecordResult>("gandi:domains/getGlueRecord:getGlueRecord", args ?? new GetGlueRecordArgs(), options.WithDefaults());

        public static Output<GetGlueRecordResult> Invoke(GetGlueRecordInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetGlueRecordResult>("gandi:domains/getGlueRecord:getGlueRecord", args ?? new GetGlueRecordInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetGlueRecordArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// Host name of the glue record
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("zone", required: true)]
        public string Zone { get; set; } = null!;

        public GetGlueRecordArgs()
        {
        }
        public static new GetGlueRecordArgs Empty => new GetGlueRecordArgs();
    }

    public sealed class GetGlueRecordInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// Host name of the glue record
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("zone", required: true)]
        public Input<string> Zone { get; set; } = null!;

        public GetGlueRecordInvokeArgs()
        {
        }
        public static new GetGlueRecordInvokeArgs Empty => new GetGlueRecordInvokeArgs();
    }


    [OutputType]
    public sealed class GetGlueRecordResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// A list of the ip addresses provided for the glue record
        /// </summary>
        public readonly ImmutableArray<string> Ips;
        /// <summary>
        /// Host name of the glue record
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Domain name
        /// </summary>
        public readonly string Zone;

        [OutputConstructor]
        private GetGlueRecordResult(
            string id,

            ImmutableArray<string> ips,

            string name,

            string zone)
        {
            Id = id;
            Ips = ips;
            Name = name;
            Zone = zone;
        }
    }
}