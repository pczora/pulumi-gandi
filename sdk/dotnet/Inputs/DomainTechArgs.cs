// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi.Inputs
{

    public sealed class DomainTechArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// City for the contact
        /// </summary>
        [Input("city", required: true)]
        public Input<string> City { get; set; } = null!;

        /// <summary>
        /// The two letter country code for the contact
        /// </summary>
        [Input("country", required: true)]
        public Input<string> Country { get; set; } = null!;

        /// <summary>
        /// Whether or not to obfuscate contact data in WHOIS
        /// </summary>
        [Input("dataObfuscated")]
        public Input<bool>? DataObfuscated { get; set; }

        /// <summary>
        /// Contact email address
        /// </summary>
        [Input("email", required: true)]
        public Input<string> Email { get; set; } = null!;

        [Input("extraParameters")]
        private InputMap<string>? _extraParameters;

        /// <summary>
        /// Extra parameters, needed for some jurisdictions
        /// </summary>
        public InputMap<string> ExtraParameters
        {
            get => _extraParameters ?? (_extraParameters = new InputMap<string>());
            set => _extraParameters = value;
        }

        /// <summary>
        /// Family name of the contact
        /// </summary>
        [Input("familyName", required: true)]
        public Input<string> FamilyName { get; set; } = null!;

        /// <summary>
        /// Given name of the contact
        /// </summary>
        [Input("givenName", required: true)]
        public Input<string> GivenName { get; set; } = null!;

        /// <summary>
        /// Whether or not to obfuscate contact email in WHOIS
        /// </summary>
        [Input("mailObfuscated")]
        public Input<bool>? MailObfuscated { get; set; }

        /// <summary>
        /// The legal name of the organisation. Required for types other than person
        /// </summary>
        [Input("organisation")]
        public Input<string>? Organisation { get; set; }

        /// <summary>
        /// Phone number for the contact
        /// </summary>
        [Input("phone", required: true)]
        public Input<string> Phone { get; set; } = null!;

        /// <summary>
        /// The state code for the contact
        /// </summary>
        [Input("state")]
        public Input<string>? State { get; set; }

        /// <summary>
        /// Street Address of the contact
        /// </summary>
        [Input("streetAddr", required: true)]
        public Input<string> StreetAddr { get; set; } = null!;

        /// <summary>
        /// One of 'person', 'company', 'association', 'public body', or 'reseller'
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Postal Code/Zipcode of the contact
        /// </summary>
        [Input("zip", required: true)]
        public Input<string> Zip { get; set; } = null!;

        public DomainTechArgs()
        {
        }
        public static new DomainTechArgs Empty => new DomainTechArgs();
    }
}
