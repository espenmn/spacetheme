# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.app.portlets.interfaces import IColumn
    
from z3c.form import interfaces
from zope import schema
from zope.interface import alsoProvides
from plone.directives import form
from medialog.controlpanel.interfaces import IMedialogControlpanelSettingsProvider


class IMedialogSpacetecthemeLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""

class IBelow(IColumn):
    """here we put the below content portlets
    """    



class ISpacetecSettings(form.Schema):
    """Adds settings to medialog.controlpanel
    """

    form.fieldset(
        'frontslider',
        label=u'frontslder',
        fields=[
            'timeout',
            'speed',
        ],
    )

    speed = schema.Int(
            title=u"Speed",
    )

    timeout = schema.Int(
            title=u"Timeout (transition speed)",
    )

alsoProvides(ISpacetecSettings, IMedialogControlpanelSettingsProvider)