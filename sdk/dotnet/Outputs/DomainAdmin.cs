// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gandi.Outputs
{

    [OutputType]
    public sealed class DomainAdmin
    {
        /// <summary>
        /// City for the contact
        /// </summary>
        public readonly string City;
        /// <summary>
        /// The two letter country code for the contact
        /// </summary>
        public readonly string Country;
        /// <summary>
        /// Whether or not to obfuscate contact data in WHOIS
        /// </summary>
        public readonly bool? DataObfuscated;
        /// <summary>
        /// Contact email address
        /// </summary>
        public readonly string Email;
        /// <summary>
        /// Extra parameters, needed for some jurisdictions
        /// </summary>
        public readonly ImmutableDictionary<string, string>? ExtraParameters;
        /// <summary>
        /// Family name of the contact
        /// </summary>
        public readonly string FamilyName;
        /// <summary>
        /// Given name of the contact
        /// </summary>
        public readonly string GivenName;
        /// <summary>
        /// Whether or not to obfuscate contact email in WHOIS
        /// </summary>
        public readonly bool? MailObfuscated;
        /// <summary>
        /// The legal name of the organisation. Required for types other than person
        /// </summary>
        public readonly string? Organisation;
        /// <summary>
        /// Phone number for the contact
        /// </summary>
        public readonly string Phone;
        /// <summary>
        /// The state code for the contact
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// Street Address of the contact
        /// </summary>
        public readonly string StreetAddr;
        /// <summary>
        /// One of 'person', 'company', 'association', 'public body', or 'reseller'
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Postal Code/Zipcode of the contact
        /// </summary>
        public readonly string Zip;

        [OutputConstructor]
        private DomainAdmin(
            string city,

            string country,

            bool? dataObfuscated,

            string email,

            ImmutableDictionary<string, string>? extraParameters,

            string familyName,

            string givenName,

            bool? mailObfuscated,

            string? organisation,

            string phone,

            string? state,

            string streetAddr,

            string type,

            string zip)
        {
            City = city;
            Country = country;
            DataObfuscated = dataObfuscated;
            Email = email;
            ExtraParameters = extraParameters;
            FamilyName = familyName;
            GivenName = givenName;
            MailObfuscated = mailObfuscated;
            Organisation = organisation;
            Phone = phone;
            State = state;
            StreetAddr = streetAddr;
            Type = type;
            Zip = zip;
        }
    }
}
