// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi
{
    [Obsolete(@"gandi.index/mailbox.Mailbox has been deprecated in favor of gandi.email/mailbox.Mailbox")]
    [GandiResourceType("gandi:index/mailbox:Mailbox")]
    public partial class Mailbox : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Aliases for email
        /// </summary>
        [Output("aliases")]
        public Output<ImmutableArray<string>> Aliases { get; private set; } = null!;

        /// <summary>
        /// Domain name
        /// </summary>
        [Output("domain")]
        public Output<string> Domain { get; private set; } = null!;

        /// <summary>
        /// Login
        /// </summary>
        [Output("login")]
        public Output<string> Login { get; private set; } = null!;

        /// <summary>
        /// Mailbox type
        /// </summary>
        [Output("mailboxType")]
        public Output<string?> MailboxType { get; private set; } = null!;

        /// <summary>
        /// Password
        /// </summary>
        [Output("password")]
        public Output<string> Password { get; private set; } = null!;


        /// <summary>
        /// Create a Mailbox resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Mailbox(string name, MailboxArgs args, CustomResourceOptions? options = null)
            : base("gandi:index/mailbox:Mailbox", name, args ?? new MailboxArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Mailbox(string name, Input<string> id, MailboxState? state = null, CustomResourceOptions? options = null)
            : base("gandi:index/mailbox:Mailbox", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                AdditionalSecretOutputs =
                {
                    "password",
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Mailbox resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Mailbox Get(string name, Input<string> id, MailboxState? state = null, CustomResourceOptions? options = null)
        {
            return new Mailbox(name, id, state, options);
        }
    }

    public sealed class MailboxArgs : global::Pulumi.ResourceArgs
    {
        [Input("aliases")]
        private InputList<string>? _aliases;

        /// <summary>
        /// Aliases for email
        /// </summary>
        public InputList<string> Aliases
        {
            get => _aliases ?? (_aliases = new InputList<string>());
            set => _aliases = value;
        }

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("domain", required: true)]
        public Input<string> Domain { get; set; } = null!;

        /// <summary>
        /// Login
        /// </summary>
        [Input("login", required: true)]
        public Input<string> Login { get; set; } = null!;

        /// <summary>
        /// Mailbox type
        /// </summary>
        [Input("mailboxType")]
        public Input<string>? MailboxType { get; set; }

        [Input("password", required: true)]
        private Input<string>? _password;

        /// <summary>
        /// Password
        /// </summary>
        public Input<string>? Password
        {
            get => _password;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _password = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public MailboxArgs()
        {
        }
        public static new MailboxArgs Empty => new MailboxArgs();
    }

    public sealed class MailboxState : global::Pulumi.ResourceArgs
    {
        [Input("aliases")]
        private InputList<string>? _aliases;

        /// <summary>
        /// Aliases for email
        /// </summary>
        public InputList<string> Aliases
        {
            get => _aliases ?? (_aliases = new InputList<string>());
            set => _aliases = value;
        }

        /// <summary>
        /// Domain name
        /// </summary>
        [Input("domain")]
        public Input<string>? Domain { get; set; }

        /// <summary>
        /// Login
        /// </summary>
        [Input("login")]
        public Input<string>? Login { get; set; }

        /// <summary>
        /// Mailbox type
        /// </summary>
        [Input("mailboxType")]
        public Input<string>? MailboxType { get; set; }

        [Input("password")]
        private Input<string>? _password;

        /// <summary>
        /// Password
        /// </summary>
        public Input<string>? Password
        {
            get => _password;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _password = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public MailboxState()
        {
        }
        public static new MailboxState Empty => new MailboxState();
    }
}