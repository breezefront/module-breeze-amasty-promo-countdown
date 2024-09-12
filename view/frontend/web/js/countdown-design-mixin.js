define(['uiRegistry'], (registry) => {
    'use strict';

    var CountdownDesignMixin = {
        parent: function () {
            return registry.get(this.parentName);
        }
    };

    $.mixin('Amasty_PromoCountdown/js/design/circle', CountdownDesignMixin);
    $.mixin('Amasty_PromoCountdown/js/design/progress', CountdownDesignMixin);
    $.mixin('Amasty_PromoCountdown/js/design/round', CountdownDesignMixin);
});
