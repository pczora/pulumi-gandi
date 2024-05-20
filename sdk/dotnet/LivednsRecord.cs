// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi
{
    [Obsolete(@"gandi.index/livednsrecord.LivednsRecord has been deprecated in favor of gandi.livedns/record.Record")]
    [GandiResourceType("gandi:index/livednsRecord:LivednsRecord")]
    public partial class LivednsRecord : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The href of the record
        /// </summary>
        [Output("href")]
        public Output<string> Href { get; private set; } = null!;

        /// <summary>
        /// Define if the record can be modified outside Terraform (this currently only works for TXT records)
        /// </summary>
        [Output("mutable")]
        public Output<bool?> Mutable { get; private set; } = null!;

        /// <summary>
        /// The name of the record
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The TTL of the record
        /// </summary>
        [Output("ttl")]
        public Output<int> Ttl { get; private set; } = null!;

        /// <summary>
        /// The type of the record
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// A list of values of the record
        /// </summary>
        [Output("values")]
        public Output<ImmutableArray<string>> Values { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Output("zone")]
        public Output<string> Zone { get; private set; } = null!;


        /// <summary>
        /// Create a LivednsRecord resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public LivednsRecord(string name, LivednsRecordArgs args, CustomResourceOptions? options = null)
            : base("gandi:index/livednsRecord:LivednsRecord", name, args ?? new LivednsRecordArgs(), MakeResourceOptions(options, ""))
        {
        }

        private LivednsRecord(string name, Input<string> id, LivednsRecordState? state = null, CustomResourceOptions? options = null)
            : base("gandi:index/livednsRecord:LivednsRecord", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing LivednsRecord resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static LivednsRecord Get(string name, Input<string> id, LivednsRecordState? state = null, CustomResourceOptions? options = null)
        {
            return new LivednsRecord(name, id, state, options);
        }
    }

    public sealed class LivednsRecordArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Define if the record can be modified outside Terraform (this currently only works for TXT records)
        /// </summary>
        [Input("mutable")]
        public Input<bool>? Mutable { get; set; }

        /// <summary>
        /// The name of the record
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The TTL of the record
        /// </summary>
        [Input("ttl", required: true)]
        public Input<int> Ttl { get; set; } = null!;

        /// <summary>
        /// The type of the record
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("values", required: true)]
        private InputList<string>? _values;

        /// <summary>
        /// A list of values of the record
        /// </summary>
        public InputList<string> Values
        {
            get => _values ?? (_values = new InputList<string>());
            set => _values = value;
        }

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("zone", required: true)]
        public Input<string> Zone { get; set; } = null!;

        public LivednsRecordArgs()
        {
        }
        public static new LivednsRecordArgs Empty => new LivednsRecordArgs();
    }

    public sealed class LivednsRecordState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The href of the record
        /// </summary>
        [Input("href")]
        public Input<string>? Href { get; set; }

        /// <summary>
        /// Define if the record can be modified outside Terraform (this currently only works for TXT records)
        /// </summary>
        [Input("mutable")]
        public Input<bool>? Mutable { get; set; }

        /// <summary>
        /// The name of the record
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The TTL of the record
        /// </summary>
        [Input("ttl")]
        public Input<int>? Ttl { get; set; }

        /// <summary>
        /// The type of the record
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        [Input("values")]
        private InputList<string>? _values;

        /// <summary>
        /// A list of values of the record
        /// </summary>
        public InputList<string> Values
        {
            get => _values ?? (_values = new InputList<string>());
            set => _values = value;
        }

        /// <summary>
        /// The FQDN of the domain
        /// </summary>
        [Input("zone")]
        public Input<string>? Zone { get; set; }

        public LivednsRecordState()
        {
        }
        public static new LivednsRecordState Empty => new LivednsRecordState();
    }
}
