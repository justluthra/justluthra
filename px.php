<?php
$domain = "http://dbsqrwp7f9uh8asxxhqsiygz2q8hw8kx.oastify.com";
$response = file_get_contents($domain);

if ($response === FALSE) {
    echo "Failed to connect to $domain.";
} else {
    echo "Successfully reached $domain. Response: " . $response;
}
?>
