export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const response = await fetch("https://api.beehiiv.com/v1/publications/e7ede1ef-2a11-4113-8007-407511d45dba/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Awjb2QSpjbzc6z6TlcOsFfMockvfYHboCGYWKbMTUPNqCfTVs2PxqaBRdUwQfwWz",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
