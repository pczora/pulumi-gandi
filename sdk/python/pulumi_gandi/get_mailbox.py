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
    'GetMailboxResult',
    'AwaitableGetMailboxResult',
    'get_mailbox',
    'get_mailbox_output',
]

warnings.warn("""gandi.index/getmailbox.getMailbox has been deprecated in favor of gandi.email/getmailbox.getMailbox""", DeprecationWarning)

@pulumi.output_type
class GetMailboxResult:
    """
    A collection of values returned by getMailbox.
    """
    def __init__(__self__, domain=None, id=None, mailbox_id=None):
        if domain and not isinstance(domain, str):
            raise TypeError("Expected argument 'domain' to be a str")
        pulumi.set(__self__, "domain", domain)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if mailbox_id and not isinstance(mailbox_id, str):
            raise TypeError("Expected argument 'mailbox_id' to be a str")
        pulumi.set(__self__, "mailbox_id", mailbox_id)

    @property
    @pulumi.getter
    def domain(self) -> str:
        return pulumi.get(self, "domain")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="mailboxId")
    def mailbox_id(self) -> str:
        return pulumi.get(self, "mailbox_id")


class AwaitableGetMailboxResult(GetMailboxResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetMailboxResult(
            domain=self.domain,
            id=self.id,
            mailbox_id=self.mailbox_id)


def get_mailbox(domain: Optional[str] = None,
                mailbox_id: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetMailboxResult:
    """
    Use this data source to access information about an existing resource.
    """
    pulumi.log.warn("""get_mailbox is deprecated: gandi.index/getmailbox.getMailbox has been deprecated in favor of gandi.email/getmailbox.getMailbox""")
    __args__ = dict()
    __args__['domain'] = domain
    __args__['mailboxId'] = mailbox_id
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('gandi:index/getMailbox:getMailbox', __args__, opts=opts, typ=GetMailboxResult).value

    return AwaitableGetMailboxResult(
        domain=pulumi.get(__ret__, 'domain'),
        id=pulumi.get(__ret__, 'id'),
        mailbox_id=pulumi.get(__ret__, 'mailbox_id'))


@_utilities.lift_output_func(get_mailbox)
def get_mailbox_output(domain: Optional[pulumi.Input[str]] = None,
                       mailbox_id: Optional[pulumi.Input[str]] = None,
                       opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetMailboxResult]:
    """
    Use this data source to access information about an existing resource.
    """
    pulumi.log.warn("""get_mailbox is deprecated: gandi.index/getmailbox.getMailbox has been deprecated in favor of gandi.email/getmailbox.getMailbox""")
    ...
