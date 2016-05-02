# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from plone.app.portlets.interfaces import IColumn


class IMedialogSpacetecthemeLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""

class IBelow(IColumn):
    """here we put the below content portlets
    """    
