// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { DnssecKeyArgs, DnssecKeyState } from "./dnssecKey";
export type DnssecKey = import("./dnssecKey").DnssecKey;
export const DnssecKey: typeof import("./dnssecKey").DnssecKey = null as any;
utilities.lazyLoad(exports, ["DnssecKey"], () => require("./dnssecKey"));

export { DomainArgs, DomainState } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { EmailForwardingArgs, EmailForwardingState } from "./emailForwarding";
export type EmailForwarding = import("./emailForwarding").EmailForwarding;
export const EmailForwarding: typeof import("./emailForwarding").EmailForwarding = null as any;
utilities.lazyLoad(exports, ["EmailForwarding"], () => require("./emailForwarding"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetGlueRecordArgs, GetGlueRecordResult, GetGlueRecordOutputArgs } from "./getGlueRecord";
export const getGlueRecord: typeof import("./getGlueRecord").getGlueRecord = null as any;
export const getGlueRecordOutput: typeof import("./getGlueRecord").getGlueRecordOutput = null as any;
utilities.lazyLoad(exports, ["getGlueRecord","getGlueRecordOutput"], () => require("./getGlueRecord"));

export { GetLivednsDomainArgs, GetLivednsDomainResult, GetLivednsDomainOutputArgs } from "./getLivednsDomain";
export const getLivednsDomain: typeof import("./getLivednsDomain").getLivednsDomain = null as any;
export const getLivednsDomainOutput: typeof import("./getLivednsDomain").getLivednsDomainOutput = null as any;
utilities.lazyLoad(exports, ["getLivednsDomain","getLivednsDomainOutput"], () => require("./getLivednsDomain"));

export { GetLivednsDomainNsArgs, GetLivednsDomainNsResult, GetLivednsDomainNsOutputArgs } from "./getLivednsDomainNs";
export const getLivednsDomainNs: typeof import("./getLivednsDomainNs").getLivednsDomainNs = null as any;
export const getLivednsDomainNsOutput: typeof import("./getLivednsDomainNs").getLivednsDomainNsOutput = null as any;
utilities.lazyLoad(exports, ["getLivednsDomainNs","getLivednsDomainNsOutput"], () => require("./getLivednsDomainNs"));

export { GetMailboxArgs, GetMailboxResult, GetMailboxOutputArgs } from "./getMailbox";
export const getMailbox: typeof import("./getMailbox").getMailbox = null as any;
export const getMailboxOutput: typeof import("./getMailbox").getMailboxOutput = null as any;
utilities.lazyLoad(exports, ["getMailbox","getMailboxOutput"], () => require("./getMailbox"));

export { GlueRecordArgs, GlueRecordState } from "./glueRecord";
export type GlueRecord = import("./glueRecord").GlueRecord;
export const GlueRecord: typeof import("./glueRecord").GlueRecord = null as any;
utilities.lazyLoad(exports, ["GlueRecord"], () => require("./glueRecord"));

export { LivednsDomainArgs, LivednsDomainState } from "./livednsDomain";
export type LivednsDomain = import("./livednsDomain").LivednsDomain;
export const LivednsDomain: typeof import("./livednsDomain").LivednsDomain = null as any;
utilities.lazyLoad(exports, ["LivednsDomain"], () => require("./livednsDomain"));

export { LivednsRecordArgs, LivednsRecordState } from "./livednsRecord";
export type LivednsRecord = import("./livednsRecord").LivednsRecord;
export const LivednsRecord: typeof import("./livednsRecord").LivednsRecord = null as any;
utilities.lazyLoad(exports, ["LivednsRecord"], () => require("./livednsRecord"));

export { MailboxArgs, MailboxState } from "./mailbox";
export type Mailbox = import("./mailbox").Mailbox;
export const Mailbox: typeof import("./mailbox").Mailbox = null as any;
utilities.lazyLoad(exports, ["Mailbox"], () => require("./mailbox"));

export { NameserversArgs, NameserversState } from "./nameservers";
export type Nameservers = import("./nameservers").Nameservers;
export const Nameservers: typeof import("./nameservers").Nameservers = null as any;
utilities.lazyLoad(exports, ["Nameservers"], () => require("./nameservers"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { SimplehostingInstanceArgs, SimplehostingInstanceState } from "./simplehostingInstance";
export type SimplehostingInstance = import("./simplehostingInstance").SimplehostingInstance;
export const SimplehostingInstance: typeof import("./simplehostingInstance").SimplehostingInstance = null as any;
utilities.lazyLoad(exports, ["SimplehostingInstance"], () => require("./simplehostingInstance"));

export { SimplehostingVhostArgs, SimplehostingVhostState } from "./simplehostingVhost";
export type SimplehostingVhost = import("./simplehostingVhost").SimplehostingVhost;
export const SimplehostingVhost: typeof import("./simplehostingVhost").SimplehostingVhost = null as any;
utilities.lazyLoad(exports, ["SimplehostingVhost"], () => require("./simplehostingVhost"));


// Export sub-modules:
import * as config from "./config";
import * as domains from "./domains";
import * as email from "./email";
import * as livedns from "./livedns";
import * as simplehosting from "./simplehosting";
import * as types from "./types";

export {
    config,
    domains,
    email,
    livedns,
    simplehosting,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "gandi:index/dnssecKey:DnssecKey":
                return new DnssecKey(name, <any>undefined, { urn })
            case "gandi:index/domain:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "gandi:index/emailForwarding:EmailForwarding":
                return new EmailForwarding(name, <any>undefined, { urn })
            case "gandi:index/glueRecord:GlueRecord":
                return new GlueRecord(name, <any>undefined, { urn })
            case "gandi:index/livednsDomain:LivednsDomain":
                return new LivednsDomain(name, <any>undefined, { urn })
            case "gandi:index/livednsRecord:LivednsRecord":
                return new LivednsRecord(name, <any>undefined, { urn })
            case "gandi:index/mailbox:Mailbox":
                return new Mailbox(name, <any>undefined, { urn })
            case "gandi:index/nameservers:Nameservers":
                return new Nameservers(name, <any>undefined, { urn })
            case "gandi:index/simplehostingInstance:SimplehostingInstance":
                return new SimplehostingInstance(name, <any>undefined, { urn })
            case "gandi:index/simplehostingVhost:SimplehostingVhost":
                return new SimplehostingVhost(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("gandi", "index/dnssecKey", _module)
pulumi.runtime.registerResourceModule("gandi", "index/domain", _module)
pulumi.runtime.registerResourceModule("gandi", "index/emailForwarding", _module)
pulumi.runtime.registerResourceModule("gandi", "index/glueRecord", _module)
pulumi.runtime.registerResourceModule("gandi", "index/livednsDomain", _module)
pulumi.runtime.registerResourceModule("gandi", "index/livednsRecord", _module)
pulumi.runtime.registerResourceModule("gandi", "index/mailbox", _module)
pulumi.runtime.registerResourceModule("gandi", "index/nameservers", _module)
pulumi.runtime.registerResourceModule("gandi", "index/simplehostingInstance", _module)
pulumi.runtime.registerResourceModule("gandi", "index/simplehostingVhost", _module)
pulumi.runtime.registerResourcePackage("gandi", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:gandi") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
