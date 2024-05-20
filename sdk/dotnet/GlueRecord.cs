// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi
{
    [Obsolete(@"gandi.index/gluerecord.GlueRecord has been deprecated in favor of gandi.domains/gluerecord.GlueRecord")]
    [GandiResourceType("gandi:index/glueRecord:GlueRecord")]
    public partial class GlueRecord : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The fqdn of the record
        /// </summary>
        [Output("fqdn")]
        public Output<string> Fqdn { get; private set; } = null!;

        /// <summary>
        /// The fqdn unicode of the record
        /// </summary>
        [Output("fqdnUnicode")]
        public Output<string> FqdnUnicode { get; private set; } = null!;

        /// <summary>
        /// The href of the record
        /// </summary>
        [Output("href")]
        public Output<string> Href { get; private set; } = null!;

        /// <summary>
        /// List of IP addresses
        /// </summary>
        [Output("ips")]
        public Output<ImmutableArray<string>> Ips { get; private set; } = null!;

        /// <summary>
        /// Host name of the glue record
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Domain name
        /// </summary>
        [Output("zone")]
        public Output<string> Zone { get; private set; } = null!;


        /// <summary>
        /// Create a GlueRecord resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public GlueRecord(string name, GlueRecordArgs args, CustomResourceOptions? options = null)
            : base("gandi:index/glueRecord:GlueRecord", name, args ?? new GlueRecordArgs(), MakeResourceOptions(options, ""))
        {
        }

        private GlueRecord(string name, Input<string> id, GlueRecordState? state = null, CustomResourceOptions? options = null)
            : base("gandi:index/glueRecord:GlueRecord", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing GlueRecord resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static GlueRecord Get(string name, Input<string> id, GlueRecordState? state = null, CustomResourceOptions? options = null)
        {
            return new GlueRecord(name, id, state, options);
        }
    }

    public sealed class GlueRecordArgs : global::Pulumi.ResourceArgs
    {
        [Input("ips", required: true)]
        private InputList<string>? _ips;

        /// <summary>
        /// List of IP addresses
        /// </summary>
        public InputList<string> Ips
        {
            get => _ips ?? (_ips = new InputList<string>());
            set => _ips = value;
        }

        /// <summary>
        /// Host name of the glue record
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("zone", required: true)]
        public Input<string> Zone { get; set; } = null!;

        public GlueRecordArgs()
        {
        }
        public static new GlueRecordArgs Empty => new GlueRecordArgs();
    }

    public sealed class GlueRecordState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The fqdn of the record
        /// </summary>
        [Input("fqdn")]
        public Input<string>? Fqdn { get; set; }

        /// <summary>
        /// The fqdn unicode of the record
        /// </summary>
        [Input("fqdnUnicode")]
        public Input<string>? FqdnUnicode { get; set; }

        /// <summary>
        /// The href of the record
        /// </summary>
        [Input("href")]
        public Input<string>? Href { get; set; }

        [Input("ips")]
        private InputList<string>? _ips;

        /// <summary>
        /// List of IP addresses
        /// </summary>
        public InputList<string> Ips
        {
            get => _ips ?? (_ips = new InputList<string>());
            set => _ips = value;
        }

        /// <summary>
        /// Host name of the glue record
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("zone")]
        public Input<string>? Zone { get; set; }

        public GlueRecordState()
        {
        }
        public static new GlueRecordState Empty => new GlueRecordState();
    }
}