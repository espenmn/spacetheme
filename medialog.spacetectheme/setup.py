# -*- coding: utf-8 -*-
"""Installer for the medialog.spacetectheme package."""

from setuptools import find_packages
from setuptools import setup


long_description = '\n\n'.join([
    open('README.rst').read(),
    open('CONTRIBUTORS.rst').read(),
    open('CHANGES.rst').read(),
])


setup(
    name='medialog.spacetectheme',
    version='1.0',
    description="Spacetec theme",
    long_description=long_description,
    # Get more from https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 5.0",
        "Framework :: Plone :: 1.0",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords='Python Plone',
    author='Espen Moe-Nilssen',
    author_email='espen@medialog.no',
    url='https://pypi.python.org/pypi/medialog.spacetectheme',
    license='GPL version 2',
    packages=find_packages('src', exclude=['ez_setup']),
    namespace_packages=['medialog'],
    package_dir={'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'collective.themefragments',
        'medialog.iconpicker',
        'plone.api',
		'plone.app.contentlisting',
		'medialog.leadimagesize',
		'medialog.bergensiana>0.2.2',
        'plone.app.theming',
        'plone.app.themingplugins',
        'Products.GenericSetup>=1.8.2',
        'setuptools',
		'z3c.jbot',
	],
    extras_require={
        'test': [
            'plone.app.testing',
            # Plone KGS does not use this version, because it would break
            # Remove if your package shall be part of coredev.
            # plone_coredev tests as of 2016-04-01.
            'plone.testing>=5.0.0',
            'plone.app.contenttypes',
            'plone.app.robotframework[debug]',
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
