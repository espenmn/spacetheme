# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from medialog.spacetectheme.testing import MEDIALOG_SPACETECTHEME_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that medialog.spacetectheme is properly installed."""

    layer = MEDIALOG_SPACETECTHEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if medialog.spacetectheme is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'medialog.spacetectheme'))

    def test_browserlayer(self):
        """Test that IMedialogSpacetecthemeLayer is registered."""
        from medialog.spacetectheme.interfaces import (
            IMedialogSpacetecthemeLayer)
        from plone.browserlayer import utils
        self.assertIn(IMedialogSpacetecthemeLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = MEDIALOG_SPACETECTHEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['medialog.spacetectheme'])

    def test_product_uninstalled(self):
        """Test if medialog.spacetectheme is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'medialog.spacetectheme'))

    def test_browserlayer_removed(self):
        """Test that IMedialogSpacetecthemeLayer is removed."""
        from medialog.spacetectheme.interfaces import IMedialogSpacetecthemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IMedialogSpacetecthemeLayer, utils.registered_layers())
