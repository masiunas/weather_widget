# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'Weather bar',
    'version': '15.0',
    'category': '',
    'description': """""",
    'depends': ['base', 'web'],
    'data': [],
    'license': 'LGPL-3',
    'assets': {
        'web.assets_backend': {
            '/weather_widget/static/src/js/weather_bar.js',
        },
        'web.assets_qweb': {
            '/weather_widget/static/src/xml/*.xml',
        },
    },
}
