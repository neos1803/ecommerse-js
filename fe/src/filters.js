import Vue from 'vue'

Vue.filter('toCurrency', function (value) {
    if (!value) {
        return value;
    }
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});