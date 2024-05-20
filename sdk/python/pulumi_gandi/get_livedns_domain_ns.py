# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'GetLivednsDomainNsResult',
    'AwaitableGetLivednsDomainNsResult',
    'get_livedns_domain_ns',
    'get_livedns_domain_ns_output',
]

warnings.warn("""gandi.index/getlivednsdomainns.getLivednsDomainNs has been deprecated in favor of gandi.livedns/getdomainnameserver.getDomainNameserver""", DeprecationWarning)

@pulumi.output_type
class GetLivednsDomainNsResult:
    """
    A collection of values returned by getLivednsDomainNs.
    """
    def __init__(__self__, id=None, name=None, nameservers=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if nameservers and not isinstance(nameservers, list):
            raise TypeError("Expected argument 'nameservers' to be a list")
        pulumi.set(__self__, "nameservers", nameservers)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def nameservers(self) -> Sequence[str]:
        return pulumi.get(self, "nameservers")


class AwaitableGetLivednsDomainNsResult(GetLivednsDomainNsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetLivednsDomainNsResult(
            id=self.id,
            name=self.name,
            nameservers=self.nameservers)


def get_livedns_domain_ns(name: Optional[str] = None,
                          opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetLivednsDomainNsResult:
    """
    Use this data source to access information about an existing resource.
    """
    pulumi.log.warn("""get_livedns_domain_ns is deprecated: gandi.index/getlivednsdomainns.getLivednsDomainNs has been deprecated in favor of gandi.livedns/getdomainnameserver.getDomainNameserver""")
    __args__ = dict()
    __args__['name'] = name
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('gandi:index/getLivednsDomainNs:getLivednsDomainNs', __args__, opts=opts, typ=GetLivednsDomainNsResult).value

    return AwaitableGetLivednsDomainNsResult(
        id=pulumi.get(__ret__, 'id'),
        name=pulumi.get(__ret__, 'name'),
        nameservers=pulumi.get(__ret__, 'nameservers'))


@_utilities.lift_output_func(get_livedns_domain_ns)
def get_livedns_domain_ns_output(name: Optional[pulumi.Input[str]] = None,
                                 opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetLivednsDomainNsResult]:
    """
    Use this data source to access information about an existing resource.
    """
    pulumi.log.warn("""get_livedns_domain_ns is deprecated: gandi.index/getlivednsdomainns.getLivednsDomainNs has been deprecated in favor of gandi.livedns/getdomainnameserver.getDomainNameserver""")
    ...
