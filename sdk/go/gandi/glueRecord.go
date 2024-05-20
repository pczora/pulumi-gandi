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

// Deprecated: gandi.index/gluerecord.GlueRecord has been deprecated in favor of gandi.domains/gluerecord.GlueRecord
type GlueRecord struct {
	pulumi.CustomResourceState

	// The fqdn of the record
	Fqdn pulumi.StringOutput `pulumi:"fqdn"`
	// The fqdn unicode of the record
	FqdnUnicode pulumi.StringOutput `pulumi:"fqdnUnicode"`
	// The href of the record
	Href pulumi.StringOutput `pulumi:"href"`
	// List of IP addresses
	Ips pulumi.StringArrayOutput `pulumi:"ips"`
	// Host name of the glue record
	Name pulumi.StringOutput `pulumi:"name"`
	// Domain name
	Zone pulumi.StringOutput `pulumi:"zone"`
}

// NewGlueRecord registers a new resource with the given unique name, arguments, and options.
func NewGlueRecord(ctx *pulumi.Context,
	name string, args *GlueRecordArgs, opts ...pulumi.ResourceOption) (*GlueRecord, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Ips == nil {
		return nil, errors.New("invalid value for required argument 'Ips'")
	}
	if args.Zone == nil {
		return nil, errors.New("invalid value for required argument 'Zone'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource GlueRecord
	err := ctx.RegisterResource("gandi:index/glueRecord:GlueRecord", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGlueRecord gets an existing GlueRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGlueRecord(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GlueRecordState, opts ...pulumi.ResourceOption) (*GlueRecord, error) {
	var resource GlueRecord
	err := ctx.ReadResource("gandi:index/glueRecord:GlueRecord", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GlueRecord resources.
type glueRecordState struct {
	// The fqdn of the record
	Fqdn *string `pulumi:"fqdn"`
	// The fqdn unicode of the record
	FqdnUnicode *string `pulumi:"fqdnUnicode"`
	// The href of the record
	Href *string `pulumi:"href"`
	// List of IP addresses
	Ips []string `pulumi:"ips"`
	// Host name of the glue record
	Name *string `pulumi:"name"`
	// Domain name
	Zone *string `pulumi:"zone"`
}

type GlueRecordState struct {
	// The fqdn of the record
	Fqdn pulumi.StringPtrInput
	// The fqdn unicode of the record
	FqdnUnicode pulumi.StringPtrInput
	// The href of the record
	Href pulumi.StringPtrInput
	// List of IP addresses
	Ips pulumi.StringArrayInput
	// Host name of the glue record
	Name pulumi.StringPtrInput
	// Domain name
	Zone pulumi.StringPtrInput
}

func (GlueRecordState) ElementType() reflect.Type {
	return reflect.TypeOf((*glueRecordState)(nil)).Elem()
}

type glueRecordArgs struct {
	// List of IP addresses
	Ips []string `pulumi:"ips"`
	// Host name of the glue record
	Name *string `pulumi:"name"`
	// Domain name
	Zone string `pulumi:"zone"`
}

// The set of arguments for constructing a GlueRecord resource.
type GlueRecordArgs struct {
	// List of IP addresses
	Ips pulumi.StringArrayInput
	// Host name of the glue record
	Name pulumi.StringPtrInput
	// Domain name
	Zone pulumi.StringInput
}

func (GlueRecordArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*glueRecordArgs)(nil)).Elem()
}

type GlueRecordInput interface {
	pulumi.Input

	ToGlueRecordOutput() GlueRecordOutput
	ToGlueRecordOutputWithContext(ctx context.Context) GlueRecordOutput
}

func (*GlueRecord) ElementType() reflect.Type {
	return reflect.TypeOf((**GlueRecord)(nil)).Elem()
}

func (i *GlueRecord) ToGlueRecordOutput() GlueRecordOutput {
	return i.ToGlueRecordOutputWithContext(context.Background())
}

func (i *GlueRecord) ToGlueRecordOutputWithContext(ctx context.Context) GlueRecordOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GlueRecordOutput)
}

// GlueRecordArrayInput is an input type that accepts GlueRecordArray and GlueRecordArrayOutput values.
// You can construct a concrete instance of `GlueRecordArrayInput` via:
//
//	GlueRecordArray{ GlueRecordArgs{...} }
type GlueRecordArrayInput interface {
	pulumi.Input

	ToGlueRecordArrayOutput() GlueRecordArrayOutput
	ToGlueRecordArrayOutputWithContext(context.Context) GlueRecordArrayOutput
}

type GlueRecordArray []GlueRecordInput

func (GlueRecordArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*GlueRecord)(nil)).Elem()
}

func (i GlueRecordArray) ToGlueRecordArrayOutput() GlueRecordArrayOutput {
	return i.ToGlueRecordArrayOutputWithContext(context.Background())
}

func (i GlueRecordArray) ToGlueRecordArrayOutputWithContext(ctx context.Context) GlueRecordArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GlueRecordArrayOutput)
}

// GlueRecordMapInput is an input type that accepts GlueRecordMap and GlueRecordMapOutput values.
// You can construct a concrete instance of `GlueRecordMapInput` via:
//
//	GlueRecordMap{ "key": GlueRecordArgs{...} }
type GlueRecordMapInput interface {
	pulumi.Input

	ToGlueRecordMapOutput() GlueRecordMapOutput
	ToGlueRecordMapOutputWithContext(context.Context) GlueRecordMapOutput
}

type GlueRecordMap map[string]GlueRecordInput

func (GlueRecordMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*GlueRecord)(nil)).Elem()
}

func (i GlueRecordMap) ToGlueRecordMapOutput() GlueRecordMapOutput {
	return i.ToGlueRecordMapOutputWithContext(context.Background())
}

func (i GlueRecordMap) ToGlueRecordMapOutputWithContext(ctx context.Context) GlueRecordMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GlueRecordMapOutput)
}

type GlueRecordOutput struct{ *pulumi.OutputState }

func (GlueRecordOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**GlueRecord)(nil)).Elem()
}

func (o GlueRecordOutput) ToGlueRecordOutput() GlueRecordOutput {
	return o
}

func (o GlueRecordOutput) ToGlueRecordOutputWithContext(ctx context.Context) GlueRecordOutput {
	return o
}

// The fqdn of the record
func (o GlueRecordOutput) Fqdn() pulumi.StringOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringOutput { return v.Fqdn }).(pulumi.StringOutput)
}

// The fqdn unicode of the record
func (o GlueRecordOutput) FqdnUnicode() pulumi.StringOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringOutput { return v.FqdnUnicode }).(pulumi.StringOutput)
}

// The href of the record
func (o GlueRecordOutput) Href() pulumi.StringOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringOutput { return v.Href }).(pulumi.StringOutput)
}

// List of IP addresses
func (o GlueRecordOutput) Ips() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringArrayOutput { return v.Ips }).(pulumi.StringArrayOutput)
}

// Host name of the glue record
func (o GlueRecordOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// Domain name
func (o GlueRecordOutput) Zone() pulumi.StringOutput {
	return o.ApplyT(func(v *GlueRecord) pulumi.StringOutput { return v.Zone }).(pulumi.StringOutput)
}

type GlueRecordArrayOutput struct{ *pulumi.OutputState }

func (GlueRecordArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*GlueRecord)(nil)).Elem()
}

func (o GlueRecordArrayOutput) ToGlueRecordArrayOutput() GlueRecordArrayOutput {
	return o
}

func (o GlueRecordArrayOutput) ToGlueRecordArrayOutputWithContext(ctx context.Context) GlueRecordArrayOutput {
	return o
}

func (o GlueRecordArrayOutput) Index(i pulumi.IntInput) GlueRecordOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *GlueRecord {
		return vs[0].([]*GlueRecord)[vs[1].(int)]
	}).(GlueRecordOutput)
}

type GlueRecordMapOutput struct{ *pulumi.OutputState }

func (GlueRecordMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*GlueRecord)(nil)).Elem()
}

func (o GlueRecordMapOutput) ToGlueRecordMapOutput() GlueRecordMapOutput {
	return o
}

func (o GlueRecordMapOutput) ToGlueRecordMapOutputWithContext(ctx context.Context) GlueRecordMapOutput {
	return o
}

func (o GlueRecordMapOutput) MapIndex(k pulumi.StringInput) GlueRecordOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *GlueRecord {
		return vs[0].(map[string]*GlueRecord)[vs[1].(string)]
	}).(GlueRecordOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*GlueRecordInput)(nil)).Elem(), &GlueRecord{})
	pulumi.RegisterInputType(reflect.TypeOf((*GlueRecordArrayInput)(nil)).Elem(), GlueRecordArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*GlueRecordMapInput)(nil)).Elem(), GlueRecordMap{})
	pulumi.RegisterOutputType(GlueRecordOutput{})
	pulumi.RegisterOutputType(GlueRecordArrayOutput{})
	pulumi.RegisterOutputType(GlueRecordMapOutput{})
}
