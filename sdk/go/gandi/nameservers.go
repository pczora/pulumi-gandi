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

// Deprecated: gandi.index/nameservers.Nameservers has been deprecated in favor of gandi.domains/nameservers.Nameservers
type Nameservers struct {
	pulumi.CustomResourceState

	// The FQDN of the domain
	Domain pulumi.StringOutput `pulumi:"domain"`
	// A list of nameservers for the domain
	Nameservers pulumi.StringArrayOutput `pulumi:"nameservers"`
}

// NewNameservers registers a new resource with the given unique name, arguments, and options.
func NewNameservers(ctx *pulumi.Context,
	name string, args *NameserversArgs, opts ...pulumi.ResourceOption) (*Nameservers, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Domain == nil {
		return nil, errors.New("invalid value for required argument 'Domain'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Nameservers
	err := ctx.RegisterResource("gandi:index/nameservers:Nameservers", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNameservers gets an existing Nameservers resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNameservers(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NameserversState, opts ...pulumi.ResourceOption) (*Nameservers, error) {
	var resource Nameservers
	err := ctx.ReadResource("gandi:index/nameservers:Nameservers", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Nameservers resources.
type nameserversState struct {
	// The FQDN of the domain
	Domain *string `pulumi:"domain"`
	// A list of nameservers for the domain
	Nameservers []string `pulumi:"nameservers"`
}

type NameserversState struct {
	// The FQDN of the domain
	Domain pulumi.StringPtrInput
	// A list of nameservers for the domain
	Nameservers pulumi.StringArrayInput
}

func (NameserversState) ElementType() reflect.Type {
	return reflect.TypeOf((*nameserversState)(nil)).Elem()
}

type nameserversArgs struct {
	// The FQDN of the domain
	Domain string `pulumi:"domain"`
	// A list of nameservers for the domain
	Nameservers []string `pulumi:"nameservers"`
}

// The set of arguments for constructing a Nameservers resource.
type NameserversArgs struct {
	// The FQDN of the domain
	Domain pulumi.StringInput
	// A list of nameservers for the domain
	Nameservers pulumi.StringArrayInput
}

func (NameserversArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*nameserversArgs)(nil)).Elem()
}

type NameserversInput interface {
	pulumi.Input

	ToNameserversOutput() NameserversOutput
	ToNameserversOutputWithContext(ctx context.Context) NameserversOutput
}

func (*Nameservers) ElementType() reflect.Type {
	return reflect.TypeOf((**Nameservers)(nil)).Elem()
}

func (i *Nameservers) ToNameserversOutput() NameserversOutput {
	return i.ToNameserversOutputWithContext(context.Background())
}

func (i *Nameservers) ToNameserversOutputWithContext(ctx context.Context) NameserversOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NameserversOutput)
}

// NameserversArrayInput is an input type that accepts NameserversArray and NameserversArrayOutput values.
// You can construct a concrete instance of `NameserversArrayInput` via:
//
//	NameserversArray{ NameserversArgs{...} }
type NameserversArrayInput interface {
	pulumi.Input

	ToNameserversArrayOutput() NameserversArrayOutput
	ToNameserversArrayOutputWithContext(context.Context) NameserversArrayOutput
}

type NameserversArray []NameserversInput

func (NameserversArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Nameservers)(nil)).Elem()
}

func (i NameserversArray) ToNameserversArrayOutput() NameserversArrayOutput {
	return i.ToNameserversArrayOutputWithContext(context.Background())
}

func (i NameserversArray) ToNameserversArrayOutputWithContext(ctx context.Context) NameserversArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NameserversArrayOutput)
}

// NameserversMapInput is an input type that accepts NameserversMap and NameserversMapOutput values.
// You can construct a concrete instance of `NameserversMapInput` via:
//
//	NameserversMap{ "key": NameserversArgs{...} }
type NameserversMapInput interface {
	pulumi.Input

	ToNameserversMapOutput() NameserversMapOutput
	ToNameserversMapOutputWithContext(context.Context) NameserversMapOutput
}

type NameserversMap map[string]NameserversInput

func (NameserversMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Nameservers)(nil)).Elem()
}

func (i NameserversMap) ToNameserversMapOutput() NameserversMapOutput {
	return i.ToNameserversMapOutputWithContext(context.Background())
}

func (i NameserversMap) ToNameserversMapOutputWithContext(ctx context.Context) NameserversMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NameserversMapOutput)
}

type NameserversOutput struct{ *pulumi.OutputState }

func (NameserversOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Nameservers)(nil)).Elem()
}

func (o NameserversOutput) ToNameserversOutput() NameserversOutput {
	return o
}

func (o NameserversOutput) ToNameserversOutputWithContext(ctx context.Context) NameserversOutput {
	return o
}

// The FQDN of the domain
func (o NameserversOutput) Domain() pulumi.StringOutput {
	return o.ApplyT(func(v *Nameservers) pulumi.StringOutput { return v.Domain }).(pulumi.StringOutput)
}

// A list of nameservers for the domain
func (o NameserversOutput) Nameservers() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *Nameservers) pulumi.StringArrayOutput { return v.Nameservers }).(pulumi.StringArrayOutput)
}

type NameserversArrayOutput struct{ *pulumi.OutputState }

func (NameserversArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Nameservers)(nil)).Elem()
}

func (o NameserversArrayOutput) ToNameserversArrayOutput() NameserversArrayOutput {
	return o
}

func (o NameserversArrayOutput) ToNameserversArrayOutputWithContext(ctx context.Context) NameserversArrayOutput {
	return o
}

func (o NameserversArrayOutput) Index(i pulumi.IntInput) NameserversOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Nameservers {
		return vs[0].([]*Nameservers)[vs[1].(int)]
	}).(NameserversOutput)
}

type NameserversMapOutput struct{ *pulumi.OutputState }

func (NameserversMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Nameservers)(nil)).Elem()
}

func (o NameserversMapOutput) ToNameserversMapOutput() NameserversMapOutput {
	return o
}

func (o NameserversMapOutput) ToNameserversMapOutputWithContext(ctx context.Context) NameserversMapOutput {
	return o
}

func (o NameserversMapOutput) MapIndex(k pulumi.StringInput) NameserversOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Nameservers {
		return vs[0].(map[string]*Nameservers)[vs[1].(string)]
	}).(NameserversOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*NameserversInput)(nil)).Elem(), &Nameservers{})
	pulumi.RegisterInputType(reflect.TypeOf((*NameserversArrayInput)(nil)).Elem(), NameserversArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*NameserversMapInput)(nil)).Elem(), NameserversMap{})
	pulumi.RegisterOutputType(NameserversOutput{})
	pulumi.RegisterOutputType(NameserversArrayOutput{})
	pulumi.RegisterOutputType(NameserversMapOutput{})
}
