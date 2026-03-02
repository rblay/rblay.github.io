const CF_ANALYTICS_TOKEN = "dc75fe3ead054eda9faecc021636a2c1";

if (CF_ANALYTICS_TOKEN) {
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
  analyticsScript.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: CF_ANALYTICS_TOKEN })
  );
  document.head.appendChild(analyticsScript);
}
