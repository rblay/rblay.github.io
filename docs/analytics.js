const CF_ANALYTICS_TOKEN = "<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dc75fe3ead054eda9faecc021636a2c1"}'></script><!-- End Cloudflare Web Analytics -->";

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
