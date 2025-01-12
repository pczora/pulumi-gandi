// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package gandi

import (
	"context"
	"reflect"

	"errors"
	"github.com/pczora/pulumi-gandi/sdk/go/gandi/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Deprecated: gandi.index/simplehostingvhost.SimplehostingVhost has been deprecated in favor of gandi.simplehosting/vhost.VHost
type SimplehostingVhost struct {
	pulumi.CustomResourceState

	// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
	Application pulumi.StringPtrOutput `pulumi:"application"`
	// The ID of the created free certificate
	CertificateId pulumi.StringOutput `pulumi:"certificateId"`
	// The FQDN of the Vhost
	Fqdn pulumi.StringOutput `pulumi:"fqdn"`
	// The ID of the SimpleHosting instance
	InstanceId pulumi.StringOutput `pulumi:"instanceId"`
	// Whether to alter the linked DNS Zone
	LinkedDnsZoneAlteration pulumi.BoolPtrOutput `pulumi:"linkedDnsZoneAlteration"`
}

// NewSimplehostingVhost registers a new resource with the given unique name, arguments, and options.
func NewSimplehostingVhost(ctx *pulumi.Context,
	name string, args *SimplehostingVhostArgs, opts ...pulumi.ResourceOption) (*SimplehostingVhost, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Fqdn == nil {
		return nil, errors.New("invalid value for required argument 'Fqdn'")
	}
	if args.InstanceId == nil {
		return nil, errors.New("invalid value for required argument 'InstanceId'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource SimplehostingVhost
	err := ctx.RegisterResource("gandi:index/simplehostingVhost:SimplehostingVhost", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSimplehostingVhost gets an existing SimplehostingVhost resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSimplehostingVhost(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SimplehostingVhostState, opts ...pulumi.ResourceOption) (*SimplehostingVhost, error) {
	var resource SimplehostingVhost
	err := ctx.ReadResource("gandi:index/simplehostingVhost:SimplehostingVhost", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SimplehostingVhost resources.
type simplehostingVhostState struct {
	// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
	Application *string `pulumi:"application"`
	// The ID of the created free certificate
	CertificateId *string `pulumi:"certificateId"`
	// The FQDN of the Vhost
	Fqdn *string `pulumi:"fqdn"`
	// The ID of the SimpleHosting instance
	InstanceId *string `pulumi:"instanceId"`
	// Whether to alter the linked DNS Zone
	LinkedDnsZoneAlteration *bool `pulumi:"linkedDnsZoneAlteration"`
}

type SimplehostingVhostState struct {
	// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
	Application pulumi.StringPtrInput
	// The ID of the created free certificate
	CertificateId pulumi.StringPtrInput
	// The FQDN of the Vhost
	Fqdn pulumi.StringPtrInput
	// The ID of the SimpleHosting instance
	InstanceId pulumi.StringPtrInput
	// Whether to alter the linked DNS Zone
	LinkedDnsZoneAlteration pulumi.BoolPtrInput
}

func (SimplehostingVhostState) ElementType() reflect.Type {
	return reflect.TypeOf((*simplehostingVhostState)(nil)).Elem()
}

type simplehostingVhostArgs struct {
	// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
	Application *string `pulumi:"application"`
	// The FQDN of the Vhost
	Fqdn string `pulumi:"fqdn"`
	// The ID of the SimpleHosting instance
	InstanceId string `pulumi:"instanceId"`
	// Whether to alter the linked DNS Zone
	LinkedDnsZoneAlteration *bool `pulumi:"linkedDnsZoneAlteration"`
}

// The set of arguments for constructing a SimplehostingVhost resource.
type SimplehostingVhostArgs struct {
	// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
	Application pulumi.StringPtrInput
	// The FQDN of the Vhost
	Fqdn pulumi.StringInput
	// The ID of the SimpleHosting instance
	InstanceId pulumi.StringInput
	// Whether to alter the linked DNS Zone
	LinkedDnsZoneAlteration pulumi.BoolPtrInput
}

func (SimplehostingVhostArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*simplehostingVhostArgs)(nil)).Elem()
}

type SimplehostingVhostInput interface {
	pulumi.Input

	ToSimplehostingVhostOutput() SimplehostingVhostOutput
	ToSimplehostingVhostOutputWithContext(ctx context.Context) SimplehostingVhostOutput
}

func (*SimplehostingVhost) ElementType() reflect.Type {
	return reflect.TypeOf((**SimplehostingVhost)(nil)).Elem()
}

func (i *SimplehostingVhost) ToSimplehostingVhostOutput() SimplehostingVhostOutput {
	return i.ToSimplehostingVhostOutputWithContext(context.Background())
}

func (i *SimplehostingVhost) ToSimplehostingVhostOutputWithContext(ctx context.Context) SimplehostingVhostOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SimplehostingVhostOutput)
}

// SimplehostingVhostArrayInput is an input type that accepts SimplehostingVhostArray and SimplehostingVhostArrayOutput values.
// You can construct a concrete instance of `SimplehostingVhostArrayInput` via:
//
//	SimplehostingVhostArray{ SimplehostingVhostArgs{...} }
type SimplehostingVhostArrayInput interface {
	pulumi.Input

	ToSimplehostingVhostArrayOutput() SimplehostingVhostArrayOutput
	ToSimplehostingVhostArrayOutputWithContext(context.Context) SimplehostingVhostArrayOutput
}

type SimplehostingVhostArray []SimplehostingVhostInput

func (SimplehostingVhostArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SimplehostingVhost)(nil)).Elem()
}

func (i SimplehostingVhostArray) ToSimplehostingVhostArrayOutput() SimplehostingVhostArrayOutput {
	return i.ToSimplehostingVhostArrayOutputWithContext(context.Background())
}

func (i SimplehostingVhostArray) ToSimplehostingVhostArrayOutputWithContext(ctx context.Context) SimplehostingVhostArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SimplehostingVhostArrayOutput)
}

// SimplehostingVhostMapInput is an input type that accepts SimplehostingVhostMap and SimplehostingVhostMapOutput values.
// You can construct a concrete instance of `SimplehostingVhostMapInput` via:
//
//	SimplehostingVhostMap{ "key": SimplehostingVhostArgs{...} }
type SimplehostingVhostMapInput interface {
	pulumi.Input

	ToSimplehostingVhostMapOutput() SimplehostingVhostMapOutput
	ToSimplehostingVhostMapOutputWithContext(context.Context) SimplehostingVhostMapOutput
}

type SimplehostingVhostMap map[string]SimplehostingVhostInput

func (SimplehostingVhostMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SimplehostingVhost)(nil)).Elem()
}

func (i SimplehostingVhostMap) ToSimplehostingVhostMapOutput() SimplehostingVhostMapOutput {
	return i.ToSimplehostingVhostMapOutputWithContext(context.Background())
}

func (i SimplehostingVhostMap) ToSimplehostingVhostMapOutputWithContext(ctx context.Context) SimplehostingVhostMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SimplehostingVhostMapOutput)
}

type SimplehostingVhostOutput struct{ *pulumi.OutputState }

func (SimplehostingVhostOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**SimplehostingVhost)(nil)).Elem()
}

func (o SimplehostingVhostOutput) ToSimplehostingVhostOutput() SimplehostingVhostOutput {
	return o
}

func (o SimplehostingVhostOutput) ToSimplehostingVhostOutputWithContext(ctx context.Context) SimplehostingVhostOutput {
	return o
}

// The name of an application to install ('grav', 'matomo', 'nextcloud', 'prestashop', 'wordpress')
func (o SimplehostingVhostOutput) Application() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *SimplehostingVhost) pulumi.StringPtrOutput { return v.Application }).(pulumi.StringPtrOutput)
}

// The ID of the created free certificate
func (o SimplehostingVhostOutput) CertificateId() pulumi.StringOutput {
	return o.ApplyT(func(v *SimplehostingVhost) pulumi.StringOutput { return v.CertificateId }).(pulumi.StringOutput)
}

// The FQDN of the Vhost
func (o SimplehostingVhostOutput) Fqdn() pulumi.StringOutput {
	return o.ApplyT(func(v *SimplehostingVhost) pulumi.StringOutput { return v.Fqdn }).(pulumi.StringOutput)
}

// The ID of the SimpleHosting instance
func (o SimplehostingVhostOutput) InstanceId() pulumi.StringOutput {
	return o.ApplyT(func(v *SimplehostingVhost) pulumi.StringOutput { return v.InstanceId }).(pulumi.StringOutput)
}

// Whether to alter the linked DNS Zone
func (o SimplehostingVhostOutput) LinkedDnsZoneAlteration() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *SimplehostingVhost) pulumi.BoolPtrOutput { return v.LinkedDnsZoneAlteration }).(pulumi.BoolPtrOutput)
}

type SimplehostingVhostArrayOutput struct{ *pulumi.OutputState }

func (SimplehostingVhostArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*SimplehostingVhost)(nil)).Elem()
}

func (o SimplehostingVhostArrayOutput) ToSimplehostingVhostArrayOutput() SimplehostingVhostArrayOutput {
	return o
}

func (o SimplehostingVhostArrayOutput) ToSimplehostingVhostArrayOutputWithContext(ctx context.Context) SimplehostingVhostArrayOutput {
	return o
}

func (o SimplehostingVhostArrayOutput) Index(i pulumi.IntInput) SimplehostingVhostOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *SimplehostingVhost {
		return vs[0].([]*SimplehostingVhost)[vs[1].(int)]
	}).(SimplehostingVhostOutput)
}

type SimplehostingVhostMapOutput struct{ *pulumi.OutputState }

func (SimplehostingVhostMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*SimplehostingVhost)(nil)).Elem()
}

func (o SimplehostingVhostMapOutput) ToSimplehostingVhostMapOutput() SimplehostingVhostMapOutput {
	return o
}

func (o SimplehostingVhostMapOutput) ToSimplehostingVhostMapOutputWithContext(ctx context.Context) SimplehostingVhostMapOutput {
	return o
}

func (o SimplehostingVhostMapOutput) MapIndex(k pulumi.StringInput) SimplehostingVhostOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *SimplehostingVhost {
		return vs[0].(map[string]*SimplehostingVhost)[vs[1].(string)]
	}).(SimplehostingVhostOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*SimplehostingVhostInput)(nil)).Elem(), &SimplehostingVhost{})
	pulumi.RegisterInputType(reflect.TypeOf((*SimplehostingVhostArrayInput)(nil)).Elem(), SimplehostingVhostArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*SimplehostingVhostMapInput)(nil)).Elem(), SimplehostingVhostMap{})
	pulumi.RegisterOutputType(SimplehostingVhostOutput{})
	pulumi.RegisterOutputType(SimplehostingVhostArrayOutput{})
	pulumi.RegisterOutputType(SimplehostingVhostMapOutput{})
}
