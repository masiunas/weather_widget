/** @odoo-module **/

import {qweb as QWeb} from 'web.core';
import SystrayMenu from 'web.SystrayMenu';
import Widget from 'web.Widget';


let WeatherWidget = Widget.extend({
    name: 'weather_tray_widget',
    template: 'weather_widget.weather_widget',
    events: {
        'click .o_mail_activity_action': '_onActivityActionClick',
    },
    start: function () {
        var settings = {
            "url": "https://wttr.in/?format=j1",
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (response) {
            let btnText = `${response.current_condition[0].temp_C} ℃`;
            var popover = $(QWeb.render('weather_widget.weather_widget_popover_btn', {btnText: btnText}));
            var content = $(QWeb.render('weather_widget.weather_widget_popover_data', {
                popoverData: response.current_condition[0],
                city: response.nearest_area[0].areaName[0].value
            }));
            popover.appendTo($(".weather_widget_block"));
            $(function () {
                $('.weather_widget_btn').popover({
                    trigger: 'hover',
                    placement: 'bottom',
                    html: true,
                    content: content,
                })
            })
        });

        return this._super();
    },
});

SystrayMenu.Items.push(WeatherWidget);
