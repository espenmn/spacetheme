# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import medialog.spacetectheme


class MedialogSpacetecthemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=medialog.spacetectheme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'medialog.spacetectheme:default')


MEDIALOG_SPACETECTHEME_FIXTURE = MedialogSpacetecthemeLayer()


MEDIALOG_SPACETECTHEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(MEDIALOG_SPACETECTHEME_FIXTURE,),
    name='MedialogSpacetecthemeLayer:IntegrationTesting'
)


MEDIALOG_SPACETECTHEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(MEDIALOG_SPACETECTHEME_FIXTURE,),
    name='MedialogSpacetecthemeLayer:FunctionalTesting'
)


MEDIALOG_SPACETECTHEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        MEDIALOG_SPACETECTHEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='MedialogSpacetecthemeLayer:AcceptanceTesting'
)
