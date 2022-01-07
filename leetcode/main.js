var licenseKeyFormatting = function (s, k) {
    s = s.replaceAll("-", "").toUpperCase();
    let ans = "";
    for (let i = s.length - 1; i >= 0;) {
        for (let j = 0; j < k && i >= 0; ++j, --i) {
            ans = s[i] + ans;
        }
        if (i > 0) {
            ans = '-' + ans;
        }
    }
    return ans;
};