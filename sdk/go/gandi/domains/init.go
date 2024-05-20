// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package domains

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pczora/pulumi-gandi/sdk/go/gandi/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "gandi:domains/dNSSecKey:DNSSecKey":
		r = &DNSSecKey{}
	case "gandi:domains/domain:Domain":
		r = &Domain{}
	case "gandi:domains/glueRecord:GlueRecord":
		r = &GlueRecord{}
	case "gandi:domains/nameservers:Nameservers":
		r = &Nameservers{}
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	err = ctx.RegisterResource(typ, name, nil, r, pulumi.URN_(urn))
	return
}

func init() {
	version, err := internal.PkgVersion()
	if err != nil {
		version = semver.Version{Major: 1}
	}
	pulumi.RegisterResourceModule(
		"gandi",
		"domains/dNSSecKey",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"gandi",
		"domains/domain",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"gandi",
		"domains/glueRecord",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"gandi",
		"domains/nameservers",
		&module{version},
	)
}
