// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi.Simplehosting
{
    [GandiResourceType("gandi:simplehosting/vHost:VHost")]
    public partial class VHost : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
        /// </summary>
        [Output("application")]
        public Output<string?> Application { get; private set; } = null!;

        /// <summary>
        /// The ID of the created free certificate
        /// </summary>
        [Output("certificateId")]
        public Output<string> CertificateId { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the Vhost
        /// </summary>
        [Output("fqdn")]
        public Output<string> Fqdn { get; private set; } = null!;

        /// <summary>
        /// The ID of the SimpleHosting instance
        /// </summary>
        [Output("instanceId")]
        public Output<string> InstanceId { get; private set; } = null!;

        /// <summary>
        /// Whether to alter the linked DNS Zone
        /// </summary>
        [Output("linkedDnsZoneAlteration")]
        public Output<bool?> LinkedDnsZoneAlteration { get; private set; } = null!;


        /// <summary>
        /// Create a VHost resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VHost(string name, VHostArgs args, CustomResourceOptions? options = null)
            : base("gandi:simplehosting/vHost:VHost", name, args ?? new VHostArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VHost(string name, Input<string> id, VHostState? state = null, CustomResourceOptions? options = null)
            : base("gandi:simplehosting/vHost:VHost", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new global::Pulumi.Alias { Type = "gandi:index/simplehostingVhost:SimplehostingVhost" },
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VHost resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VHost Get(string name, Input<string> id, VHostState? state = null, CustomResourceOptions? options = null)
        {
            return new VHost(name, id, state, options);
        }
    }

    public sealed class VHostArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
        /// </summary>
        [Input("application")]
        public Input<string>? Application { get; set; }

        /// <summary>
        /// The FQDN of the Vhost
        /// </summary>
        [Input("fqdn", required: true)]
        public Input<string> Fqdn { get; set; } = null!;

        /// <summary>
        /// The ID of the SimpleHosting instance
        /// </summary>
        [Input("instanceId", required: true)]
        public Input<string> InstanceId { get; set; } = null!;

        /// <summary>
        /// Whether to alter the linked DNS Zone
        /// </summary>
        [Input("linkedDnsZoneAlteration")]
        public Input<bool>? LinkedDnsZoneAlteration { get; set; }

        public VHostArgs()
        {
        }
        public static new VHostArgs Empty => new VHostArgs();
    }

    public sealed class VHostState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
        /// </summary>
        [Input("application")]
        public Input<string>? Application { get; set; }

        /// <summary>
        /// The ID of the created free certificate
        /// </summary>
        [Input("certificateId")]
        public Input<string>? CertificateId { get; set; }

        /// <summary>
        /// The FQDN of the Vhost
        /// </summary>
        [Input("fqdn")]
        public Input<string>? Fqdn { get; set; }

        /// <summary>
        /// The ID of the SimpleHosting instance
        /// </summary>
        [Input("instanceId")]
        public Input<string>? InstanceId { get; set; }

        /// <summary>
        /// Whether to alter the linked DNS Zone
        /// </summary>
        [Input("linkedDnsZoneAlteration")]
        public Input<bool>? LinkedDnsZoneAlteration { get; set; }

        public VHostState()
        {
        }
        public static new VHostState Empty => new VHostState();
    }
}
