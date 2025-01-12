// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi.Livedns
{
    public static class GetDomainNameserver
    {
        public static Task<GetDomainNameserverResult> InvokeAsync(GetDomainNameserverArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetDomainNameserverResult>("gandi:livedns/getDomainNameserver:getDomainNameserver", args ?? new GetDomainNameserverArgs(), options.WithDefaults());

        public static Output<GetDomainNameserverResult> Invoke(GetDomainNameserverInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetDomainNameserverResult>("gandi:livedns/getDomainNameserver:getDomainNameserver", args ?? new GetDomainNameserverInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetDomainNameserverArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        public GetDomainNameserverArgs()
        {
        }
        public static new GetDomainNameserverArgs Empty => new GetDomainNameserverArgs();
    }

    public sealed class GetDomainNameserverInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        public GetDomainNameserverInvokeArgs()
        {
        }
        public static new GetDomainNameserverInvokeArgs Empty => new GetDomainNameserverInvokeArgs();
    }


    [OutputType]
    public sealed class GetDomainNameserverResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A list of nameservers for the domain
        /// </summary>
        public readonly ImmutableArray<string> Nameservers;

        [OutputConstructor]
        private GetDomainNameserverResult(
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
