// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi
{
    [Obsolete(@"gandi.index/livednsdomain.LivednsDomain has been deprecated in favor of gandi.livedns/domain.Domain")]
    [GandiResourceType("gandi:index/livednsDomain:LivednsDomain")]
    public partial class LivednsDomain : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Enable or disable the automatic creation of snapshots when records are changed
        /// </summary>
        [Output("automaticSnapshots")]
        public Output<bool?> AutomaticSnapshots { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The SOA TTL for the domain
        /// </summary>
        [Output("ttl")]
        public Output<int?> Ttl { get; private set; } = null!;


        /// <summary>
        /// Create a LivednsDomain resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public LivednsDomain(string name, LivednsDomainArgs? args = null, CustomResourceOptions? options = null)
            : base("gandi:index/livednsDomain:LivednsDomain", name, args ?? new LivednsDomainArgs(), MakeResourceOptions(options, ""))
        {
        }

        private LivednsDomain(string name, Input<string> id, LivednsDomainState? state = null, CustomResourceOptions? options = null)
            : base("gandi:index/livednsDomain:LivednsDomain", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing LivednsDomain resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static LivednsDomain Get(string name, Input<string> id, LivednsDomainState? state = null, CustomResourceOptions? options = null)
        {
            return new LivednsDomain(name, id, state, options);
        }
    }

    public sealed class LivednsDomainArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable or disable the automatic creation of snapshots when records are changed
        /// </summary>
        [Input("automaticSnapshots")]
        public Input<bool>? AutomaticSnapshots { get; set; }

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The SOA TTL for the domain
        /// </summary>
        [Input("ttl")]
        public Input<int>? Ttl { get; set; }

        public LivednsDomainArgs()
        {
        }
        public static new LivednsDomainArgs Empty => new LivednsDomainArgs();
    }

    public sealed class LivednsDomainState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable or disable the automatic creation of snapshots when records are changed
        /// </summary>
        [Input("automaticSnapshots")]
        public Input<bool>? AutomaticSnapshots { get; set; }

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The SOA TTL for the domain
        /// </summary>
        [Input("ttl")]
        public Input<int>? Ttl { get; set; }

        public LivednsDomainState()
        {
        }
        public static new LivednsDomainState Empty => new LivednsDomainState();
    }
}