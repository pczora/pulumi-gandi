// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi
{
    [Obsolete(@"gandi.index/getlivednsdomainns.getLivednsDomainNs has been deprecated in favor of gandi.livedns/getdomainnameserver.getDomainNameserver")]
    public static class GetLivednsDomainNs
    {
        public static Task<GetLivednsDomainNsResult> InvokeAsync(GetLivednsDomainNsArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetLivednsDomainNsResult>("gandi:index/getLivednsDomainNs:getLivednsDomainNs", args ?? new GetLivednsDomainNsArgs(), options.WithDefaults());

        public static Output<GetLivednsDomainNsResult> Invoke(GetLivednsDomainNsInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetLivednsDomainNsResult>("gandi:index/getLivednsDomainNs:getLivednsDomainNs", args ?? new GetLivednsDomainNsInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetLivednsDomainNsArgs : global::Pulumi.InvokeArgs
    {
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        public GetLivednsDomainNsArgs()
        {
        }
        public static new GetLivednsDomainNsArgs Empty => new GetLivednsDomainNsArgs();
    }

    public sealed class GetLivednsDomainNsInvokeArgs : global::Pulumi.InvokeArgs
    {
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        public GetLivednsDomainNsInvokeArgs()
        {
        }
        public static new GetLivednsDomainNsInvokeArgs Empty => new GetLivednsDomainNsInvokeArgs();
    }


    [OutputType]
    public sealed class GetLivednsDomainNsResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;
        public readonly ImmutableArray<string> Nameservers;

        [OutputConstructor]
        private GetLivednsDomainNsResult(
            string id,

            string name,

            ImmutableArray<string> nameservers)
        {
            Id = id;
            Name = name;
            Nameservers = nameservers;
        }
    }
}
