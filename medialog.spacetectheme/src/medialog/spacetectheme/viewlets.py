from datetime import date
from plone.app.layout.viewlets.common import ViewletBase
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from zope.component import getMultiAdapter


class BelowViewlet(ViewletBase):
    index = ViewPageTemplateFile('belowportlets.pt')

    def update(self):
        super(BelowViewlet, self).update()
        self.year = date.today().year

    def render_below_portlets(self):
        """

        """
        portlet_manager = getMultiAdapter(
            (self.context, self.request, self.__parent__), name='plone.belowportlets')
        portlet_manager.update()
        return portlet_manager.render()