# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['NameserversArgs', 'Nameservers']

@pulumi.input_type
class NameserversArgs:
    def __init__(__self__, *,
                 domain: pulumi.Input[str],
                 nameservers: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        The set of arguments for constructing a Nameservers resource.
        :param pulumi.Input[str] domain: The FQDN of the domain
        :param pulumi.Input[Sequence[pulumi.Input[str]]] nameservers: A list of nameservers for the domain
        """
        pulumi.set(__self__, "domain", domain)
        if nameservers is not None:
            pulumi.set(__self__, "nameservers", nameservers)

    @property
    @pulumi.getter
    def domain(self) -> pulumi.Input[str]:
        """
        The FQDN of the domain
        """
        return pulumi.get(self, "domain")

    @domain.setter
    def domain(self, value: pulumi.Input[str]):
        pulumi.set(self, "domain", value)

    @property
    @pulumi.getter
    def nameservers(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        A list of nameservers for the domain
        """
        return pulumi.get(self, "nameservers")

    @nameservers.setter
    def nameservers(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "nameservers", value)


@pulumi.input_type
class _NameserversState:
    def __init__(__self__, *,
                 domain: Optional[pulumi.Input[str]] = None,
                 nameservers: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        Input properties used for looking up and filtering Nameservers resources.
        :param pulumi.Input[str] domain: The FQDN of the domain
        :param pulumi.Input[Sequence[pulumi.Input[str]]] nameservers: A list of nameservers for the domain
        """
        if domain is not None:
            pulumi.set(__self__, "domain", domain)
        if nameservers is not None:
            pulumi.set(__self__, "nameservers", nameservers)

    @property
    @pulumi.getter
    def domain(self) -> Optional[pulumi.Input[str]]:
        """
        The FQDN of the domain
        """
        return pulumi.get(self, "domain")

    @domain.setter
    def domain(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "domain", value)

    @property
    @pulumi.getter
    def nameservers(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        A list of nameservers for the domain
        """
        return pulumi.get(self, "nameservers")

    @nameservers.setter
    def nameservers(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "nameservers", value)


warnings.warn("""gandi.index/nameservers.Nameservers has been deprecated in favor of gandi.domains/nameservers.Nameservers""", DeprecationWarning)


class Nameservers(pulumi.CustomResource):
    warnings.warn("""gandi.index/nameservers.Nameservers has been deprecated in favor of gandi.domains/nameservers.Nameservers""", DeprecationWarning)

    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 domain: Optional[pulumi.Input[str]] = None,
                 nameservers: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None):
        """
        Create a Nameservers resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] domain: The FQDN of the domain
        :param pulumi.Input[Sequence[pulumi.Input[str]]] nameservers: A list of nameservers for the domain
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: NameserversArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Create a Nameservers resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param NameserversArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(NameserversArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 domain: Optional[pulumi.Input[str]] = None,
                 nameservers: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None):
        pulumi.log.warn("""Nameservers is deprecated: gandi.index/nameservers.Nameservers has been deprecated in favor of gandi.domains/nameservers.Nameservers""")
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = NameserversArgs.__new__(NameserversArgs)

            if domain is None and not opts.urn:
                raise TypeError("Missing required property 'domain'")
            __props__.__dict__["domain"] = domain
            __props__.__dict__["nameservers"] = nameservers
        super(Nameservers, __self__).__init__(
            'gandi:index/nameservers:Nameservers',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            domain: Optional[pulumi.Input[str]] = None,
            nameservers: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None) -> 'Nameservers':
        """
        Get an existing Nameservers resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] domain: The FQDN of the domain
        :param pulumi.Input[Sequence[pulumi.Input[str]]] nameservers: A list of nameservers for the domain
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _NameserversState.__new__(_NameserversState)

        __props__.__dict__["domain"] = domain
        __props__.__dict__["nameservers"] = nameservers
        return Nameservers(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def domain(self) -> pulumi.Output[str]:
        """
        The FQDN of the domain
        """
        return pulumi.get(self, "domain")

    @property
    @pulumi.getter
    def nameservers(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        A list of nameservers for the domain
        """
        return pulumi.get(self, "nameservers")

