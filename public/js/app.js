const setCookie = (name, value, expiryDays, domain, path, secure) => {
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie = 
        name + "=" + value + ";expires=" + exdate.toUTCString() + ";path=" + (path || "/")
        + (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
};

const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};




(()=>{

    const $cookieBanner = document.querySelector('.cookies-eu-banner');
    const $cookieBannerButton = $cookieBanner.querySelector("button");

    const $cookieName = 'cookiesBanner';

    const hasCookie = getCookie($cookieName);

    if(!hasCookie) {
        $cookieBanner.classList.remove('hidden');
    }

    $cookieBannerButton.addEventListener("click", ()=>{
        setCookie($cookieName, 'closed');
        $cookieBanner.remove();
    });
})();